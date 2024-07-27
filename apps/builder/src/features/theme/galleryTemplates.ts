import { env } from '@typebot.io/env'
import { ThemeTemplate } from '@typebot.io/schemas'
import { BackgroundType } from '@typebot.io/schemas/features/typebot/theme/constants'

const getOrigin = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  return env.NEXTAUTH_URL
}

export const galleryTemplates: Pick<ThemeTemplate, 'id' | 'name' | 'theme'>[] =
  [  /*
    {
      id: 'typebot-light',
      name: 'Typebot Light',
      theme: {},
    },
    {
      id: 'typebot-dark',
      name: 'Typebot Dark',
      theme: {
        chat: {
          inputs: {
            color: '#ffffff',
            backgroundColor: '#1e293b',
            placeholderColor: '#9095A0',
          },
          hostBubbles: { color: '#ffffff', backgroundColor: '#1e293b' },
        },
        general: {
          background: { type: BackgroundType.COLOR, content: '#171923' },
        },
      },
    },
    {
      id: 'minimalist-black',
      name: 'Minimalist Black',
      theme: {
        chat: {
          buttons: { backgroundColor: '#303235' },
          hostAvatar: { isEnabled: false },
          guestBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
        },
        general: {
          font: {
            type: 'Google',
            family: 'Inter',
          },
        },
      },
    },
    {
      id: 'minimalist-teal',
      name: 'Minimalist Teal',
      theme: {
        chat: {
          buttons: { backgroundColor: '#0d9488' },
          hostAvatar: { isEnabled: false },
          guestBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
        },
        general: {
          font: {
            type: 'Google',
            family: 'Inter',
          },
        },
      },
    },

    {
      id: 'bright-rain',
      name: 'Bright Rain',
      theme: {
        chat: {
          buttons: { backgroundColor: '#D27A7D' },
          guestBubbles: { color: '#303235', backgroundColor: '#FDDDBF' },
        },
        general: {
          font: {
            type: 'Google',
            family: 'Montserrat',
          },
          background: {
            type: BackgroundType.IMAGE,
            content: getOrigin() + '/images/backgrounds/brightRain.jpeg',
          },
        },
      },
    },
    {
      id: 'ray-of-lights',
      name: 'Ray of Lights',
      theme: {
        chat: {
          buttons: { backgroundColor: '#1A2249' },
          guestBubbles: { backgroundColor: '#1A2249' },
        },
        general: {
          font: {
            type: 'Google',
            family: 'Raleway',
          },
          background: {
            type: BackgroundType.IMAGE,
            content: getOrigin() + '/images/backgrounds/rayOfLights.jpeg',
          },
        },
      },
    },
    {
      id: 'aqua-glass',
      name: 'Aqua Glass',
      theme: {
        general: {
          background: {
            type: BackgroundType.IMAGE,
            content:
              'https://images.unsplash.com/photo-1552083974-186346191183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjU2MDR8MHwxfHNlYXJjaHw4fHxhYnN0cmFjdHxlbnwwfDB8fHwxNzEzMjg2NDY1fDA&ixlib=rb-4.0.3&q=80&w=1080',
          },
        },
        chat: {
          container: {
            maxWidth: '750px',
            maxHeight: '80%',
            backgroundColor: '#ffffff',
            blur: 5,
            opacity: 0.6,
            border: {
              thickness: 2,
              color: '#FFFFFF',
              roundeness: 'large',
              opacity: 0.5,
            },
         },
        },
      },
    }, */

    {
      id: 'seoza6kuw4y8qyvujbii71ar',
      name: 'Whatsapp white',
      theme: {
        chat: {
          inputs: {
            color: '#303235',
            backgroundColor: '#FFFFFF',
            placeholderColor: '#9095A0',
          },
          buttons: {
            color: '#FFFFFF',
            backgroundColor: '#00A884',
          },
          roundness: 'large',
          hostAvatar: {
            url: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png',
            isEnabled: true,
          },
          guestAvatar: {
            url: 'https://s3.fr-par.scw.cloud/typebot/public/typebots/clk5r5x2r002wky0fx0jr8cjx/guestAvatar?v=1689808008551',
            isEnabled: false,
          },
          hostBubbles: {
            color: '#303235',
            backgroundColor: '#FFFFFF',
          },
          guestBubbles: {
            color: '#FFFFFF',
            backgroundColor: '#FF8E21',
          },
        },
        general: {
          font: 'Open Sans',
          background: {
            type: BackgroundType.IMAGE,
            content: 'https://s3.fr-par.scw.cloud/typebot/public/typebots/clk5r5x2r002wky0fx0jr8cjx/background?v=1689807864320',
          },
        },
        customCss: `
          .typebot-chat-view > .flex:first-child {
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
          .typebot-input .typebot-button .send-icon {
            display: none; 
          }
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
          .disabled\:opacity-50:disabled {
            opacity: 100%;
          }
          .typebot-host-bubble>.bubble-typing {
            background-color: #f0f3f4;
          }
          /* CSS da user-bar */
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
        `,
      },
    },

    {
      id: 'whatsapp-black',
      name: 'Whatsapp Black',
      theme: {
        chat: {
          inputs: {
            color: '#FFFFFF',
            backgroundColor: '#303235',
            placeholderColor: '#9095A0',
          },
          buttons: {
            color: '#FFFFFF',
            backgroundColor: '#00A884',
          },
          roundness: 'large',
          hostAvatar: {
            url: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png',
            isEnabled: true,
          },
          guestAvatar: {
            url: 'https://s3.fr-par.scw.cloud/typebot/public/typebots/clk5r5x2r002wky0fx0jr8cjx/guestAvatar?v=1689808008551',
            isEnabled: false,
          },
          hostBubbles: {
            color: '#FFFFFF',
            backgroundColor: '#303235',
          },
          guestBubbles: {
            color: '#303235',
            backgroundColor: '#FF8E21',
          },
        },
        general: {
          font: 'Open Sans',
          background: {
            type: BackgroundType.IMAGE,
            content: 'https://i.pinimg.com/originals/87/93/b7/8793b7f3009c87baf350de82a5f72423.jpg',
          },
        },
        customCss: `
          .typebot-chat-view > .flex:first-child {
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
            border-color: transparent #303235 transparent transparent;
            top: 0;
            left: -10px;
          }
          .typebot-guest-bubble {
            position: relative;
            border-radius: 5px 0 5px 5px;
            color:#FFFFFF;
            background-color:#303235;
            max-width: 90%;
          }
          .typebot-guest-bubble:after {
            position: absolute;
            content: "";
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0px 0 10px 10px;
            border-color: transparent transparent transparent #303235;
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
          .typebot-input .typebot-button .send-icon {
            display: none; 
          }
          .typebot-input {
            max-width: 100%!important;
            width:100%!important;
            position: fixed;
            bottom: 0;
            align-items: center;
            z-index: 999;
            right: 0;
            margin-bottom: 20px;
            background-color: #303235;
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
          .disabled\:opacity-50:disabled {
            opacity: 100%;
          }
          .typebot-host-bubble>.bubble-typing {
            background-color: #303235;
          }
          /* CSS da user-bar */
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
        `,
      },
    },

    
  ]
