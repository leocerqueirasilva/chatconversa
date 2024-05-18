import { whatsAppBlock } from './schema'

export const defaultWhatsAppOptions = {
  // credentialsId: 'default',
  // isCustomBody: false,
  // isBodyCode: false,
} as const satisfies whatsAppBlock['options']
