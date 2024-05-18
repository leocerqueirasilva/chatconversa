import {
  Stack,
  HStack,
  FormLabel,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { whatsAppBlock, Variable } from '@typebot.io/schemas'
import React from 'react'
import { isNotEmpty } from '@typebot.io/lib'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { TextInput, Textarea } from '@/components/inputs'
import { MoreInfoTooltip } from '@/components/MoreInfoTooltip'
import { WhatsAppAuthModal } from './WhatsAppAuthModal'

type Props = {
  options: whatsAppBlock['options'];
  onOptionsChange: (options: whatsAppBlock['options']) => void
}

export const WhatsAppSettings = ({ options, onOptionsChange }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleToChange = (recipientsStr: string) => {
    const recipients: string[] = recipientsStr
      .split(',')
      .map((str) => str.trim())
      .filter(isNotEmpty)
    onOptionsChange({
      ...options,
      recipients,
    })
  }

  const handleBodyChange = (body: string) =>
    onOptionsChange({
      ...options,
      body,
    })

  const handleChangeAttachmentVariable = (
    variable: Pick<Variable, 'id' | 'name'> | undefined
  ) =>
    onOptionsChange({
      ...options,
      attachmentsVariableId: variable?.id,
    })

  return (
    <Stack spacing={4}>
      <WhatsAppAuthModal isOpen={isOpen} onClose={onClose} />

      <TextInput
        label="receiver number:"
        onChange={handleToChange}
        defaultValue={options?.recipients?.join(', ')}
        placeholder="phone number"
      />

      <Stack>
        <Textarea
          label="Message:"
          data-testid="body-input"
          minH="150px"
          onChange={handleBodyChange}
          defaultValue={options?.body ?? ''}
        />
        <Stack pb="4">
          <HStack>
            <FormLabel m="0" htmlFor="variable">
              Attach files:
            </FormLabel>
            <MoreInfoTooltip>
              The selected variable should have previously collected files from
              the File upload input block.
            </MoreInfoTooltip>
          </HStack>

          <VariableSearchInput
            initialVariableId={options?.attachmentsVariableId}
            onSelectVariable={handleChangeAttachmentVariable}
          />
        </Stack>
        <Button
          colorScheme="blue"
          onClick={() => {
            onOpen()
          }}
        >
          Check Auth
        </Button>
      </Stack>
    </Stack>
  )
}
