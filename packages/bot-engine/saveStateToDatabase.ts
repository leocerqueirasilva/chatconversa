import { ContinueChatResponse, ChatSession } from '@typebot.io/schemas'
import { upsertResult } from './queries/upsertResult'
import { saveLogs } from './queries/saveLogs'
import { updateSession } from './queries/updateSession'
import { formatLogDetails } from './logs/helpers/formatLogDetails'
import { createSession } from './queries/createSession'
import { deleteSession } from './queries/deleteSession'
import * as Sentry from '@sentry/nextjs'
import { saveVisitedEdges } from './queries/saveVisitedEdges'
import { Prisma, VisitedEdge } from '@typebot.io/prisma'
import prisma from '@typebot.io/lib/prisma'
import ky from 'ky'

type Props = {
  session: Pick<ChatSession, 'state'> & { id?: string }
  input: ContinueChatResponse['input']
  logs: ContinueChatResponse['logs']
  clientSideActions: ContinueChatResponse['clientSideActions']
  visitedEdges: VisitedEdge[]
  hasCustomEmbedBubble?: boolean
}

export const saveStateToDatabase = async ({
  session: { state, id },
  input,
  logs,
  clientSideActions,
  visitedEdges,
  hasCustomEmbedBubble,
}: Props) => {
  const containsSetVariableClientSideAction = clientSideActions?.some(
    (action) => action.expectsDedicatedReply
  )

  let isCompleted = Boolean(
    !input && !containsSetVariableClientSideAction && !hasCustomEmbedBubble
  )

  const queries: Prisma.PrismaPromise<any>[] = []

  const resultId = state.typebotsQueue[0].resultId

  if (id) {
    if (isCompleted && resultId) queries.push(deleteSession(id))
    else queries.push(updateSession({ id, state, isReplying: false }))
  }

  const session = id
    ? { state, id }
    : await createSession({ id, state, isReplying: false })

  if (!resultId) {
    if (queries.length > 0) await prisma.$transaction(queries)
    return session
  }

  const answers = state.typebotsQueue[0].answers

  const typebot = state.typebotsQueue[0].typebot
  isCompleted = Boolean(
    !input && !containsSetVariableClientSideAction && answers.length > 0
  )

  if (isCompleted) {
    try {
      const { groups, variables } = typebot
      let whatsappBlock: any
      let mediaId: any
      let text: any
      let numbers = []
      const regex = /{{(.*?)}}/
      let reqBody: any = {
        numbers: [],
        text: null,
        mediaLink: null,
      }

      for (const group of groups) {
        for (const block of group.blocks) {
          if (block.type === 'WhatsApp') {
            whatsappBlock = true
            if (block?.options) {
              text = regex.exec(block?.options?.body || '')?.[1]
              if (!text) reqBody.text = block?.options?.body

              mediaId = block.options?.attachmentsVariableId
              for (let recipient of block?.options?.recipients || []) {
                let match = regex.exec(recipient)
                if (match) {
                  numbers.push(match[1])
                } else {
                  reqBody.numbers.push(recipient)
                }
              }
            }
          }
        }
      }

      if (whatsappBlock) {
        for (let variable of variables) {
          if (variable.id === mediaId) {
            reqBody.mediaLink = variable.value ? variable.value : variable.name
          }

          if (variable.name === text) {
            reqBody.text = variable.value
          }

          if (numbers.includes(variable.name)) {
            reqBody.numbers.push(variable.value)
          }
        }
      }

      if (reqBody.numbers.length > 0) {
        ky.post('https://api.chatresponde.site/send-message', {
          json: reqBody,
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  queries.push(
    upsertResult({
      resultId,
      typebot,
      isCompleted,
      hasStarted: answers.length > 0,
    })
  )

  if (logs && logs.length > 0)
    try {
      await saveLogs(
        logs.map((log) => ({
          ...log,
          resultId,
          details: formatLogDetails(log.details),
        }))
      )
    } catch (e) {
      console.error('Failed to save logs', e)
      Sentry.captureException(e)
    }

  if (visitedEdges.length > 0) queries.push(saveVisitedEdges(visitedEdges))

  await prisma.$transaction(queries)

  return session
}
