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

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
};

export const WhatsAppTemplateModal = ({ isOpen, onClose, isLoading }: Props) => {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleDownloadJson = () => {
    const jsonTemplate = {
      id: "seoza6kuw4y8qyvujbii71ar",
      version: "3",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      icon: null,
      name: "TEMA PREMIUM WHATSAPP",
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
        {
          id: "qx0ikq4ktmknqghjk70olyb9",
          title: "Group #1",
          blocks: [
            {
              id: "ua53tquusoeco9978szbzb6n",
              type: "text",
              content: {
                richText: [{ type: "p", children: [{ text: "Olá tudo bem!" }] }],
              },
              groupId: "qx0ikq4ktmknqghjk70olyb9",
            },
            {
              id: "ma95j91hggsb1drr56z9evsp",
              type: "Wait",
              groupId: "qx0ikq4ktmknqghjk70olyb9",
              options: { secondsToWaitFor: "3" },
            },
            {
              id: "p51zp0j4ndnblm38ebm0r3xo",
              type: "text",
              content: {
                richText: [
                  {
                    type: "p",
                    children: [
                      { text: "Esse é o Tema " },
                      { bold: true, text: "PREMIUM" },
                      { text: " " },
                      { bold: true, text: "WHATSAPP " },
                      { text: "para typebot" },
                    ],
                  },
                ],
              },
              groupId: "qx0ikq4ktmknqghjk70olyb9",
            },
            {
              id: "nslv49yghe1uzu39empdzrhc",
              type: "Wait",
              groupId: "qx0ikq4ktmknqghjk70olyb9",
              options: { secondsToWaitFor: "5" },
            },
            {
              id: "uxpx45gqcioonjpi0ms8f310",
              type: "text",
              content: {
                richText: [
                  {
                    type: "p",
                    children: [
                      { text: "Para alterar " },
                      { bold: true, text: "nome, imagem de Avatar " },
                      { text: "e" },
                      { bold: true, text: " Site Redirect" },
                      { text: " veja as aulas por favor." },
                    ],
                  },
                ],
              },
              groupId: "qx0ikq4ktmknqghjk70olyb9",
            },
          ],
          graphCoordinates: { x: 569, y: 494.75 },
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
        customCss: `.typebot-chat-view > .flex:first-child {
          padding-top: 30px;
        }

        .typebot-host-bubble {
          max-width: 90%;
        }

        .typebot-input {
          position: fixed;
          bottom: 0;
          align-items: center;
          z-index: 999;
          right: 0;
        }

        .typebot-button {
          background-color: #135E54!important;
          border: 1px solid #135E54!important;
        }

        .typebot-input .typebot-button {
          background: #008a7c;
          border-radius: 50%;
          color: #fff;
          position: relative;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .typebot-container {
          background-size: initial!important;
          background-repeat: repeat-x!important;
        }

        .typebot-host-bubble>.bubble-typing {
          border-radius: 0 5px 5px 5px;
        }

        .typebot-host-bubble>.bubble-typing:after {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0px 10px 10px 0;
          border-color: transparent #f0f3f4 transparent transparent;
          top: 0;
          left: -10px;
        }

        .typebot-guest-bubble {
          position: relative;
          border-radius: 5px 0 5px 5px;
          color:#111b21;
          background-color:#fff;
          max-width: 90%;
        }

        .typebot-guest-bubble:after {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
        }

        .typebot-guest-bubble:after {
          border-width: 0px 0 10px 10px;
          border-color: transparent transparent transparent #fff;
          top: 0;
          right: -10px;
          border-style: solid;
        }

        iframe[src=""] {
          position: fixed;
          top: 0;
          left: 0;
          display: relative;
          width: 100%;
          height: 100% !important;
          z-index: 999999;
          border: none;
          padding: 0;
          margin: 0;
        }

        a#lite-badge {
          display: none!important;
        }

        /* Botão do input */
        .typebot-input .typebot-button {
          content: "";
          background: rgba(0, 138, 134, 1);
          border-radius: 50%; 
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px; 
          height: 50px; 
          border: none;
          font-size: 0px;
          color: transparent;
        }

        .typebot-input .typebot-button::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 25px;
          height: 25px;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px"><path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z" fill="white"/></svg>');
        }

        /* Oculta o ícone anterior*/
        .typebot-input .typebot-button .send-icon {
          display: none; 
        }

        /* Estilo da caixa do input */
        .typebot-input {
          max-width: 100%!important;
          width:100%!important;
          position: fixed;
          bottom: 0;
          align-items: center;
          z-index: 999;
          right: 0;
          margin-bottom: 20px;
          background-color: white;
          border-radius: 50px;
          box-shadow: 1 2px 1px -1px rgba(0,0,0,.2);
          height: 50px;
          padding-right: 0px!important;
        }

        .p-4 {
          padding: 8px!important;
        }

        .track {
          margin-left: 5px;
        }

        /* Corrigir cor do botão */
        .disabled\\:opacity-50:disabled {
          opacity: 100%;
        }

        .typebot-host-bubble>.bubble-typing {
          background-color: #f0f3f4;
        }`,
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
          customHeadCode: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
    <style>
      .user-bar .back a {
        color: #fff;
      }
      .hide {
        display: none !important;
      }
      typebot-standard {
        position: relative;
        z-index: 9999;
      }
      #__next {
        position: relative;
        z-index: 9999;
      }
      .user-bar {
        width: 100%;
        height: 55px;
        background: #005e54;
        color: #fff;
        padding: 0;
        font-size: 24px;
        position: fixed;
        z-index: 99999;
        display: block;
        top: 0;
      }

      .user-bar:after {
        content: '';
        display: table;
        clear: both;
      }

      .user-bar div {
        float: left;
        transform: translateY(-50%);
        position: relative;
        top: 50%;
        margin-left: 10px;
      }

      .user-bar .actions {
        float: right;
        margin: 0 0 0 20px;
      }

      .user-bar .actions.more {
        margin: 0 12px 0 32px;
      }

      .user-bar .actions.attachment {
        margin: 0 0 0 30px;
      }

      .user-bar .actions.attachment i {
        display: block;
        transform: rotate(-45deg);
      }

      .user-bar .avatar {
        margin: 0px 0 0 10px;
        width: 45px;
        height: 40px;
      }

      .user-bar .avatar img {
        border-radius: 50%;
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
        display: block;
        width: 100%;
      }

      .user-bar .name {
        font-size: 17px;
        font-weight: 600;
        text-overflow: ellipsis;
        letter-spacing: 0.3px;
        margin: 0 0 0 8px;
        overflow: hidden;
        white-space: nowrap;
        width: 150px;
      }

      .user-bar .status {
        display: block;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0;
      }
    </style>
    <script>
      function criarBarra() {
        var userBar = document.createElement('div');
        userBar.className = 'user-bar';

        var backButton = document.createElement('div');
        backButton.className = 'back';
        backButton.innerHTML = '<a href="https://instalartypebot.com.br/"><i class="zmdi zmdi-arrow-left"></i></a>';

        var avatar = document.createElement('div');
        avatar.className = 'avatar';
        avatar.innerHTML = '<img src="${avatarUrl}">';

        var name = document.createElement('div');
        name.className = 'name';
        name.innerHTML = '<span>${name}</span> <span data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span><span class="status">digitando...</span>';

        var moreActions = document.createElement('div');
        moreActions.className = 'actions more';
        moreActions.innerHTML = '<i class="zmdi zmdi-more-vert"></i>';

        var attachmentAction = document.createElement('div');
        attachmentAction.className = 'actions attachment';
        attachmentAction.innerHTML = '<i class="zmdi zmdi-attachment-alt"></i>';

        var phoneAction = document.createElement('div');
        phoneAction.className = 'actions';
        phoneAction.innerHTML = '<i class="zmdi zmdi-phone"></i>';

        userBar.appendChild(backButton);
        userBar.appendChild(avatar);
        userBar.appendChild(name);
        //userBar.appendChild(moreActions);
        //userBar.appendChild(attachmentAction);
        //userBar.appendChild(phoneAction);

        var elementoPai = document.querySelector('#__next');
        if (elementoPai) {
          elementoPai.insertBefore(userBar, elementoPai.firstChild);
        }
      }

      criarBarra();
      (function (b) {
        var a = {
          version: '0.0.1',

          history_api: typeof history.pushState !== 'undefined',

          init: function () {
            b.location.hash = '#no-back';

            a.configure();
          },

          hasChanged: function () {
            if (b.location.hash == '#no-back') {
              b.location.hash = '#';

              if (
                b.location.search == null ||
                b.location.search == undefined ||
                b.location.search == ''
              ) {
                b.location.href = 'https://instalartypebot.com.br/';
              } else {
                if (location.search.indexOf('src') > -1) {
                  var partes = location.search.slice(1).split('&');

                  var data = {};

                  var new_search = '?';

                  partes.forEach(function (parte) {
                    var chaveValor = parte.split('=');

                    var chave = chaveValor[0];

                    var valor = chaveValor[1];

                    data[chave] = valor;
                  });

                  data.src = data.src + '-->back_home';

                  new_search += JSON.stringify(data)
                    .replace(/[{}"]/g, '')
                    .replace(/[:]/g, '=')

                    .replace(/[,]/g, '&');

                  b.location.href = 'https://fenopower.com.br/amostra' + new_search;
                } else {
                  b.location.href =
                    'https://fenopower.com.br/amostra' +
                    b.location.search +
                    '&src=back_home';
                }
              }
            }
          },

          checkCompat: function () {
            if (b.addEventListener) {
              b.addEventListener('hashchange', a.hasChanged, false);
            } else {
              if (b.attachEvent) {
                b.attachEvent('onhashchange', a.hasChanged);
              } else {
                b.onhashchange = a.hasChanged;
              }
            }
          },

          configure: function () {
            if (b.location.hash == '#no-back') {
              if (this.history_api) {
                history.pushState(null, '', '#');
              } else {
                if (
                  b.location.search == null ||
                  b.location.search == undefined ||
                  b.location.search == ''
                ) {
                  b.location.href = 'Insira a URL de destino aqui';
                } else {
                  if (location.search.indexOf('src') > -1) {
                    var partes = location.search.slice(1).split('&');

                    var data = {};

                    var new_search = '?';

                    partes.forEach(function (parte) {
                      var chaveValor = parte.split('=');

                      var chave = chaveValor[0];

                      var valor = chaveValor[1];

                      data[chave] = valor;
                    });

                    data.src = data.src + '-->back_home';

                    new_search += JSON.stringify(data)
                      .replace(/[{}"]/g, '')
                      .replace(/[:]/g, '=')

                      .replace(/[,]/g, '&');

                    b.location.href = 'https://fenopower.com.br/amostra' + new_search;
                  } else {
                    b.location.href =
                      'https://fenopower.com.br/amostra' +
                      b.location.search +
                      '&src=back_home';
                  }
                }
              }
            }

            a.checkCompat();

            a.hasChanged();
          },
        };

        if (typeof define === 'function' && define.amd) {
          define(function () {
            return a;
          });
        } else {
          if (typeof module === 'object' && module.exports) {
            module.exports = a;
          } else {
            b.noback = a;
          }
        }

        a.init();
      })(window);

      const targetElement = document
        .querySelector('typebot-standard')
        .shadowRoot.querySelector('.typebot-container');

      const statusText = document.querySelector('.status');

      const observerConfig = { childList: true, subtree: true };

      const mutationCallback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
          const guestBubbles = document
            .querySelector('typebot-standard')
            .shadowRoot.querySelectorAll('span.typebot-guest-bubble');
          const hostBubbles = document
            .querySelector('typebot-standard')
            .shadowRoot.querySelectorAll('div.bubble-typing');

          const newOuterDiv = document.createElement('div');
          newOuterDiv.className = 'feno-bubble';
          newOuterDiv.style.display = 'flex';
          newOuterDiv.style.alignItems = 'baseline';
          newOuterDiv.style.fontSize = '11px';
          newOuterDiv.style.justifyContent = 'flex-end';
          newOuterDiv.style.gap = '4px';
          newOuterDiv.style.color = '#667781';
          newOuterDiv.style.marginBottom = '-8px';

          const newInnerSpan = document.createElement('span');
          const now = new Date();
          const hours = now.getHours();
          const minutes = now.getMinutes();
          const formattedTime = \`\${String(hours).padStart(2, '0')}:\${String(
            minutes
          ).padStart(2, '0')}\`;
          newInnerSpan.textContent = formattedTime;
          newInnerSpan.style.paddingBottom = '2px';

          const newImg = document.createElement('img');
          newImg.src = 'https://svgshare.com/i/wTr.svg';
          newImg.style.width = '16px';
          newImg.style.height = '11px';

          newOuterDiv.appendChild(newInnerSpan);

          if (mutation.type === 'childList') {
            for (const addedNode of mutation.addedNodes) {
              if (addedNode instanceof HTMLElement) {
                function divExistsInGuestBubble(bubble) {
                  const existingDiv = bubble.querySelector('div');
                  return existingDiv !== null;
                }

                guestBubbles.forEach((bubble) => {
                  if (!divExistsInGuestBubble(bubble)) {
                    newOuterDiv.appendChild(newImg);
                    bubble.appendChild(newOuterDiv.cloneNode(true));
                  }
                });
              }
            }
          }
          function divExistsInHostBubble(bubble) {
            const existingDiv =
              bubble.nextElementSibling.querySelector('div.feno-bubble');
            return existingDiv !== null;
          }

          hostBubbles.forEach((bubble) => {
            if (!divExistsInHostBubble(bubble)) {
              if (bubble.querySelector('.rounded-full') === null) {
                statusText.innerText = 'online';
                newOuterDiv.style.opacity = '0';
                const ifr = bubble.nextElementSibling.querySelector('iframe');

                if (ifr) {
                  console.log(ifr, bubble);
                  bubble.nextElementSibling.style.width = '64px';
                  bubble.nextElementSibling.style.maxHeight = '32px !important';
                  bubble.style.width = '64px';
                  bubble.style.height = '32px !important';

                  const src = ifr.src;

                  if (src.includes('vimeo')) {
                    bubble.style.width = '270px';
                    bubble.style.height = '150px !important';
                    bubble.nextElementSibling.style.width = '270px';
                    bubble.nextElementSibling.style.height = '320px';
                    ifr.style.maxHeight = 'calc(100% - 26px)';

                    bubble.nextElementSibling.appendChild(newOuterDiv.cloneNode(true));
                    const newElement =
                      bubble.nextElementSibling.querySelector('div.feno-bubble');
                    setTimeout(() => {
                      newElement.style.opacity = '1';
                    }, 400);
                  } else {
                    newOuterDiv.style.position = 'absolute';
                    newOuterDiv.style.right = '72px';
                    newOuterDiv.style.bottom = '10px';
                    newOuterDiv.style.left = '40px';
                    const lastIndex = src.lastIndexOf('#');
                    const audioName = src.substring(lastIndex + 1);
                    const audioUrl = \`https://audios.fenopower.com/audios/\${audioName}.mp3\`;

                    const audioElement = document.createElement('audio');
                    audioElement.style.display = 'none';

                    const sourceElement = document.createElement('source');
                    sourceElement.src = audioUrl;
                    sourceElement.type = 'audio/mpeg';

                    audioElement.appendChild(sourceElement);

                    document.body.appendChild(audioElement);

                    audioElement.addEventListener('loadedmetadata', function () {
                      const durationInSeconds = audioElement.duration;
                      const minutes = Math.floor(durationInSeconds / 60);
                      const seconds = (durationInSeconds % 60).toFixed(0);
                      const formattedDuration = \`\${minutes}:\${seconds
                        .toString()
                        .padStart(2, '0')}\`;

                      const recordingSpan = document.createElement('span');
                      const recordingDiv = document.createElement('div');
                      recordingDiv.style.display = 'flex';
                      recordingDiv.style.gap = '4px';
                      const recordingDivBubble = document.createElement('div');
                      recordingDivBubble.style.width = '8px';
                      recordingDivBubble.style.height = '8px';
                      recordingDivBubble.style.borderRadius = '4px';
                      recordingDivBubble.style.backgroundColor =
                        'var(--typebot-host-bubble-color)';
                      recordingDivBubble.style.opacity = '.5';
                      recordingDivBubble.style.animation =
                        'chatBubbles 1s ease-in-out infinite';
                      const recordingDivBubble2 = recordingDivBubble.cloneNode(true);
                      const recordingDivBubble3 = recordingDivBubble.cloneNode(true);
                      recordingDivBubble2.style.animationDelay = '.3s';
                      recordingDivBubble3.style.animationDelay = '.5s';
                      recordingDiv.append(recordingDivBubble);
                      recordingDiv.append(recordingDivBubble2);
                      recordingDiv.append(recordingDivBubble3);
                      recordingSpan.append(recordingDiv);

                      recordingSpan.style.display = 'flex';
                      recordingSpan.style.width = '100%';
                      recordingSpan.style.height = '100%';
                      recordingSpan.style.justifyContent = 'center';
                      recordingSpan.style.alignItems = 'center';
                      recordingSpan.className = 'recording-status';
                      statusText.innerText = 'gravando audio...';
                      recordingSpan.append('');
                      ifr.style.display = 'none';

                      if (
                        bubble.nextElementSibling.querySelector(
                          '.recording-status'
                        ) === null
                      ) {
                        bubble.nextElementSibling.append(recordingSpan);
                      }

                      if (src.includes('depoimento')) {
                        setTimeout(() => {
                          bubble.style.height = '85px';
                          bubble.nextElementSibling.style.height = '85px';
                          bubble.style.width = '100%';
                          bubble.nextElementSibling.style.width = '100%';
                          bubble.nextElementSibling.removeChild(recordingSpan);
                          setTimeout(() => {
                            ifr.style.display = 'block';
                            statusText.innerText = 'online';
                          }, 400);

                          const newInnerSpan = document.createElement('span');
                          newInnerSpan.textContent = formattedDuration;
                          newInnerSpan.style.marginRight = 'auto';

                          newOuterDiv.insertBefore(
                            newInnerSpan,
                            newOuterDiv.firstChild
                          );

                          document.body.removeChild(audioElement);
                          bubble.nextElementSibling.appendChild(
                            newOuterDiv.cloneNode(true)
                          );
                          const newElement =
                            bubble.nextElementSibling.querySelector('div.feno-bubble');
                          setTimeout(() => {
                            newElement.style.opacity = '1';
                          }, 400);
                        }, 1);
                      } else {
                        setTimeout(() => {
                          bubble.style.height = '70px';
                          bubble.nextElementSibling.style.height = '70px';
                          bubble.style.width = '100%';
                          bubble.nextElementSibling.style.width = '100%';
                          bubble.nextElementSibling.removeChild(recordingSpan);
                          setTimeout(() => {
                            ifr.style.display = 'block';
                            statusText.innerText = 'online';
                          }, 400);

                          const newInnerSpan = document.createElement('span');
                          newInnerSpan.textContent = formattedDuration;
                          newInnerSpan.style.marginRight = 'auto';

                          newOuterDiv.insertBefore(
                            newInnerSpan,
                            newOuterDiv.firstChild
                          );

                          document.body.removeChild(audioElement);
                          bubble.nextElementSibling.appendChild(
                            newOuterDiv.cloneNode(true)
                          );
                          const newElement =
                            bubble.nextElementSibling.querySelector('div.feno-bubble');
                          setTimeout(() => {
                            newElement.style.opacity = '1';
                          }, 400);
                        }, durationInSeconds * 0.35 * 1000);
                      }
                    });

                    audioElement.load();
                  }
                } else {
                  bubble.nextElementSibling.appendChild(newOuterDiv.cloneNode(true));
                  const newElement =
                    bubble.nextElementSibling.querySelector('div.feno-bubble');
                  setTimeout(() => {
                    newElement.style.opacity = '1';
                  }, 400);
                }
              } else {
                const ifr = bubble.nextElementSibling.querySelector('iframe');
                if (ifr) {
                  statusText.innerText = 'gravando audio...';
                } else {
                  statusText.innerText = 'digitando...';
                }
              }
            }
          });
        }
      };

      const observer = new MutationObserver(mutationCallback);
      observer.observe(targetElement, observerConfig);
    </script>`,
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

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonTemplate));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${name}_template.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
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
          <FormControl id="avatarUrl">
            <FormLabel>URL do Avatar</FormLabel>
            <Input value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} placeholder="Digite a URL do avatar" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleDownloadJson} isLoading={isLoading}>
            Gerar e Baixar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
