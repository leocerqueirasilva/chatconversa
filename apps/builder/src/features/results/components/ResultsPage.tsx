import { Seo } from '@/components/Seo'
import { TypebotHeader } from '@/features/editor/components/TypebotHeader'
import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import {
  Flex,
  HStack,
  Text,
  Box,
  VStack,
  Heading,
  Input,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { TypebotNotFoundPage } from '@/features/editor/components/TypebotNotFoundPage'
import {
  periodFilterLabels,
  defaultPeriodFilter,
} from '@/features/analytics/constants'
import {
  AreaChart,
  Area,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useTranslate } from '@tolgee/react'
import { ChevronRightIcon } from '@/components/icons'
import { DropdownList } from '@/components/DropdownList'

export const ResultsPage = () => {
  const { t } = useTranslate()
  const router = useRouter()
  const { typebot, is404 } = useTypebot()

  const [timeFilter, setTimeFilter] =
    useState<(typeof periodFilterLabels)[number]>(defaultPeriodFilter)

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  if (is404) return <TypebotNotFoundPage />
  return (
    <Flex overflow="hidden" h="100vh" flexDir="column">
      <Seo
        title={
          router.pathname.endsWith('analytics')
            ? typebot?.name
              ? `${typebot.name} | Analytics`
              : 'Analytics'
            : typebot?.name
            ? `${typebot.name} | Results`
            : 'Results'
        }
      />
      <TypebotHeader />

      <Flex w="full" h="500px" gap={10} maxW="1600px" px="4" mx="auto" mt={20}>
        <Box
          w="70%"
          bg="gray.800"
          p={10}
          borderRadius="lg"
          border="1px"
          borderColor="gray.600"
        >
          <HStack justifyContent="space-between">
            <Heading fontSize="2xl" as="h1">
              {t('results.graph.label')}
            </Heading>
            <HStack>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              <ChevronRightIcon />
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              <DropdownList
                items={Object.entries(periodFilterLabels).map(
                  ([value, label]) => ({
                    label,
                    value,
                  })
                )}
                currentItem={timeFilter}
                onItemSelect={(val) =>
                  setTimeFilter(val as (typeof periodFilterLabels)[number])
                }
              />
            </HStack>
          </HStack>

          <Box w="full" h="full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#944CDC"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        <Box
          w="30%"
          bg="gray.800"
          p={10}
          borderRadius="lg"
          border="1px"
          borderColor="gray.600"
          h="fit-content"
        >
          <VStack alignItems="start" h="fit-content">
            <Heading fontSize="2xl" as="h1">
              {t('results.statistics.general')}
            </Heading>
            <Text mt={4}>{t('results.statistics.contacts')}</Text>
            <Heading fontSize="4xl" as="h1">
              249
            </Heading>
            <Text mt={4}>{t('results.statistics.messages')}</Text>
            <Heading fontSize="4xl" as="h1">
              473
            </Heading>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  )
}
