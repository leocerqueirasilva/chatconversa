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
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/useToast';
import ky from 'ky';
import { useUser } from '@/features/account/hooks/useUser'; // Importe o hook useUser

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const WhatsAppAuthModal = ({ isOpen, onClose }: Props) => {
  const { user } = useUser(); // Obtenha o valor de user
  const userId = user?.id; // Pegue o userId do usuário
  const [isLoading, setIsLoading] = useState(true);
  const [qrCode, setQrCode] = useState(null);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (user) {
      showToast({
        title: 'User Info',
        description: `User: ${JSON.stringify(user)}`,
        status: 'info',
      });
    } else {
      showToast({
        title: 'Error',
        description: 'User is not defined',
        status: 'error',
      });
    }
  }, [user, showToast]);

  const getAuth = async () => {
    try {
      const res = await ky
        .get(`https://api.chatresponde.shop/auth?userId=${userId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .json();

      setQrCode(res?.qrCode);
      setIsLogedIn(res?.isLoggedIn);
      setIsLoading(false);
    } catch (error) {
      let errorMessage = 'Failed to get Wwebjs auth:';
      if (error.name) {
        errorMessage += ` Name: ${error.name}`;
      }
      if (error.message) {
        errorMessage += ` Message: ${error.message}`;
      }
      if (error.stack) {
        errorMessage += ` Stack: ${error.stack}`;
      }
      if (error.response) {
        const errorResponseText = await error.response.text();
        errorMessage += ` Response: ${errorResponseText}`;
      }

      showToast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
      });

      console.error('Error details:', error);
    }
  };

  const handleLogOut = async () => {
    try {
      await ky.get(`https://api.chatresponde.shop/logout?userId=${userId}`).json();
      setIsLogedIn(false);
      setIsLoading(true);
      showToast({
        title: 'Success',
        description: 'Logged out successfully',
        status: 'success',
      });
    } catch (error) {
      showToast({
        title: 'Error',
        description: 'Failed to log out',
        status: 'error',
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      getAuth();
    }
    if (!isOpen) {
      setIsLoading(true);
      setQrCode(null);
      setIsLogedIn(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && isLogedIn === false) {
      const interval = setInterval(async () => {
        try {
          getAuth();
        } catch (error) {
          console.log('error', error);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [qrCode, isLogedIn]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{'Conexão com whatsapp'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" alignItems="flex-start">
          <Spinner
            emptyColor="gray.200"
            color="blue.500"
            label="Loading..."
            display={isLoading ? 'block' : 'none'}
          />
          {qrCode && !isLogedIn && <img src={qrCode} alt="qr code" />}
          {isLogedIn && <p>Você já está conectado ao seu whatsapp.</p>}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={handleLogOut} isDisabled={!isLogedIn}>
            Deslogar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
