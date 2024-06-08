import { z } from '../../../../zod'
import { blockBaseSchema } from '../../shared'
import { IntegrationBlockType } from '../constants'

export const whatsAppOptionsSchema = z.object({
  recipients: z.array(z.string()).optional(),
  body: z.string().optional(),
  fileName: z.string().optional(),
  fileUrl: z.string().optional(),
})

export const whatsAppBlockSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([IntegrationBlockType.WHATSAPP]),
    options: whatsAppOptionsSchema.optional(),
  })
)

export type whatsAppBlock = z.infer<typeof whatsAppBlockSchema>
