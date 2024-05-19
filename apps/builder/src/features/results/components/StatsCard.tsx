import { useTranslate } from '@tolgee/react'
import {
  GridProps,
  Heading,
  Skeleton,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
} from '@chakra-ui/react'
import { Stats } from '@typebot.io/schemas'
import React from 'react'

export const StatsCard = ({
  stats,
}: {
  stats?: Stats
} & GridProps) => {
  const { t } = useTranslate()

  return (
    <VStack alignItems="start" h="fit-content">
      <Heading fontSize="xl" fontWeight="bold" as="h1" mb="4">
        {t('results.statistics.general')}
      </Heading>
      <Stat bgColor="transparent">
        <StatLabel fontSize="lg" mb="2">
          {t('results.statistics.contacts')}
        </StatLabel>
        {stats ? (
          <StatNumber fontSize="4xl">{stats.totalStarts}</StatNumber>
        ) : (
          <Skeleton w="50%" h="30px" mt="2" />
        )}
      </Stat>
      <Stat bgColor="transparent">
        <StatLabel fontSize="lg" mb="2">
          {t('results.statistics.messages')}
        </StatLabel>
        {stats ? (
          <StatNumber fontSize="4xl">{stats.totalCompleted}</StatNumber>
        ) : (
          <Skeleton w="50%" h="30px" mt="2" />
        )}
      </Stat>
    </VStack>
  )
}
