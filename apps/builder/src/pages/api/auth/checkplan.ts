import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@typebot.io/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body

    try {

        // Verifica todas as ordens que precisam ser atualizadas para "pending"
        const expiredOrders = await prisma.$queryRaw<Array<{ id: string }>>`
        SELECT id
        FROM "Order"
        WHERE expire < NOW() AND status = 'active';
      `

      // Se houver ordens expiradas, atualiza o status delas para "pending"
      if (expiredOrders.length > 0) {
        const expiredOrderIds = expiredOrders.map(order => `'${order.id}'`).join(', ')
        await prisma.$executeRawUnsafe(`
          UPDATE "Order"
          SET status = 'pending'
          WHERE id IN (${expiredOrderIds});
        `)
        console.log('Ordens expiradas atualizadas para "pending".')
      }
      // Obtém o pedido mais recente para o usuário
      const order = await prisma.$queryRaw<Array<{ id: string, status: string, expire: Date }>>`
        SELECT *
        FROM "Order"
        WHERE email = ${email}
        ORDER BY "created" DESC
        LIMIT 1;
      `
      
      console.log(`Order Result:`, order);

      if (order.length > 0) {
        // Verifica se o status do pedido é "active"
        const isActiveOrder = order[0].status === 'active'

        // Seleciona o workspace correto (qualquer plano)
        const workspace = await prisma.$queryRaw<{ workspaceId: string, plan: string }[]>`
          SELECT "Workspace"."id" as "workspaceId", "Workspace"."plan"
          FROM "MemberInWorkspace"
          JOIN "Workspace" ON "Workspace"."id" = "MemberInWorkspace"."workspaceId"
          WHERE "MemberInWorkspace"."userId" = (
            SELECT "User"."id" FROM "User" WHERE "User"."email" = ${email}
          )
          LIMIT 1;
        `

        console.log(`Workspace ID:`, workspace)

        if (workspace.length > 0) {
          if (isActiveOrder) {
            // Atualiza o plano para PRO se a ordem estiver ativa
            await prisma.$executeRaw`
              UPDATE "Workspace"
              SET "plan" = 'PRO'
              WHERE "id" = ${workspace[0].workspaceId};
            `
            console.log('Plano atualizado para PRO')
          } else {
            // Se a ordem não estiver ativa, atualiza o plano para FREE
            await prisma.$executeRaw`
              UPDATE "Workspace"
              SET "plan" = 'FREE'
              WHERE "id" = ${workspace[0].workspaceId};
            `
            console.log('Plano atualizado para FREE')
          }
        } else {
          console.log('Nenhum workspace encontrado para o usuário.')
        }

        return res.status(200).json({ shouldUpdatePlan: true })
      }

      return res.status(200).json({ shouldUpdatePlan: false })
    } catch (error) {
      console.error('Erro ao processar o pedido:', error)
      return res.status(500).json({ error: 'Erro ao processar o pedido' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end('Method Not Allowed')
  }
}
