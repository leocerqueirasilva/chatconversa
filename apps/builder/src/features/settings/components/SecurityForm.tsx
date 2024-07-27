import { FormControl, FormLabel, Stack } from '@chakra-ui/react'
import { Settings } from '@typebot.io/schemas'
import React from 'react'
import { isDefined } from '@typebot.io/lib'
import { MoreInfoTooltip } from '@/components/MoreInfoTooltip'
import { TagsInput } from '@/components/TagsInput'
import { env } from '@typebot.io/env'

type Props = {
  security: Settings['security']
  onUpdate: (security: Settings['security']) => void
}

export const SecurityForm = ({ security, onUpdate }: Props) => {
  const updateItems = (items: string[]) => {
    if (items.length === 0) onUpdate(undefined)
    onUpdate({
      allowedOrigins: items.filter(isDefined),
    })
  }

  return (
    <Stack spacing={6}>
      <FormControl>
        <FormLabel display="flex" flexShrink={0} gap="1" mr="0" mb="4">
          Permitir origins
          <MoreInfoTooltip>
            Permitir execulção de um chat em um site especifico
          </MoreInfoTooltip>
        </FormLabel>
        <TagsInput
          items={security?.allowedOrigins}
          onChange={updateItems}
          placeholder={env.NEXT_PUBLIC_VIEWER_URL[0]}
        />
      </FormControl>
    </Stack>
  )
}
