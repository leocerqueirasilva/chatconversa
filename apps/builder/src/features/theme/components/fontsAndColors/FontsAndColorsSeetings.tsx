import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Background, Font, Theme } from '@typebot.io/schemas'
import React from 'react'
import { BackgroundSelector } from './BackgroundSelector'
import { useTranslate } from '@tolgee/react'
import { FontForm } from './FontForm'

type Props = {
  isBrandingEnabled: boolean
  generalTheme: Theme['general']
  onGeneralThemeChange: (general: Theme['general']) => void
  onBrandingChange: (isBrandingEnabled: boolean) => void
}

export const FontsAndColorsSeetings = ({
  generalTheme,
  onGeneralThemeChange,
}: Props) => {
  const { t } = useTranslate()

  const updateFont = (font: Font) =>
    onGeneralThemeChange({ ...generalTheme, font })

  const handleBackgroundChange = (background: Background) =>
    onGeneralThemeChange({ ...generalTheme, background })

  return (
    <Stack spacing={6}>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton justifyContent="space-between">
            {t('theme.sideMenu.global.font')}
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel as={Stack}>
            <FontForm font={generalTheme?.font} onFontChange={updateFont} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton justifyContent="space-between">
            {t('theme.sideMenu.global.background')}
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <BackgroundSelector
              background={generalTheme?.background}
              onBackgroundChange={handleBackgroundChange}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  )
}
