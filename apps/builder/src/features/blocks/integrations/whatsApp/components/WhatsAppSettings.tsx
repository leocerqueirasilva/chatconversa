import {
  Stack,
  HStack,
  FormLabel,
  Button,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from '@chakra-ui/react'
import { whatsAppBlock } from '@typebot.io/schemas'
import React, { useState, useEffect } from 'react'
import { isNotEmpty } from '@typebot.io/lib'
import { TextInput, Textarea } from '@/components/inputs'
import { WhatsAppAuthModal } from './WhatsAppAuthModal'
import { UploadIcon, CloseIcon } from '@/components/icons'
import { trpc } from '@/lib/trpc'
import { useToast } from '@/hooks/useToast'
import { usePathname } from 'next/navigation'

type Props = {
  options: whatsAppBlock['options']
  onOptionsChange: (options: whatsAppBlock['options']) => void
}

export const WhatsAppSettings = ({ options, onOptionsChange }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isUploading, setIsUploading] = useState(false)
  const { showToast } = useToast()
  const [file, setFile] = useState<File>()

  // get typebot by pathname,
  const typebotId = usePathname().split('/')[2]
  const { data: currentTypeBot } = trpc.typebot.getTypebot.useQuery({
    typebotId: typebotId,
  })

  const { mutate } = trpc.generateUploadUrl.useMutation({
    onSettled: () => {
      setIsUploading(false)
    },
    onSuccess: async (data) => {
      if (!file) {
        showToast({ description: 'Could not upload file.', status: 'error' })
        return
      }
      const formData = new FormData()
      Object.entries(data.formData).forEach(([key, value]) => {
        formData.append(key, value)
      })
      formData.append('file', file)
      const upload = await fetch(data.presignedUrl, {
        method: 'POST',
        body: formData,
      })

      if (!upload.ok) {
        showToast({ description: 'Error while trying to upload the file.' })
        handleFileUrlChange('', '')
        setFile(undefined)
        return
      }

      handleFileUrlChange(data.fileUrl, file.name)
    },
  })

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

  const handleBodyChange = (body: string) => {
    onOptionsChange({
      ...options,
      body,
    })
  }

  const handleFileUrlChange = (fileUrl: string, fileName: string) => {
    onOptionsChange({
      ...options,
      fileUrl,
      fileName,
    })
  }

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0]
    if (!selectedFile) {
      return showToast({ description: 'Could not read file.', status: 'error' })
    }
    setIsUploading(true)
    setFile(selectedFile)

    mutate({
      filePathProps: {
        workspaceId: currentTypeBot.typebot.workspaceId,
        typebotId: currentTypeBot.typebot.id,
        fileName: selectedFile.name,
      },
      fileType: selectedFile.type,
    })
  }

  useEffect(() => {
    console.log('currentTypeBot', currentTypeBot)
  }, [currentTypeBot])

  return (
    <Stack spacing={4}>
      <WhatsAppAuthModal isOpen={isOpen} onClose={onClose} />

      <TextInput
        label="Destinatário:"
        onChange={handleToChange}
        defaultValue={options?.recipients?.join(', ')}
        placeholder="Número do destinatário"
      />

      <Stack>
        <Textarea
          label="Mensagem:"
          data-testid="body-input"
          minH="150px"
          onChange={handleBodyChange}
          defaultValue={options?.body ?? ''}
        />
        <Stack pb="4">
          <HStack>
            <FormLabel m="0" htmlFor="variable">
              Arquivos:
            </FormLabel>
          </HStack>
          <Box>
            <InputGroup>
              <Input
                placeholder="Upload de arquivos"
                readOnly
                value={options?.fileName ?? ''}
                display={'flex'}
                justifyContent={'flex-start'}
              />
              <InputRightElement
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                position={'static'}
              >
                <input
                  type="file"
                  id="file"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                {options?.fileName ? (
                  <Button
                    variant="solid"
                    cursor="pointer"
                    onClick={() => handleFileUrlChange('', '')}
                  >
                    <CloseIcon />
                  </Button>
                ) : (
                  <Button
                    as="label"
                    htmlFor="file"
                    variant="solid"
                    cursor="pointer"
                    disabled={isUploading}
                    isLoading={isUploading}
                  >
                    <UploadIcon />
                  </Button>
                )}
              </InputRightElement>
            </InputGroup>
          </Box>

          <Button
            colorScheme="blue"
            cursor={'pointer'}
            onClick={() => {
              onOpen()
            }}
          >
            Autenticar
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
