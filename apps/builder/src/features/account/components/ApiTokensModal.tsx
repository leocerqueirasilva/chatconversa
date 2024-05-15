import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { ApiTokensList } from './ApiTokensList'
import { useUser } from '../hooks/useUser'

type Props = {
  isOpen: boolean
  onClose: () => void
}
export const ApiTokensModal = ({ isOpen, onClose }: Props) => {
  const { user } = useUser()

  if (!user) return
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalBody>
             {/* @ts-ignore */}
          <ApiTokensList user={user} />
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
