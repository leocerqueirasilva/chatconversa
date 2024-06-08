import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  Box,
  Image
} from '@chakra-ui/react';
import React from 'react';
import { useTranslate } from '@tolgee/react';
import { WhatsAppTemplateModal } from './WhatsAppTemplateModal';
import { TelegramTemplateModal } from './TelegramTemplateModal';
import { InstagramTemplateModal } from './InstagramTemplateModal';
import { useDisclosure } from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onTypebotChoose: (template: string) => void;
  isLoading: boolean;
};

const TemplateButton = ({ logoSrc, label, onClick, isLoading }) => (
  <Button
    onClick={onClick}
    isLoading={isLoading}
    variant="outline"
    flexDirection="column"
    alignItems="center"
    p={4}
    height="150px"
    width="120px"
  >
    <Box>
      <Image src={logoSrc} alt={`${label} Logo`} boxSize="70px" />
      <Text mt={2}>{label}</Text>
    </Box>
  </Button>
);

export const ReadyTemplatesModal = ({ isOpen, onClose, onTypebotChoose, isLoading }: Props) => {
  const { t } = useTranslate();
  const { isOpen: isOpenWhatsAppTemplate, onOpen: onOpenWhatsAppTemplate, onClose: onCloseWhatsAppTemplate } = useDisclosure();
  const { isOpen: isOpenTelegramTemplate, onOpen: onOpenTelegramTemplate, onClose: onCloseTelegramTemplate } = useDisclosure();
  const { isOpen: isOpenInstagramTemplate, onOpen: onOpenInstagramTemplate, onClose: onCloseInstagramTemplate } = useDisclosure();

  const handleTemplateChoose = (template: string) => {
    if (template === 'whatsapp') {
      onOpenWhatsAppTemplate();
    } else if (template === 'telegram') {
      onOpenTelegramTemplate();
    } else if (template === 'instagram') {
      onOpenInstagramTemplate();
    } else {
      onTypebotChoose(template);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalBody as={Stack} spacing={4} p={6}>
            <Heading as="h3" size="lg">
              {t('Escolha seu template')}
            </Heading>
            <Text>{t('Escolha o template da sua rede social favorita e persolize do seu jeito')}</Text>
            <Stack spacing={4} direction="row" justify="space-between">
              <TemplateButton
                logoSrc="https://static.vecteezy.com/system/resources/previews/018/930/564/original/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
                label="WhatsApp"
                onClick={() => handleTemplateChoose('whatsapp')}
                isLoading={isLoading}
              />
              <TemplateButton
                logoSrc="https://static.vecteezy.com/system/resources/previews/023/986/562/original/telegram-logo-telegram-logo-transparent-telegram-icon-transparent-free-free-png.png"
                label="Telegram"
                onClick={() => handleTemplateChoose('telegram')}
                isLoading={isLoading}
              />
              <TemplateButton
                logoSrc="https://i.pinimg.com/originals/6e/ce/0f/6ece0f7ecdd5894efeab1f9d82353208.png"
                label="Instagram"
                onClick={() => handleTemplateChoose('instagram')}
                isLoading={isLoading}
              />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <WhatsAppTemplateModal
        isOpen={isOpenWhatsAppTemplate}
        onClose={onCloseWhatsAppTemplate}
        isLoading={isLoading}
      />
      <TelegramTemplateModal
        isOpen={isOpenTelegramTemplate}
        onClose={onCloseTelegramTemplate}
        isLoading={isLoading}
      />
      <InstagramTemplateModal
        isOpen={isOpenInstagramTemplate}
        onClose={onCloseInstagramTemplate}
        isLoading={isLoading}
      />
    </>
  );
};
