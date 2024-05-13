import {
  Modal,
  ModalOverlay,
  ModalContent,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import { useTranslate } from '@tolgee/react'
import { MembersList } from './MembersList'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const MembersListModal = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslate()

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent minH="600px" flexDir="row">
        <Stack spacing={8} w="180px" py="6" borderRightWidth={1}>
          <Text pl="4" fontWeight="bold">
            {t('account.membersListModal.heading')}
          </Text>
        </Stack>

        {isOpen && (
          <Flex flex="1" p="10">
            <MembersList />
          </Flex>
        )}
      </ModalContent>
    </Modal>
  )
}
