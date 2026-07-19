import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormHelperText
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { uploadFileToBucket } from '@typebot.io/lib/s3/uploadFileToBucket'
import { useToast } from '@/hooks/useToast'


type Props = {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  onTypebotChoose: (template: any) => void;
  onCreateTypebot: (typebot?: any) => void;
};

export const WhatsAppTemplateModal = ({ isOpen, onClose, isLoading, onTypebotChoose, onCreateTypebot }: Props) => {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const { showToast } = useToast()


  
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await fetch('/api/upload-file', {
          method: 'POST',
          body: file,
          headers: {
            'Content-Type': file.type,
            'X-File-Name': file.name,
          },
        });
        if (response.ok) {
          const { url } = await response.json();
          setAvatarFile(url);
          setAvatarUrl(url); // Atualiza o avatarUrl após o upload
          showToast({
            description: 'Avatar image uploaded successfully.',
            status: 'success'
          });
        } else {
          throw new Error('Failed to upload file');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        showToast({
          description: `Error while trying to upload the file: ${error.message}`,
          status: 'error'
        });
      }
    }
  };

  const handleDownloadJson = () => {
    const jsonTemplate = {
      id: "seoza6kuw4y8qyvujbii71ar",
      version: "3",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      icon: 'https://ositte.com/wp-content/uploads/2023/07/zap-png.png',
      name: "Whatsapp",
      folderId: null,
      groups: [
        {
          id: "cy1ck6b6dsdlajoo615swol3",
          title: "Start",
          blocks: [
            {
              id: "f8557i55o2q5bccv5bm1rt4y",
              type: "start",
              label: "Start",
              groupId: "cy1ck6b6dsdlajoo615swol3",
              outgoingEdgeId: "lbtzbzfgziwrlame12p7nkjp",
            },
          ],
          graphCoordinates: { x: -27, y: 337.75 },
        },
        
      ],
      variables: [
        { id: "vgo1ou573y95pw3pedsk4iakr", name: "n" },
        { id: "vy064uzle3clxj65p3v12ns81", name: "Nome" },
        { id: "vggr10jn6p4gxy4yls3vo8hm4", name: "CEP" },
        { id: "vmre5vzsrq92j6cxhoifggb37", name: "Telefone" },
        { id: "vzmzqhu9m0gbzmnsvfi4ugrke", name: "Email" },
      ],
      edges: [
        {
          id: "lbtzbzfgziwrlame12p7nkjp",
          to: { groupId: "qx0ikq4ktmknqghjk70olyb9" },
          from: { blockId: "f8557i55o2q5bccv5bm1rt4y", groupId: "cy1ck6b6dsdlajoo615swol3" },
        },
      ],
      theme: {
        chat: {
          inputs: { color: "#303235", backgroundColor: "#FFFFFF", placeholderColor: "#9095A0" },
          buttons: { color: "#FFFFFF", backgroundColor: "#00A884" },
          roundness: "large",
          hostAvatar: {
            url: avatarUrl,
            isEnabled: true,
          },
          guestAvatar: {
            url: "https://s3.fr-par.scw.cloud/typebot/public/typebots/clk5r5x2r002wky0fx0jr8cjx/guestAvatar?v=1689808008551",
            isEnabled: false,
          },
          hostBubbles: { color: "#303235", backgroundColor: "#FFFFFF" },
          guestBubbles: { color: "#FFFFFF", backgroundColor: "#FF8E21" },
        },
        general: {
          font: "Open Sans",
          background: {
            type: "Image",
            content: "https://s3.fr-par.scw.cloud/typebot/public/typebots/clk5r5x2r002wky0fx0jr8cjx/background?v=1689807864320",
          },
        },
        
      },
      selectedThemeTemplateId: null,
      settings: {
        general: {
          rememberUser: { isEnabled: false },
          isBrandingEnabled: true,
          isInputPrefillEnabled: true,
          isHideQueryParamsEnabled: true,
        },
        metadata: {
          title: "WhatsApp Web",
          imageUrl: "https://ositte.com/wp-content/uploads/2023/07/zap-png.png",
          favIconUrl: "https://ositte.com/wp-content/uploads/2023/07/zap-png.png",
          description: "",
          customHeadCode: `<meta name="color-scheme" content="light dark"><meta name="theme-color" content="#008069" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#202c33" media="(prefers-color-scheme: dark)"><meta name="viewport" content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content"><style type="text/css">@import url("data:text/css;base64,aHRtbCwgYm9keSwgZGl2I19fbmV4dCwgZGl2I19fbmV4dCA+IGRpdiB7CiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDsKICB9CiAgaHRtbHsKICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2YzZWY7CiAgfQogIGh0bWwuZGFya3sKICAgIGJhY2tncm91bmQtY29sb3I6ICMwODE0MTg7CiAgfQogIGh0bWw6bm90KC5sb2FkZWQpOjpiZWZvcmUgewogICAgY29udGVudDogJyc7CiAgICBkaXNwbGF5OiBibG9jazsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHdpZHRoOiAxMDAlOwogICAgaGVpZ2h0OiAxMDAlOwogICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsKICAgIHotaW5kZXg6IDEwOwogICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzRyZW0nIGhlaWdodD0nNHJlbScgdmlld0JveD0nMCAwIDI0IDI0JyUzRSUzQ2cgc3Ryb2tlPSclMjMxMGNiOWUnJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPSc5LjUnIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScyJyUzRSUzQ2FuaW1hdGUgYXR0cmlidXRlTmFtZT0nc3Ryb2tlLWRhc2hhcnJheScgY2FsY01vZGU9J3NwbGluZScgZHVyPScxLjVzJyBrZXlTcGxpbmVzPScwLjQyLDAsMC41OCwxOzAuNDIsMCwwLjU4LDE7MC40MiwwLDAuNTgsMScga2V5VGltZXM9JzA7MC40NzU7MC45NTsxJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScgdmFsdWVzPScwIDE1MDs0MiAxNTA7NDIgMTUwOzQyIDE1MCcvJTNFJTNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdzdHJva2UtZGFzaG9mZnNldCcgY2FsY01vZGU9J3NwbGluZScgZHVyPScxLjVzJyBrZXlTcGxpbmVzPScwLjQyLDAsMC41OCwxOzAuNDIsMCwwLjU4LDE7MC40MiwwLDAuNTgsMScga2V5VGltZXM9JzA7MC40NzU7MC45NTsxJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScgdmFsdWVzPScwOy0xNjstNTk7LTU5Jy8lM0UlM0MvY2lyY2xlJTNFJTNDYW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSd0cmFuc2Zvcm0nIGR1cj0nMnMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyB0eXBlPSdyb3RhdGUnIHZhbHVlcz0nMCAxMiAxMjszNjAgMTIgMTInLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRSIp</style><script async id="packtypebot-whatsapp" data-language="pt" data-profile-name="${name}" data-secret-key="templatepacktypebot" src="//cdn.jsdelivr.net/gh/mathuzabr/cdn/script.js"></script><script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool@latest'></script>`,
          googleTagManagerId: "",
        },
        typingEmulation: { speed: 300, enabled: true, maxDelay: 4 },
      },
      publicId: "testando123",
      customDomain: null,
      workspaceId: "cljyfemdm0002nw4qvqt5pl8d",
      resultsTablePreferences: null,
      isArchived: false,
      isClosed: false,
    };
  
    onCreateTypebot(jsonTemplate); // Chame onCreateTypebot com o template
    onClose();
  };
  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Preencha os detalhes do template</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="name" mb={4}>
            <FormLabel>Nome</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite o nome" />
          </FormControl>
          <FormControl id="avatarFile">
            <FormLabel>Avatar Image</FormLabel>
            <Input type="file" accept="image/*" onChange={handleFileChange} placeholder="Upload an avatar" />
            <FormHelperText>A imagem precisa ser na resolução 500x500.</FormHelperText>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleDownloadJson} isLoading={isLoading}>
            Importar template
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
  
};
