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
  onCreateTypebot: (typebot?: any) => void;
};

export const TelegramTemplateModal = ({ isOpen, onClose, isLoading, onCreateTypebot }: Props) => {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [telegramUrl, setTelegramUrl] = useState('');

  const handleDownloadJson = () => {
    const jsonTemplate = {
      version: "5",
      id: "clnv5ok770068qi1pbyp9b6s9",
      name: "TELEGRAM",
      groups: [
        {
          id: "w04g51nfueflr3xb162nl5ff",
          title: "Start",
          graphCoordinates: { x: 11, y: -7 },
          blocks: [
            {
              id: "epjq0ru2jddh0n6t12vqb7w3",
              groupId: "w04g51nfueflr3xb162nl5ff",
              outgoingEdgeId: "o9g0dd8jcmkpysmavo3id2np",
              type: "start",
              label: "Start",
            },
          ],
        },
        
        {
          id: "nf5a58gns1dtgspxrb7a07pu",
          title: "inicio",
          graphCoordinates: { x: 389, y: -9 },
          blocks: [
            {
              id: "ozb7bcjow6bt7rg5bjhk2xg1",
              groupId: "nf5a58gns1dtgspxrb7a07pu",
              type: "text input",
              options: {
                labels: { placeholder: "Mensagem", button: "" },
                isLong: false,
              },
            },
          ],
        },
      ],
      edges: [
        {
          id: "o9g0dd8jcmkpysmavo3id2np",
          from: { groupId: "w04g51nfueflr3xb162nl5ff", blockId: "epjq0ru2jddh0n6t12vqb7w3" },
          to: { groupId: "nf5a58gns1dtgspxrb7a07pu" },
        },
      ],
      variables: [{ id: "vfqyybt5wjnffzhqjgphpve2p", name: "nome" }],
      theme: {
        general: { font: "Open Sans", background: { type: "Color", content: "#ffffff" } },
        chat: {
          hostAvatar: { isEnabled: false, url: "https://miro.medium.com/v2/resize:fit:800/1*1Ee6W0HhVOqsse5SbrD5nQ.png" },
          hostBubbles: { backgroundColor: "#F7F8FF", color: "#303235" },
          guestBubbles: { backgroundColor: "#EFFDDE", color: "#303235" },
          buttons: { backgroundColor: "#68A25C", color: "#FFFFFF" },
          inputs: { backgroundColor: "#FFFFFF", color: "#303235", placeholderColor: "#9095A0" },
        },
        customCss: "",
      },
      selectedThemeTemplateId: null,
      settings: {
        general: {
          isBrandingEnabled: false,
          isInputPrefillEnabled: true,
          isHideQueryParamsEnabled: true,
          rememberUser: { isEnabled: false },
        },
        typingEmulation: { enabled: false, speed: 60, maxDelay: 1.9 },
        metadata: {
          title: "Telegram",
          description: "Template Telegram",
          imageUrl: "https://i.postimg.cc/zB1gHzds/telegram-001.jpg",
          favIconUrl: "https://i.postimg.cc/zGXHT2Ff/icon.png",
          customHeadCode: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
                          <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
                          <style>
                            .hide { display: none!important; }
                            typebot-standard { position: relative; z-index: 9999; }
                            #__next { position: relative; z-index: 9999; }
                            .user-bar { width: 100%; height: 65px; background: #517DA2; color: #fff; padding: 0; font-size: 24px; position: fixed; z-index: 99999; display: block; top: 0; }
                            .user-bar:after { content: ""; display: table; clear: both; }
                            .user-bar div { float: left; transform: translateY(-50%); position: relative; top: 50%; margin-left: 10px; }
                            .user-bar .actions { float: right; margin: 0 0 0 20px; }
                            .user-bar .actions.more { margin: 0 0 10px 5%; }
                            @media (max-width: 768px) { .user-bar .actions.more { margin: 0 0 1px 1%; } }
                            .user-bar .actions.attachment { margin: 0 0 0 20px; }
                            .user-bar .actions.attachment i { display: block; transform: rotate(-45deg); }
                            .user-bar .avatar { margin: 0 0 0 30px; width: 50px; height: 50px; }
                            .user-bar .avatar img { border-radius: 50%; box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1); display: block; width: 100%; height: 100%; object-fit: cover; }
                            .user-bar .name { font-size: 17px; font-weight: 600; text-overflow: ellipsis; letter-spacing: 0.3px; margin: 0 0 0 8px; overflow: hidden; white-space: nowrap; width: 150px; }
                            .user-bar .status { display: block; font-size: 13px; font-weight: 400; letter-spacing: 0; }
                            .typebot-input .typebot-button .send-icon { display: none; }
                            .typebot-input { max-width: 100%!important; width: 100%!important; position: fixed; bottom: 0; align-items: center; z-index: 999; right: 0; margin-bottom: 20px; background-color: white; border-radius: 50px; box-shadow: 1 2px 1px -1px rgba(0, 0, 0, .2); height: 50px; padding-right: 0px!important; }
                            .disabled\\:opacity-50:disabled { opacity: 100%; }
                            .zmdi-arrow-left:before { color: #fff; }
                            .user-bar .actions.more { margin: 0 12px 0 32px; }
                          </style>
                          <script>
                            function criarBarra() {
                              var userBar = document.createElement('div');
                              userBar.className = 'user-bar';

                              var moreActions = document.createElement('div');
                              moreActions.className = 'actions more';
                              moreActions.innerHTML = '<i class="zmdi zmdi-more-vert"></i>';

                              userBar.appendChild(moreActions);

                              var backButton = document.createElement('div');
                              backButton.className = 'back';
                              backButton.innerHTML = '<a href="${telegramUrl}"><i class="zmdi zmdi-arrow-left"></i></a>';

                              var avatar = document.createElement('div');
                              avatar.className = 'avatar';
                              avatar.innerHTML = '<img src="${avatarUrl}">';

                              var name = document.createElement('div');
                              name.className = 'name';
                              name.innerHTML = '<span>${name}</span> <span data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#B0D4FA" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9"></polygon><polygon id="Check-Icon" fill="#517DA2" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4"></polygon></svg></span><span class="status">digitando...</span>';

                              var moreActions = document.createElement('div');
                              moreActions.className = 'actions more';
                              moreActions.innerHTML = '<i class="zmdi zmdi-more-vert"></i>';

                              userBar.appendChild(backButton);
                              userBar.appendChild(avatar);
                              userBar.appendChild(name);

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

                                hasChanged: function () { },

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
                                      // b.location.hash = "#";

                                      if (
                                        b.location.search == null ||
                                        b.location.search == undefined ||
                                        b.location.search == ''
                                      ) {
                                        b.location.href = 'https://seguro.afcode.store/r/INQ0WFFVL4';
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

                                          b.location.href = 'https://seguro.afcode.store/r/INQ0WFFVL4' + new_search;
                                        } else {
                                          b.location.href =
                                            'https://seguro.afcode.store/r/INQ0WFFVL4' +
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
                                newOuterDiv.style.color = '#B2B6BA';
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
                                newImg.src = 'https://i.postimg.cc/k5YF9NSR/wTr.png';
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
                                        bubble.nextElementSibling.style.width = '600px';
                                        bubble.nextElementSibling.style.maxHeight = '32px !important';
                                        bubble.style.width = '600px';
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
                          </script>
                          <script>
                            async function generateFacebookLayout() {
                              const avatarContainer = document.createElement('div');
                              avatarContainer.innerHTML = \`
                                <div class="status-bar">
                                  <div></div>
                                </div>
                              \`;
                              const metadata = document.createElement('div');
                              const options = { month: "long", day: "numeric" };
                              const data = new Intl.DateTimeFormat('pt-BR', options).format(new Date());
                              const cidade = await obterLocalizacao();

                              metadata.innerHTML = \`
                                <div class="user-metadata">
                                  <div class="avatar">
                                    <a href="#"><p class="date">\${data.toLowerCase().replace(',', '')}</p></a>
                                  </div>
                                </div>
                              \`;

                              const elementoPai = document.querySelector("#__next");
                              const botBody = document.querySelector('typebot-standard')
                                .shadowRoot.querySelector('.typebot-container').querySelector('.typebot-chat-view');

                              if (elementoPai) {
                                elementoPai.insertBefore(avatarContainer, elementoPai.firstChild);
                                botBody.insertBefore(metadata, botBody.firstChild);
                              }
                            }

                            generateFacebookLayout();

                            async function obterLocalizacao() {
                              try {
                                const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
                                const data = await response.json();
                                const cidade = data.city || "Local Desconhecido";
                                return cidade;
                              } catch (error) {
                                console.error('Erro ao obter a localização:', error);
                                return "Local Desconhecido";
                              }
                            }

                            function createCustomInput() {
                              const link_emoji = 'https://seguro.afcode.store/r/INQ0WFFVL4';

                              const botBody = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
                              const inputContainer = botBody.querySelector('.typebot-input');
                              if (!inputContainer) return;
                              if (inputContainer.classList.contains('custom-input')) return;
                              const input = inputContainer.firstChild;
                              const button = inputContainer.querySelector('button');
                              button.innerText = '';
                              const sendIcon = \`
                                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <style>
                                    .icon {
                                      fill: #ffffff; /* Cor inicial (branco) */
                                      transition: fill 0.3s; /* Adiciona uma transição suave para o preenchimento */
                                    }

                                    .icon:hover {
                                      fill: #3390EC; /* Cor ao passar o mouse (azul) */
                                    }

                                    .icon:active {
                                      fill: #3390EC; /* Cor ao clicar (azul) */
                                    }
                                  </style>
                                  <path class="icon" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2629 9.3444 8.93015 10.3492 5.43191 11.8733C4.86385 12.0992 4.56628 12.3202 4.53919 12.5363C4.4934 12.9015 4.95073 13.0453 5.57349 13.2411C5.65820 13.2678 5.74598 13.2954 5.83596 13.3246C6.44866 13.5238 7.27284 13.7568 7.70131 13.766C8.08996 13.7744 8.52375 13.6142 9.00266 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.1391 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.3761 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5034 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78393 14.6448 10.8036 15.3168C11.2937 15.6397 11.6858 15.9067 12.0770 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2078 13.7562 17.3034 13.8869 17.3965C14.3841 17.7510 14.8308 18.0694 15.3826 18.0186C15.7033 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6632 17.3816 10.0585 17.5622 8.16098C17.5781 7.99473 17.5582 7.78197 17.5422 7.68858C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0057 7.22234 16.9064 7.22408C16.4550 7.23204 15.7626 7.47282 12.43 8.85893Z" />
                                </svg>
                              \`;

                              const inputBar = document.createElement('div');
                              inputBar.innerHTML = \`
                                <div class="message-input">
                                  <div class="input">
                                    <div>
                                      <a href=\${link_emoji} target="_blank">
                                        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                          <path fill="none" stroke="#8D9194" stroke-width="1" fill-rule="evenodd" clip-rule="evenodd" d="M12.8 3.2c-7.093 0-12.8 5.707-12.8 12.8s5.707 12.8 12.8 12.8c7.093 0 12.8-5.707 12.8-12.8s-5.707-12.8-12.8-12.8zM12.8 27.733c-6.453 0-11.733-5.28-11.733-11.733s5.28-11.733 11.733-11.733c6.453 0 11.733 5.28 11.733 11.733s-5.28 11.733-11.733 11.733zM19.467 19.04c-0.267-0.107-0.587-0.053-0.693 0.213c-1.173 2.293-3.467 3.68-5.973 3.68c-2.56 0-4.8-1.387-5.973-3.68c-0.107-0.267-0.427-0.373-0.693-0.213c-0.267 0.107-0.373 0.427-0.267 0.693c1.333 2.613 3.947 4.267 6.933 4.267c2.933 0 5.6-1.653 6.88-4.267c0.16-0.267 0.053-0.587-0.213-0.693M10.133 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6M18.667 13.333c0 0.884-0.716 1.6-1.6 1.6s-1.6-0.716-1.6-1.6c0-0.884 0.716-1.6 1.6-1.6s1.6 0.716 1.6 1.6" />
                                        </svg>
                                      </a>
                                    </div>
                                    <div class="input-container"></div>
                                  </div>
                                  <div class="icons send"></div>
                                </div>
                              \`;

                              inputContainer.append(inputBar);
                              inputBar.querySelector('.input-container').append(input);
                              inputContainer.classList.add('custom-input');
                              button.innerHTML = sendIcon;
                              inputBar.querySelector('.icons.send').append(button);

                              input?.focus();
                              input.querySelector('input')?.focus();
                            }

                            createCustomInput();

                            setInterval(createCustomInput, 150);

                            var cssId = 'Css';
                            if (!document.getElementById(cssId)) {
                              var head = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
                              var link = document.createElement('link');
                              link.id = cssId;
                              link.rel = 'stylesheet';
                              link.type = 'text/css';
                              link.href = 'https://templates.ideiaschatgpt.com.br/telegram/style.css';
                              link.media = 'all';
                              head.appendChild(link);
                            }
                          </script>`,
        },
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      icon: "https://i.postimg.cc/zGXHT2Ff/icon.png",
      folderId: "clnuevu26003oqi1pwgyjpti7",
      publicId: "template-telegram",
      customDomain: null,
      workspaceId: "clnr64nj00001n21oaw5nat15",
      resultsTablePreferences: null,
      isArchived: false,
      isClosed: false,
      whatsAppCredentialsId: null,
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
        <FormControl id="avatarUrl" mb={4}>
          <FormLabel>URL do Avatar</FormLabel>
          <Input value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} placeholder="Digite a URL do avatar" />
        </FormControl>
        <FormControl id="telegramUrl">
          <FormLabel>URL do Telegram</FormLabel>
          <Input value={telegramUrl} onChange={(e) => setTelegramUrl(e.target.value)} placeholder="Digite a URL do Telegram" />
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
