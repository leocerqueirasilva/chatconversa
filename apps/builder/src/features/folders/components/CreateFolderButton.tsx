import { Button, HStack, useDisclosure, Text } from '@chakra-ui/react'
import { FolderIcon } from '@/components/icons'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import React from 'react'
import { ChangePlanModal } from '@/features/billing/components/ChangePlanModal'
import { isFreePlan } from '@/features/billing/helpers/isFreePlan'
import { useTranslate } from '@tolgee/react'

type Props = { isLoading: boolean; onClick: () => void }

export const CreateFolderButton = ({ isLoading, onClick }: Props) => {
  const { t } = useTranslate()
  const { workspace } = useWorkspace()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    if (isFreePlan(workspace)) return onOpen()
    onClick()
  }
  return (
    <Button
      leftIcon={<FolderIcon />}
      onClick={handleClick}
      isLoading={isLoading}
      width="225px"
    >
      <HStack>
        <Text>{t('folders.createFolderButton.label')}</Text>
      </HStack>
      <ChangePlanModal
        isOpen={isOpen}
        onClose={onClose}
        type={t('billing.limitMessage.folder')}
      />
    </Button>
  )
}
