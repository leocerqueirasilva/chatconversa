import { ChevronLeftIcon, PlusIcon, LogOutIcon } from '@/components/icons'
import { useTranslate } from '@tolgee/react'
import {
  Menu,
  MenuButton,
  Button,
  HStack,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react'
import { WorkspaceInApp } from '../WorkspaceProvider'

type Props = {
  currentWorkspace?: WorkspaceInApp
  onPreferencesModalOpen: () => void
  onLogoutClick: () => void
}

export const WorkspaceDropdown = ({
  currentWorkspace,
  onPreferencesModalOpen,
  onLogoutClick,
}: Props) => {
  const { t } = useTranslate()

  return (
    <Menu placement="bottom-end">
      <MenuButton as={Button} variant="outline" px="2">
        <HStack>
          {currentWorkspace && (
            <>
              <Text noOfLines={1} maxW="200px">
                {t('dashboard.header.dropdownButton.label')}
              </Text>
            </>
          )}
          <ChevronLeftIcon transform="rotate(-90deg)" />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onPreferencesModalOpen} icon={<PlusIcon />}>
          {t('workspace.dropdown.preferencesButton.label')}
        </MenuItem>
        <MenuItem
          onClick={onLogoutClick}
          icon={<LogOutIcon />}
          color="orange.500"
        >
          {t('workspace.dropdown.logoutButton.label')}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
