import { MoonIcon, SunIcon } from '@/components/icons'
import { useUser } from '@/features/account/hooks/useUser'
import { Box, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ThemeSwitcher = () => {
  const { user, updateUser } = useUser()

  const { colorMode } = useColorMode()

  const appearance =
    user?.preferredAppAppearance === 'system'
      ? colorMode
      : user?.preferredAppAppearance

  const changeAppearance = async (value: string) => {
    updateUser({ preferredAppAppearance: value })
  }

  const isAppearanceDark = appearance === 'dark'

  return (
    <Box
      width="90px"
      height="40px"
      p="2px"
      bg={isAppearanceDark ? 'black' : 'gray.400'}
      borderRadius="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
      onClick={() => changeAppearance(isAppearanceDark ? 'light' : 'dark')}
    >
      <Box
        bg={isAppearanceDark ? '' : 'blue.100'}
        borderRadius="full"
        width="35px"
        height="35px"
        display="grid"
        placeItems="center"
      >
        <SunIcon color="white" />
      </Box>
      <Box
        bg={isAppearanceDark ? 'blue.100' : ''}
        borderRadius="full"
        width="35px"
        height="35px"
        display="grid"
        placeItems="center"
      >
        <MoonIcon color="white" />
      </Box>
    </Box>
  )
}

export default ThemeSwitcher
