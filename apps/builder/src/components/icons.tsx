import { IconProps, Icon, useColorModeValue } from '@chakra-ui/react'

export const featherIconsBaseProps: IconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// 99% of these icons are from Feather icons (https://feathericons.com/)

export const SettingsIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </Icon>
)

export const LogOutIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path
      d="M16.7501 0C16.3381 0.00538581 16.0055 0.338038 16.0001 0.75V2.75C16.0109 3.88044 15.5666 4.96773 14.7672 5.76711C13.9678 6.56649 12.8805 7.01079 11.7501 7H2.56007L7.28007 2.25C7.45096 1.94944 7.39424 1.57101 7.14275 1.33376C6.89126 1.0965 6.51018 1.06191 6.22007 1.25L0.220075 7.25C0.152284 7.31936 0.0980235 7.40075 0.0600746 7.49C-0.0200249 7.67504 -0.0200249 7.88496 0.0600746 8.07C0.0980235 8.15925 0.152284 8.24064 0.220075 8.31L6.22007 14.31C6.51289 14.6025 6.98726 14.6025 7.28007 14.31C7.57253 14.0172 7.57253 13.5428 7.28007 13.25L2.56007 8.5H11.7501C13.28 8.51622 14.752 7.91563 15.8338 6.83376C16.9157 5.75189 17.5163 4.27991 17.5001 2.75V0.75C17.4947 0.338038 17.162 0.00538581 16.7501 0Z"
      fill="#EA4335"
    />
  </Icon>
)

export const ChevronLeftIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </Icon>
)

export const ChevronRightIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </Icon>
)

export const ChevronDownIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </Icon>
)

export const PlusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </Icon>
)

export const FolderIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 24 24"
    {...featherIconsBaseProps}
    fill="currentColor"
    {...props}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </Icon>
)

export const MoreVerticalIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </Icon>
)

export const MoreHorizontalIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </Icon>
)

export const GlobeIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </Icon>
)

export const ToolIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </Icon>
)

export const FolderPlusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    <line x1="12" y1="11" x2="12" y2="17"></line>
    <line x1="9" y1="14" x2="15" y2="14"></line>
  </Icon>
)

export const TextIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="4 7 4 4 20 4 20 7"></polyline>
    <line x1="9" y1="20" x2="15" y2="20"></line>
    <line x1="12" y1="4" x2="12" y2="20"></line>
  </Icon>
)

export const ImageIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </Icon>
)

export const CalendarIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </Icon>
)

export const FlagIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
    <line x1="4" y1="22" x2="4" y2="15"></line>
  </Icon>
)

export const BoldIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
  </Icon>
)

export const ItalicIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="19" y1="4" x2="10" y2="4"></line>
    <line x1="14" y1="20" x2="5" y2="20"></line>
    <line x1="15" y1="4" x2="9" y2="20"></line>
  </Icon>
)

export const UnderlineIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
    <line x1="4" y1="21" x2="20" y2="21"></line>
  </Icon>
)

export const LinkIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </Icon>
)

export const SaveIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
    <polyline points="17 21 17 13 7 13 7 21"></polyline>
    <polyline points="7 3 7 8 15 8"></polyline>
  </Icon>
)

export const CheckIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </Icon>
)

export const ChatIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Icon>
)

export const TrashIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </Icon>
)

export const LayoutIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </Icon>
)

export const CodeIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </Icon>
)

export const EditIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </Icon>
)

export const UploadIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="16 16 12 12 8 16"></polyline>
    <line x1="12" y1="12" x2="12" y2="21"></line>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
    <polyline points="16 16 12 12 8 16"></polyline>
  </Icon>
)

export const DownloadIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </Icon>
)

export const NumberIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </Icon>
)

export const EmailIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
  </Icon>
)

export const PhoneIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </Icon>
)

export const CheckSquareIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="9 11 12 14 22 4"></polyline>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </Icon>
)

export const FilterIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </Icon>
)

export const UserIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </Icon>
)

export const ExpandIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </Icon>
)

export const ExternalLinkIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </Icon>
)

export const FilmIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="7" y1="2" x2="7" y2="22"></line>
    <line x1="17" y1="2" x2="17" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="2" y1="7" x2="7" y2="7"></line>
    <line x1="2" y1="17" x2="7" y2="17"></line>
    <line x1="17" y1="17" x2="22" y2="17"></line>
    <line x1="17" y1="7" x2="22" y2="7"></line>
  </Icon>
)

export const ThunderIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </Icon>
)

export const GripIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="9" r="1"></circle>
    <circle cx="19" cy="9" r="1"></circle>
    <circle cx="5" cy="9" r="1"></circle>
    <circle cx="12" cy="15" r="1"></circle>
    <circle cx="19" cy="15" r="1"></circle>
    <circle cx="5" cy="15" r="1"></circle>
  </Icon>
)

export const LockedIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </Icon>
)

export const UnlockedIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
  </Icon>
)

export const UndoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M3 7v6h6"></path>
    <path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"></path>
  </Icon>
)

export const RedoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M21 7v6h-6"></path>
    <path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"></path>
  </Icon>
)

export const FileIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
  </Icon>
)

export const EyeIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </Icon>
)

export const SendEmailIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </Icon>
)
export const WhatsAppIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#25d366"
      height="24"
      width="24"
      viewBox="0 0 308 308"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="XMLID_468_">
          <path
            id="XMLID_469_"
            d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
          ></path>
          <path
            id="XMLID_470_"
            d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
          ></path>
        </g>
      </g>
    </svg>
  </Icon>
)

export const GithubIcon = (props: IconProps) => (
  <Icon viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      fill={useColorModeValue('#24292f', 'white')}
    />
  </Icon>
)

export const UsersIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </Icon>
)

export const AlignLeftTextIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="17" y1="10" x2="3" y2="10"></line>
    <line x1="21" y1="6" x2="3" y2="6"></line>
    <line x1="21" y1="14" x2="3" y2="14"></line>
    <line x1="17" y1="18" x2="3" y2="18"></line>
  </Icon>
)

export const BoxIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </Icon>
)

export const HelpCircleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </Icon>
)

export const CopyIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </Icon>
)

export const TemplateIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </Icon>
)

export const MinusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </Icon>
)

export const LaptopIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path
      d="M3.2 14.2222V4C3.2 2.89543 4.09543 2 5.2 2H18.8C19.9046 2 20.8 2.89543 20.8 4V14.2222M3.2 14.2222H20.8M3.2 14.2222L1.71969 19.4556C1.35863 20.7321 2.31762 22 3.64418 22H20.3558C21.6824 22 22.6414 20.7321 22.2803 19.4556L20.8 14.2222"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M11 19L13 19"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export const MouseIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path
      d="M12 2V2C16.4183 2 20 5.58172 20 10V14C20 18.4183 16.4183 22 12 22V22C7.58172 22 4 18.4183 4 14V10C4 5.58172 7.58172 2 12 2V2ZM12 2V9"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </Icon>
)

export const HardDriveIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="22" y1="12" x2="2" y2="12"></line>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
    <line x1="6" y1="16" x2="6.01" y2="16"></line>
    <line x1="10" y1="16" x2="10.01" y2="16"></line>
  </Icon>
)

export const CreditCardIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </Icon>
)

export const PlayIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </Icon>
)

export const StarIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </Icon>
)
export const BuoyIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
    <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
  </Icon>
)

export const EyeOffIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </Icon>
)

export const AlertIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </Icon>
)

export const CloudOffIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </Icon>
)

export const ListIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </Icon>
)

export const PackageIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </Icon>
)

export const CloseIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </Icon>
)

export const NoRadiusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <mask id="path-1-inside-1_1009_3" fill="currentColor">
      <path d="M0 0H20V20H0V0Z" />
    </mask>
    <path
      d="M0 0V-2H-2V0H0ZM0 20H-2V22H0V20ZM0 2H20V-2H0V2ZM20 18H0V22H20V18ZM2 20V0H-2V20H2Z"
      fill="currentColor"
      mask="url(#path-1-inside-1_1009_3)"
    />
  </Icon>
)

export const MediumRadiusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <mask id="path-1-inside-1_1009_4" fill="currentColor">
      <path d="M0 4C0 1.79086 1.79086 0 4 0H20V20H4C1.79086 20 0 18.2091 0 16V4Z" />
    </mask>
    <path
      d="M-2 4C-2 0.686292 0.686292 -2 4 -2H20V2H4C2.89543 2 2 2.89543 2 4H-2ZM20 22H4C0.686292 22 -2 19.3137 -2 16H2C2 17.1046 2.89543 18 4 18H20V22ZM4 22C0.686292 22 -2 19.3137 -2 16V4C-2 0.686292 0.686292 -2 4 -2V2C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18V22ZM20 0V20V0Z"
      fill="currentColor"
      mask="url(#path-1-inside-1_1009_4)"
    />
  </Icon>
)

export const LargeRadiusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <mask id="path-1-inside-1_1009_5" fill="currentColor">
      <path d="M0 10C0 4.47715 4.47715 0 10 0H20V20H10C4.47715 20 0 15.5228 0 10V10Z" />
    </mask>
    <path
      d="M-2 10C-2 3.37258 3.37258 -2 10 -2H20V2H10C5.58172 2 2 5.58172 2 10H-2ZM20 22H10C3.37258 22 -2 16.6274 -2 10H2C2 14.4183 5.58172 18 10 18H20V22ZM10 22C3.37258 22 -2 16.6274 -2 10C-2 3.37258 3.37258 -2 10 -2V2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18V22ZM20 0V20V0Z"
      fill="currentColor"
      mask="url(#path-1-inside-1_1009_5)"
    />
  </Icon>
)

export const DropletIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </Icon>
)

export const TableIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
  </Icon>
)

export const ShuffleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <polyline points="16 3 21 3 21 8"></polyline>
    <line x1="4" y1="20" x2="21" y2="3"></line>
    <polyline points="21 16 21 21 16 21"></polyline>
    <line x1="15" y1="15" x2="21" y2="21"></line>
    <line x1="4" y1="4" x2="9" y2="9"></line>
  </Icon>
)

export const InfoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </Icon>
)

export const SmileIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </Icon>
)

export const BookIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </Icon>
)

export const ChevronLastIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="m7 18 6-6-6-6" />
    <path d="M17 6v12" />
  </Icon>
)

export const XCircleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </Icon>
)

export const LightBulbIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </Icon>
)

export const UnlinkIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
    <line x1="8" x2="8" y1="2" y2="5" />
    <line x1="2" x2="5" y1="8" y2="8" />
    <line x1="16" x2="16" y1="19" y2="22" />
    <line x1="19" x2="22" y1="16" y2="16" />
  </Icon>
)

export const RepeatIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="m2 9 3-3 3 3" />
    <path d="M13 18H7a2 2 0 0 1-2-2V6" />
    <path d="m22 15-3 3-3-3" />
    <path d="M11 6h6a2 2 0 0 1 2 2v10" />
  </Icon>
)

export const SunIcon = (props: IconProps) => (
  <Icon viewBox="0 0 30 30" {...featherIconsBaseProps} {...props}>
    <path
      d="M14 4V1C14 0.734784 14.1054 0.48043 14.2929 0.292893C14.4804 0.105357 14.7348 0 15 0C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V4C16 4.26522 15.8946 4.51957 15.7071 4.70711C15.5196 4.89464 15.2652 5 15 5C14.7348 5 14.4804 4.89464 14.2929 4.70711C14.1054 4.51957 14 4.26522 14 4ZM23 15C23 16.5823 22.5308 18.129 21.6518 19.4446C20.7727 20.7602 19.5233 21.7855 18.0615 22.391C16.5997 22.9965 14.9911 23.155 13.4393 22.8463C11.8874 22.5376 10.462 21.7757 9.34315 20.6569C8.22433 19.538 7.4624 18.1126 7.15372 16.5607C6.84504 15.0089 7.00346 13.4003 7.60896 11.9385C8.21447 10.4767 9.23985 9.22729 10.5554 8.34824C11.871 7.46919 13.4177 7 15 7C17.121 7.00232 19.1545 7.84591 20.6543 9.3457C22.1541 10.8455 22.9977 12.879 23 15ZM21 15C21 13.8133 20.6481 12.6533 19.9888 11.6666C19.3295 10.6799 18.3925 9.91085 17.2961 9.45672C16.1997 9.0026 14.9933 8.88378 13.8295 9.11529C12.6656 9.3468 11.5965 9.91824 10.7574 10.7574C9.91824 11.5965 9.3468 12.6656 9.11529 13.8295C8.88378 14.9933 9.0026 16.1997 9.45672 17.2961C9.91085 18.3925 10.6799 19.3295 11.6666 19.9888C12.6533 20.6481 13.8133 21 15 21C16.5908 20.9983 18.116 20.3657 19.2408 19.2408C20.3657 18.116 20.9983 16.5908 21 15ZM6.2925 7.7075C6.48014 7.89514 6.73464 8.00056 7 8.00056C7.26536 8.00056 7.51986 7.89514 7.7075 7.7075C7.89514 7.51986 8.00056 7.26536 8.00056 7C8.00056 6.73464 7.89514 6.48014 7.7075 6.2925L5.7075 4.2925C5.51986 4.10486 5.26536 3.99944 5 3.99944C4.73464 3.99944 4.48014 4.10486 4.2925 4.2925C4.10486 4.48014 3.99944 4.73464 3.99944 5C3.99944 5.26536 4.10486 5.51986 4.2925 5.7075L6.2925 7.7075ZM6.2925 22.2925L4.2925 24.2925C4.10486 24.4801 3.99944 24.7346 3.99944 25C3.99944 25.2654 4.10486 25.5199 4.2925 25.7075C4.48014 25.8951 4.73464 26.0006 5 26.0006C5.26536 26.0006 5.51986 25.8951 5.7075 25.7075L7.7075 23.7075C7.80041 23.6146 7.87411 23.5043 7.92439 23.3829C7.97468 23.2615 8.00056 23.1314 8.00056 23C8.00056 22.8686 7.97468 22.7385 7.92439 22.6171C7.87411 22.4957 7.80041 22.3854 7.7075 22.2925C7.61459 22.1996 7.50429 22.1259 7.3829 22.0756C7.2615 22.0253 7.13139 21.9994 7 21.9994C6.86861 21.9994 6.7385 22.0253 6.6171 22.0756C6.49571 22.1259 6.38541 22.1996 6.2925 22.2925ZM23 8C23.1314 8.0001 23.2615 7.97432 23.3829 7.92414C23.5042 7.87395 23.6146 7.80033 23.7075 7.7075L25.7075 5.7075C25.8951 5.51986 26.0006 5.26536 26.0006 5C26.0006 4.73464 25.8951 4.48014 25.7075 4.2925C25.5199 4.10486 25.2654 3.99944 25 3.99944C24.7346 3.99944 24.4801 4.10486 24.2925 4.2925L22.2925 6.2925C22.1525 6.43236 22.0571 6.61061 22.0185 6.80469C21.9798 6.99878 21.9996 7.19997 22.0754 7.38279C22.1511 7.56561 22.2794 7.72185 22.444 7.83172C22.6086 7.94159 22.8021 8.00016 23 8ZM23.7075 22.2925C23.5199 22.1049 23.2654 21.9994 23 21.9994C22.7346 21.9994 22.4801 22.1049 22.2925 22.2925C22.1049 22.4801 21.9994 22.7346 21.9994 23C21.9994 23.2654 22.1049 23.5199 22.2925 23.7075L24.2925 25.7075C24.3854 25.8004 24.4957 25.8741 24.6171 25.9244C24.7385 25.9747 24.8686 26.0006 25 26.0006C25.1314 26.0006 25.2615 25.9747 25.3829 25.9244C25.5043 25.8741 25.6146 25.8004 25.7075 25.7075C25.8004 25.6146 25.8741 25.5043 25.9244 25.3829C25.9747 25.2615 26.0006 25.1314 26.0006 25C26.0006 24.8686 25.9747 24.7385 25.9244 24.6171C25.8741 24.4957 25.8004 24.3854 25.7075 24.2925L23.7075 22.2925ZM5 15C5 14.7348 4.89464 14.4804 4.70711 14.2929C4.51957 14.1054 4.26522 14 4 14H1C0.734784 14 0.48043 14.1054 0.292893 14.2929C0.105357 14.4804 0 14.7348 0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16H4C4.26522 16 4.51957 15.8946 4.70711 15.7071C4.89464 15.5196 5 15.2652 5 15ZM15 25C14.7348 25 14.4804 25.1054 14.2929 25.2929C14.1054 25.4804 14 25.7348 14 26V29C14 29.2652 14.1054 29.5196 14.2929 29.7071C14.4804 29.8946 14.7348 30 15 30C15.2652 30 15.5196 29.8946 15.7071 29.7071C15.8946 29.5196 16 29.2652 16 29V26C16 25.7348 15.8946 25.4804 15.7071 25.2929C15.5196 25.1054 15.2652 25 15 25ZM29 14H26C25.7348 14 25.4804 14.1054 25.2929 14.2929C25.1054 14.4804 25 14.7348 25 15C25 15.2652 25.1054 15.5196 25.2929 15.7071C25.4804 15.8946 25.7348 16 26 16H29C29.2652 16 29.5196 15.8946 29.7071 15.7071C29.8946 15.5196 30 15.2652 30 15C30 14.7348 29.8946 14.4804 29.7071 14.2929C29.5196 14.1054 29.2652 14 29 14Z"
      fill="white"
    />
  </Icon>
)
export const BracesIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
    <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
  </Icon>
)

export const VideoPopoverIcon = (props: IconProps) => (
  <Icon viewBox="0 0 21 21" {...featherIconsBaseProps} {...props}>
    <path
      d="M6.9 18.0079C8.80858 18.9869 11.0041 19.2521 13.0909 18.7556C15.1777 18.2592 17.0186 17.0337 18.2818 15.3C19.545 13.5664 20.1474 11.4386 19.9806 9.30002C19.8137 7.16147 18.8886 5.15283 17.3718 3.63605C15.855 2.11928 13.8464 1.19411 11.7078 1.02728C9.56929 0.860441 7.44147 1.46291 5.70782 2.72611C3.97417 3.98931 2.74869 5.83017 2.25222 7.91697C1.75575 10.0038 2.02094 12.1993 3 14.1079L1 20.0079L6.9 18.0079Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 6L15 10L9 14V6Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export const MoonIcon = (props: IconProps) => (
  <Icon viewBox="0 0 30 30" {...featherIconsBaseProps} {...props}>
    <path
      d="M29.6636 17.9705C29.5126 17.8192 29.3233 17.7119 29.1159 17.6601C28.9086 17.6082 28.6911 17.6138 28.4867 17.6763C26.2426 18.3547 23.8564 18.4116 21.5826 17.8408C19.3087 17.2701 17.2322 16.0932 15.5745 14.4354C13.9167 12.7777 12.7398 10.7012 12.1691 8.42736C11.5983 6.15347 11.6552 3.76735 12.3336 1.52325C12.3966 1.31876 12.4026 1.10098 12.3511 0.893326C12.2995 0.685672 12.1923 0.495999 12.0411 0.344708C11.8898 0.193416 11.7001 0.0862293 11.4924 0.0346754C11.2848 -0.0168786 11.067 -0.0108493 10.8625 0.0521147C7.75994 1.00253 5.03616 2.90728 3.07876 5.4953C1.36697 7.76799 0.322825 10.473 0.0636265 13.3064C-0.195572 16.1398 0.340449 18.9893 1.61147 21.5349C2.88249 24.0804 4.83815 26.2211 7.25873 27.7165C9.67932 29.2118 12.4689 30.0026 15.3142 29.9999C18.6335 30.0102 21.8646 28.9311 24.5117 26.9282C27.0997 24.9708 29.0044 22.247 29.9549 19.1445C30.0171 18.9407 30.0229 18.7239 29.9716 18.5172C29.9203 18.3104 29.8138 18.1215 29.6636 17.9705ZM23.0964 25.0481C20.6037 26.9256 17.5166 27.8396 14.4035 27.6216C11.2903 27.4036 8.36072 26.0684 6.15392 23.8618C3.94713 21.6552 2.6117 18.7257 2.39347 15.6126C2.17523 12.4994 3.08888 9.41227 4.96622 6.91935C6.18933 5.30414 7.77059 3.99482 9.58557 3.09441C9.48218 3.82001 9.43007 4.552 9.42963 5.28493C9.43392 9.34136 11.0472 13.2304 13.9156 16.0988C16.7839 18.9671 20.673 20.5804 24.7294 20.5847C25.4638 20.5845 26.1973 20.5324 26.9243 20.4288C26.0231 22.244 24.7127 23.8253 23.0964 25.0481Z"
      fill="#D5D5D5"
    />
  </Icon>
)
export const WalletIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...featherIconsBaseProps} {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
    <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
  </Icon>
)
