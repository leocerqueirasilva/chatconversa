import {
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  ModalCloseButton,
} from '@chakra-ui/react'
import { UserPreferencesForm } from './UserPreferencesForm'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const UserPreferencesModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent minH="600px" flexDir="row">
        <ModalCloseButton
          bg="gray.500"
          color="gray.800"
          _hover={{ bg: 'gray.400' }}
        />

        {isOpen && (
          <Flex flex="1" p="10">
            <UserPreferencesForm />
          </Flex>
        )}
      </ModalContent>
    </Modal>
  )
}
