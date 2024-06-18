import { defaultButtonLabel } from '../constants'
import { UrlInputBlock } from './schema'

export const defaultUrlInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: 'Digite uma URL..',
  },
  retryMessageContent:
    "Este URL não parece ser válido. Você pode digitá-lo novamente?",
} as const satisfies UrlInputBlock['options']
