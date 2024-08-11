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
    
  }, [user, showToast]);

  const getAuth = async () => {
    if (isLoading) { // Certifique-se de que só faça a requisição quando necessário
      try {
        // Defina o timeout para 40000 milissegundos (40 segundos)
        const res = await ky.get(`https://api.chatresponde.site/auth?userId=${userId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 40000 // Timeout de 40 segundos
        }).json();
  
        setQrCode(res?.qrCode);
        setIsLogedIn(res?.isLoggedIn);
        setIsLoading(false); // Desliga o carregamento após receber a resposta
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
        } else if (error.timeout) {
          errorMessage += ' The request timed out.'; // Mensagem para timeout
        }
  
        showToast({
          title: 'Error',
          description: errorMessage,
          status: 'error',
        });
        console.error('Error details:', error);
        setIsLoading(false); // Desliga o carregamento mesmo em caso de erro
      }
    }
  };
  

  const handleLogOut = async () => {
    try {
      await ky.get(`https://api.chatresponde.site/logout?userId=${userId}`).json();
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
      getAuth(); // Inicializa a primeira chamada
    } else {
      // Reset states when modal is closed
      setIsLoading(true);
      setQrCode(null);
      setIsLogedIn(false);
    }
  }, [isOpen]);

  useEffect(() => {
    let interval;
    if (isOpen && !isLogedIn) { // Adiciona a condição de não ter um QR Code
      interval = setInterval(getAuth, 2000); // Continua a verificar apenas se necessário
    }
    return () => clearInterval(interval); // Limpa o intervalo ao sair do estado necessário
  }, [isOpen, isLogedIn]); // Adiciona qrCode às dependências

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
