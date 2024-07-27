import { defaultButtonLabel } from '../constants'
import { PhoneNumberInputBlock } from './schema'

export const defaultPhoneInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: 'Digite um número de telefone..',
  },
  retryMessageContent:
    "Este número de telefone não parece ser válido. Você pode digitá-lo novamente?",
} as const satisfies PhoneNumberInputBlock['options']
