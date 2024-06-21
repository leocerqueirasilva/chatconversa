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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useToast } from '@/hooks/useToast'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  onCreateTypebot: (typebot?: any) => void;
};

export const InstagramTemplateModal = ({ isOpen, onClose, isLoading, onCreateTypebot }: Props) => {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [instaUrl, setInstaUrl] = useState('');
  const [followers, setFollowers] = useState('');
  const [posts, setPosts] = useState('');
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
      "version": "5",
      "id": "clnf6b4ug0001n936au17ar85",
      "name": "INSTAGRAM",
      "groups": [
        {
          "id": "y3gpb1w4v8jf0ycp1uibryxx",
          "title": "Start",
          "graphCoordinates": {
            "x": 0,
            "y": 0
          },
          "blocks": [
            {
              "id": "rfoxb6ojvjip3jhjjmgjlt5x",
              "groupId": "y3gpb1w4v8jf0ycp1uibryxx",
              "outgoingEdgeId": "mvfhpxeub8uhgsfqn7oi379h",
              "type": "start",
              "label": "Start"
            }
          ]
        },
        
        
        
        
        
        
        
      ],
      "edges": [
        {
          "id": "mvfhpxeub8uhgsfqn7oi379h",
          "from": {
            "groupId": "y3gpb1w4v8jf0ycp1uibryxx",
            "blockId": "rfoxb6ojvjip3jhjjmgjlt5x"
          },
          "to": {
            "groupId": "lp1ttgdl5il6i6834nzohk6b"
          }
        },
        {
          "id": "vogpuh7l7bxz03kt8ecmq9s7",
          "from": {
            "groupId": "lp1ttgdl5il6i6834nzohk6b",
            "blockId": "aouybp4gmvdkm1xx07nw2ssh"
          },
          "to": {
            "groupId": "stgw2eii5aywdtkr2v45pkyd"
          }
        },
        {
          "id": "sv3q0r8mesec9mg0j60myrzx",
          "from": {
            "groupId": "stgw2eii5aywdtkr2v45pkyd",
            "blockId": "u2o0b2brulfqr8blhtpxnd2n"
          },
          "to": {
            "groupId": "pxshyvgw18braqyv3bw49tkr"
          }
        },
        {
          "id": "qrug0gcxpz6v8jfmnh47ldhj",
          "from": {
            "groupId": "pxshyvgw18braqyv3bw49tkr",
            "blockId": "et13t1qn16oyl6oz11pm1v2j"
          },
          "to": {
            "groupId": "tu6r8nt8s1wo8z2wb4zgn7ti"
          }
        },
        {
          "id": "c15i70cms3ce8mi1sgrv4hd1",
          "from": {
            "groupId": "tu6r8nt8s1wo8z2wb4zgn7ti",
            "blockId": "vz06j3jz8xgqmhjhh9iilp6h"
          },
          "to": {
            "groupId": "fu7q4iksiwpkcdfshsn5te1w"
          }
        },
        {
          "id": "aoqmsy8wdy0c6acg2dknsmtw",
          "from": {
            "groupId": "fu7q4iksiwpkcdfshsn5te1w",
            "blockId": "ciqm27vq4vmcq6j0z394a962",
            "itemId": "rpl385jif760atoopo5r5tbp"
          },
          "to": {
            "groupId": "s55zoc0af1j628gnvc5xn2ex"
          }
        }
      ],
      "variables": [
        
      ],
      "theme": {
        "general": {
          "font": "Open Sans",
          "background": {
            "type": "Color",
            "content": "#000000"
          }
        },
        "chat": {
          "hostAvatar": {
            "isEnabled": true,
            "url": avatarUrl
          },
          "hostBubbles": {
            "backgroundColor": "#262626",
            "color": "#FFFFFF"
          },
          "guestBubbles": {
            "backgroundColor": "#1084f1",
            "color": "#FFFFFF"
          },
          "buttons": {
            "backgroundColor": "#1084f1",
            "color": "#FFFFFF"
          },
          "inputs": {
            "backgroundColor": "#FFFFFF",
            "color": "#000000",
            "placeholderColor": "#28292a"
          },
          "roundness": "large"
        },
        "customCss": ".typebot-input { margin-bottom: 60px; }",
      },
      "selectedThemeTemplateId": "clmr050i8002xtm2tqgx2immr",
      "settings": {
        "general": {
          "isBrandingEnabled": false,
          "isInputPrefillEnabled": true,
          "isHideQueryParamsEnabled": true,
          "rememberUser": {
            "isEnabled": false
          }
        },

        "customCss:": {
        },
        "typingEmulation": {
          "enabled": true,
          "speed": 300,
          "maxDelay": 1.5
        },
        "metadata": {
          "title": "Instagram",
          "description": "Template Instagram",
          "imageUrl": "https://igorlemoes.com.br/files/instagram/icon.png",
          "favIconUrl": "https://igorlemoes.com.br/files/instagram/icon.png",
          "customHeadCode": `<script>
          console.log('teste 1');
          var script = document.createElement('script');
script.src = "https://igorlemoes.com.br/files/instagram/js_instagram_101023_v_001.js";
document.getElementsByTagName('head')[0].appendChild(script);
script.onload = function() {
console.log('teste 1');
  criarBarra(
    '${name}',
    '${avatarUrl}',
    '${name}',
    '${instaUrl}',
    '${followers}',
    '${posts}'
  );
};
</script>
`
        }
      },
      "createdAt": "2023-10-06T22:23:49.575Z",
      "updatedAt": "2023-10-10T13:00:56.521Z",
      "icon": 'https://igorlemoes.com.br/files/instagram/icon.png',
      "folderId": null,
      "publicId": "tema-instagram",
      "customDomain": null,
      "workspaceId": "cln9siekx0001n735oskusd17",
      "resultsTablePreferences": null,
      "isArchived": false,
      "isClosed": false,
      "whatsAppCredentialsId": null
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
          </FormControl>
          <FormControl id="instaUrl" mb={4}>
            <FormLabel>URL do Instagram</FormLabel>
            <Input value={instaUrl} onChange={(e) => setInstaUrl(e.target.value)} placeholder="Digite a URL do Instagram" />
          </FormControl>
          <FormControl id="followers" mb={4}>
            <FormLabel>Número de Seguidores</FormLabel>
            <Input value={followers} onChange={(e) => setFollowers(e.target.value)} placeholder="Digite o número de seguidores" />
          </FormControl>
          <FormControl id="posts" mb={4}>
            <FormLabel>Número de Publicações</FormLabel>
            <Input value={posts} onChange={(e) => setPosts(e.target.value)} placeholder="Digite o número de publicações" />
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
