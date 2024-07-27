import {
  Modal,
  ModalOverlay,
  ModalContent,
  Stack,
  Text,
  Flex,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useTranslate } from '@tolgee/react'
import { MyProfileForm } from './MyProfileForm'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const MyProfileModal = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslate()

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent minH="600px" flexDir="row">
        <ModalCloseButton
          bg="gray.500"
          color="gray.800"
          _hover={{ bg: 'gray.400' }}
        />
        <Stack spacing={8} w="180px" py="6" borderRightWidth={1}>
          <Text pl="4" fontWeight="bold">
            {t('account.myProfileModal.heading')}
          </Text>
          <Text pl="4" color="gray.500">
            {t('account.myProfileModal.subheading')}
          </Text>
        </Stack>

        {isOpen && (
          <Flex flex="1" p="10">
            <MyProfileForm />
          </Flex>
        )}
      </ModalContent>
    </Modal>
  )
}
