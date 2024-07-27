import {
  HStack,
  Tooltip,
  EditablePreview,
  EditableInput,
  Text,
  Editable,
} from '@chakra-ui/react'
import { CopyButton } from '@/components/CopyButton'
import React, { useState } from 'react'

type EditableUrlProps = {
  hostname: string
  pathname?: string
  isValid: (newPathname: string) => Promise<boolean> | boolean
  onPathnameChange: (pathname: string) => void
}

export const EditableUrl = ({
  hostname,
  pathname,
  isValid,
  onPathnameChange,
}: EditableUrlProps) => {
  const [value, setValue] = useState(pathname)

  const handleSubmit = async (newPathname: string) => {
    if (newPathname === pathname) return
    if (await isValid(newPathname)) return onPathnameChange(newPathname)
    setValue(pathname)
  }

  return (
    <Editable
      as={HStack}
      spacing={3}
      value={value}
      onChange={setValue}
      onSubmit={handleSubmit}
    >
      <HStack spacing={1}>
        <Text>{hostname}/</Text>
        <Tooltip label="Edit">
          <EditablePreview
            mx={1}
            borderWidth="1px"
            px={3}
            rounded="md"
            cursor="text"
            display="flex"
            fontWeight="semibold"
          />
        </Tooltip>
        <EditableInput px={2} />
      </HStack>

      <HStack>
        <CopyButton size="xs" textToCopy={`${hostname}/${value ?? ''}`} />
      </HStack>
    </Editable>
  )
}
