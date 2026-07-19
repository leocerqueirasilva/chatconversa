import Cors from 'micro-cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { webhookDoppus } from '@typebot.io/billing/api/webhookDoppus'
import { buffer } from 'micro'

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Captura o corpo da requisição como um buffer
      const rawBody = await buffer(req)
      const data = rawBody.toString()

      // Verifica se o rawBody tem conteúdo
      if (!data) {
        return res.status(200).end('Nenhum conteúdo recebido')
      }

      console.log('Dados do webhook.ts', JSON.parse(data))
      return webhookDoppus(req, res)
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error)
      return res.status(500).send('Erro ao processar a solicitação')
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end('Method Not Allowed')
  }
}

export default cors(handler)
