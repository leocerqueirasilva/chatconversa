const express = require('express')
const cors = require('cors')
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js')
const qrcode = require('qrcode')
const axios = require('axios')

const app = express()
const port = 3010

// Configurar CORS
app.use(cors({
  origin: '*', // Permite todas as origens. Você pode ajustar conforme necessário.
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());

class WhatsAppClient {
  constructor() {
    this.isLoggedIn = false
    this.qrCode = null
    this.client = null
    this.isDestroyed = false
    this.__createClient()
  }

  async __createClient() {
    this.isDestroyed = false
    try {
      this.client = new Client({
        webVersionCache: {
          type: 'remote',
          remotePath:
            'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
        },
        authStrategy: new LocalAuth(),
      })

      this.client.on('qr', (qr) => {
        console.log('QR Code:', qr)
        this.qrCode = qr
      })

      this.client.on('ready', () => {
        console.log('Client is ready!')
        this.isLoggedIn = true
      })

      await this.client.initialize()
    } catch (error) {
      console.error('Error occurred while initializing client:', error)
    }
  }

  getAuth() {
    if (this.isDestroyed) {
      this.__createClient()
    }
    return {
      isLoggedIn: this.isLoggedIn,
      qrString: this.qrCode,
    }
  }

  async getClient() {
    return this.client
  }

  async destroyClient() {
    if (this.client) {
      await this.client.logout()
      this.isDestroyed = true
      this.isLoggedIn = false
      this.qrCode = null
    }
  }
}

const whatsAppClient = new WhatsAppClient()

app.get('/ping', (req, res) => {
  console.log('ping called');
  res.send('Pong');
})

app.get('/auth', async (req, res) => {
  try {

    console.log('auth called');
    let { qrString, isLoggedIn } = whatsAppClient.getAuth()

    let counter = 0
    while (!qrString && !isLoggedIn) {
      console.log('Waiting for QR code...' + counter++)
      await new Promise((resolve) => setTimeout(resolve, 500))
      let response = whatsAppClient.getAuth()
      qrString = response.qrString
      isLoggedIn = response.isLoggedIn
    }

    if (isLoggedIn) {
      return res.send({
        qrCode: null,
        isLoggedIn: true,
      })
    }

    if (qrString) {
      const qrCode = await qrcode.toDataURL(qrString)
      return res.send({
        qrCode,
        isLoggedIn,
      })
    }
  } catch (error) {
    console.error('Error occurred while generating QR code:', error)
    res.status(500).send('An error occurred while generating QR code')
  }
})

app.get('/logout', async (req, res) => {
  try {
    if (whatsAppClient.isDestroyed) {
      return res.send({ message: 'Client already destroyed' })
    }

    await whatsAppClient.destroyClient()
    res.send({ message: 'Logged out successfully' })
  } catch (error) {
    console.error('Error occurred while logging out:', error)
    res.status(500).send({
      errorMessage: 'An error occurred while logging out',
    })
  }
})

app.post('/send-message', async (req, res) => {
  try {
    if (!whatsAppClient.isLoggedIn) {
      console.log('Client is not logged in')
      return res.status(400).send({
        errorMessage: 'Client is not logged in',
      })
    }
    const { numbers, text, mediaLink } = req.body

    if (!numbers || numbers.length < 1 || (!text && !mediaLink)) {
      return res.status(400).send({
        errorMessage: 'Number and text or mediaLink are required',
      })
    }

    let number =
      numbers[0]?.charAt(0) === '+' ? numbers[0].substring(1) : numbers[0]
    number = number + '@c.us'
    const client = await whatsAppClient.getClient()

    if (text) {
      await client.sendMessage(number, text)
    }
    if (mediaLink) {
      const media = await axios.get(mediaLink, {
        responseType: 'arraybuffer',
      })

      const mediaFilename = mediaLink.split('/').pop()
      const mimeType = media.headers['content-type']
      const mediaDataBase64 = Buffer.from(media.data, 'binary').toString(
        'base64'
      )
      const isVideo = mimeType?.includes('video')
      const mediaMessage = new MessageMedia(
        mimeType,
        mediaDataBase64,
        mediaFilename
      )
      await client.sendMessage(number, mediaMessage, {
        sendMediaAsDocument: isVideo,
      })
    }

    res.send({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error occurred while sending message:', error)
    res.status(500).send({
      errorMessage: 'An error occurred while sending message',
    })
  }
})

app.listen(port, () => {
  console.log(`Wweb server listening at http://localhost:${port}`)
})
