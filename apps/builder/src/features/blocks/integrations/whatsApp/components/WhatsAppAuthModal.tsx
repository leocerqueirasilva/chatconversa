import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from '@chakra-ui/react'
//import { useUser } from '@/features/account/hooks/useUser'
import React, { useState, useEffect } from 'react'
import { useToast } from '@/hooks/useToast'

import ky from 'ky'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const WhatsAppAuthModal = ({ isOpen, onClose }: Props) => {
  //const { user } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  // buffer qr code
  const [qrCode, setQrCode] = useState(null)
  const [isLogedIn, setIsLogedIn] = useState(false)
  const { showToast } = useToast()

  const getAuth = async () => {
    try {
      const res = await ky.get('http://191.101.71.208:3010/auth').json()
      setQrCode(res?.qrCode)
      setIsLogedIn(res?.isLoggedIn)
      setIsLoading(false)
      console.log('res', res)
    } catch (error) {
      showToast({
        title: 'Error',
        description: 'Failed to get Wwebjs auth',
        status: 'error',
      })
    }
  }

  const handleLogOut = async () => {
    try {
      await ky.get('http://191.101.71.208:3010/logout').json()
      setIsLogedIn(false)
      setIsLoading(true)
      showToast({
        title: 'Success',
        description: 'Logged out successfully',
        status: 'success',
      })
    } catch (error) {
      showToast({
        title: 'Error',
        description: 'Failed to log out',
        status: 'error',
      })
    }
  }

  useEffect(() => {
    if (isOpen) {
      getAuth()
    }
    if (!isOpen) {
      setIsLoading(true)
      setQrCode(null)
      setIsLogedIn(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && isLogedIn === false) {
      const interval = setInterval(async () => {
        try {
          getAuth()
        } catch (error) {
          console.log('error', error)
        }
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [qrCode, isLogedIn])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{'WhatsApp Authentication Check'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Spinner
            emptyColor="gray.200"
            color="blue.500"
            label="Loading..."
            display={isLoading ? 'block' : 'none'}
          />
          {qrCode && !isLogedIn && <img src={qrCode} alt="qr code" />}
          {isLogedIn && (
            <p>
              You are now authenticated WhatsApp. You can now use integration
              block.
            </p>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={handleLogOut}
            isDisabled={!isLogedIn}
          >
            Log out
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
