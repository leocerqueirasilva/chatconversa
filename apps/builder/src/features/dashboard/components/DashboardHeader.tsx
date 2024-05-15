import React from 'react'
import {
  HStack,
  Flex,
  Button,
  useDisclosure,
  Avatar,
  Text,
} from '@chakra-ui/react'
import { UsersIcon } from '@/components/icons'
import { useUser } from '@/features/account/hooks/useUser'
import { isNotDefined } from '@typebot.io/lib'
import { useTranslate } from '@tolgee/react'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { WorkspaceDropdown } from '@/features/workspace/components/WorkspaceDropdown'
import { MyProfileModal } from '@/features/account/components/MyProfileModal'
import { MembersListModal } from '@/features/workspace/components/MembersListModal'
import ThemeSwitcher from '@/features/dashboard/components/ThemeSwitcher'

export const DashboardHeader = () => {
  const { t } = useTranslate()
  const { user, logOut } = useUser()
  const { workspace, switchWorkspace, createWorkspace } = useWorkspace()

  const {
    isOpen: isMembersListModalOpen,
    onOpen: onMembersListModalOpen,
    onClose: onMembersListModalClose,
  } = useDisclosure()
  const {
    isOpen: isMyProfileModalOpen,
    onOpen: onMyProfileModalOpen,
    onClose: onMyProfileModalClose,
  } = useDisclosure()

  const handleCreateNewWorkspace = () =>
    createWorkspace(user?.name ?? undefined)

  return (
    <Flex w="full" borderBottomWidth="1px" justify="center">
      <Flex
        justify="space-between"
        alignItems="center"
        h="16"
        maxW="1000px"
        flex="1"
      >
        <HStack onClick={onMyProfileModalOpen} cursor="pointer">
          {user && workspace && !workspace.isPastDue && (
            <MyProfileModal
              isOpen={isMyProfileModalOpen}
              onClose={onMyProfileModalClose}
            />
          )}
          <Avatar
            name={user?.name ?? undefined}
            src={user?.image ?? undefined}
            onClick={onMyProfileModalOpen}
          />
          <Text onClick={onMyProfileModalOpen}>{user?.name}</Text>
        </HStack>
        <HStack>
          {user && workspace && !workspace.isPastDue && (
            <MembersListModal
              isOpen={isMembersListModalOpen}
              onClose={onMembersListModalClose}
            />
          )}
          {!workspace?.isPastDue && (
            <Button
              leftIcon={<UsersIcon />}
              onClick={onMembersListModalOpen}
              isLoading={isNotDefined(workspace)}
            >
              {t('dashboard.header.settingsButton.label')}
            </Button>
          )}
          <WorkspaceDropdown
            currentWorkspace={workspace}
            onLogoutClick={logOut}
            onCreateNewWorkspaceClick={handleCreateNewWorkspace}
            onWorkspaceSelected={switchWorkspace}
          />
          <ThemeSwitcher />
        </HStack>
      </Flex>
    </Flex>
  )
}
