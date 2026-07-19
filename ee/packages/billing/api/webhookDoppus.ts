import { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'micro'
import prisma from '@typebot.io/lib/prisma'

export const webhookDoppus = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Obtém o corpo da requisição como buffer
      const buf = await buffer(req)
      const data = JSON.parse(buf.toString())

      // Extrai o email, nome da oferta e o código em status
      const email = data.customer?.email || 'Email não encontrado'
      const offerName = data.items?.[0]?.offer_name || 'Nome da oferta não encontrado'
      const statusCode = data.status?.code || 'Código de status não encontrado'

      // Verifica se o email existe na tabela User
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          id: true,
        },
      })

      let expireDate = new Date()

      if (offerName === 'oferta teste') {
        expireDate.setDate(expireDate.getDate() + 30)
      }
      
      if (offerName === 'Checkout Mensal') {
        expireDate.setDate(expireDate.getDate() + 30)
      }

      if (offerName === 'Checkout Anual') {
        expireDate.setDate(expireDate.getDate() + 365)
      }

      if (user) {
        console.log('ID do Usuário vinculado ao email:', user.id)

        // Busca o workspace vinculado ao usuário
        const workspace = await prisma.memberInWorkspace.findFirst({
          where: {
            userId: user.id,
          },
          select: {
            workspaceId: true,
            workspace: {
              select: {
                name: true,
                plan: true,
              },
            },
          },
        })

        if (workspace) {
          console.log('Workspace ID vinculado ao usuário:', workspace.workspaceId)
          console.log('Nome do Workspace:', workspace.workspace.name)
          console.log('Plano do Workspace:', workspace.workspace.plan)

          // Verifica se o código de status é "approved" e altera o plano para PRO
          if (statusCode === 'approved') {
            await prisma.workspace.update({
              where: {
                id: workspace.workspaceId,
              },
              data: {
                plan: 'PRO',
              },
            })
            console.log('Plano do Workspace alterado para PRO')
          }

          if (statusCode === 'approved') {
            // Insere os dados na tabela Order mesmo que o usuário não exista, usando SQL
                await prisma.$executeRaw`
                INSERT INTO "Order" (id, created, expire, status, email)
                VALUES (gen_random_uuid(), NOW(), ${expireDate}, ${statusCode === 'approved' ? 'active' : 'pending'}, ${email})
              `
            }
        } else {
          console.log('Nenhum workspace encontrado para o usuário.')
        }
      } else {
        console.log('Email não encontrado na tabela User.')

        if (statusCode === 'approved') {
          // Insere os dados na tabela Order mesmo que o usuário não exista, usando SQL
              await prisma.$executeRaw`
              INSERT INTO "Order" (id, created, expire, status, email)
              VALUES (gen_random_uuid(), NOW(), ${expireDate}, ${statusCode === 'approved' ? 'active' : 'pending'}, ${email})
            `
          }

        }

        
      // Imprime os dados no console
      console.log('Email:', email)
      console.log('Nome da Oferta:', offerName)
      console.log('Código de Status:', statusCode)

      // Envia uma resposta de sucesso
      res.status(200).send('Webhook recebido e processado com sucesso')
    } catch (err) {
      console.error('Erro ao processar o webhook:', err)
      
      // Verifica se 'err' é uma instância de 'Error'
      if (err instanceof Error) {
        return res.status(400).send(`Webhook Error: ${err.message}`)
      }
      
      // Caso não seja uma instância de 'Error', retorna um erro genérico
      return res.status(500).send('Erro desconhecido ocorreu.')
    }
  } else {
    // Responde com 405 Method Not Allowed se não for POST
    res.setHeader('Allow', ['POST'])
    res.status(405).send('Method Not Allowed')
  }
}

export const config = {
  api: {
    bodyParser: false, // Necessário para lidar com raw body (buffer)
  },
}
