import { Stack, HStack, Avatar, Tooltip } from '@chakra-ui/react'
import { EditIcon } from '@/components/icons'
import React, { useState } from 'react'
import { UploadButton } from '@/components/ImageUploadContent/UploadButton'
import { useUser } from '../hooks/useUser'
import { TextInput } from '@/components/inputs/TextInput'
import { useTranslate } from '@tolgee/react'

export const MyProfileForm = () => {
  const { t } = useTranslate()
  const { user, updateUser } = useUser()
  const [name, setName] = useState(user?.name ?? '')
  const [email, setEmail] = useState(user?.email ?? '')

  const handleFileUploaded = async (url: string) => {
    updateUser({ image: url })
  }

  const handleNameChange = async (newName: string) => {
    setName(newName)
    updateUser({ name: newName })
  }

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail)
    updateUser({ email: newEmail })
  }

  return (
    <Stack spacing="6" w="full" overflowY="auto">
      <HStack spacing={3}>
        <Avatar
          size="md"
          src={user?.image ?? undefined}
          name={user?.name ?? undefined}
        />
        <Stack>
          {user?.id && (
            <UploadButton
              size="sm"
              fileType="image"
              filePathProps={{
                userId: user.id,
                fileName: 'avatar',
              }}
              leftIcon={<EditIcon />}
              onFileUploaded={handleFileUploaded}
            >
              {t('account.myAccount.changePhotoButton.label')}
            </UploadButton>
          )}
        </Stack>
      </HStack>

      <TextInput
        defaultValue={name}
        onChange={handleNameChange}
        label={t('account.myAccount.nameInput.label')}
        withVariableButton={false}
        debounceTimeout={0}
      />
      <Tooltip label={t('account.myAccount.emailInput.disabledTooltip')}>
        <span>
          <TextInput
            type="email"
            defaultValue={email}
            onChange={handleEmailChange}
            label={t('account.myAccount.emailInput.label')}
            withVariableButton={false}
            debounceTimeout={0}
            isDisabled
          />
        </span>
      </Tooltip>
    </Stack>
  )
}
