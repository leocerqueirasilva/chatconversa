import { Seo } from '@/components/Seo'
import { TypebotHeader } from '@/features/editor/components/TypebotHeader'
import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import { useToast } from '@/hooks/useToast'
import {
  Flex,
  HStack,
  useColorModeValue,
  Box,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { TypebotNotFoundPage } from '@/features/editor/components/TypebotNotFoundPage'
import { trpc } from '@/lib/trpc'
import {
  defaultTimeFilter,
  timeFilterLabels,
  timeFilterValues,
} from '@/features/analytics/constants'
import { DropdownList } from '@/components/DropdownList'
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useTranslate } from '@tolgee/react'
import { StatsCard } from './StatsCard'
import { parseChartData } from '../helpers/parseChartData'

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

export const ResultsPage = () => {
  const { t } = useTranslate()
  const router = useRouter()
  const { typebot, publishedTypebot, is404 } = useTypebot()

  const bgColor = useColorModeValue(
    router.pathname.endsWith('analytics') ? '#f4f5f8' : 'white',
    router.pathname.endsWith('analytics') ? 'gray.850' : 'gray.900'
  )
  const [timeFilter, setTimeFilter] =
    useState<(typeof timeFilterValues)[number]>(defaultTimeFilter)

  const { showToast } = useToast()

  const {
    data: { stats } = {},
    // refetch
  } = trpc.analytics.getStats.useQuery(
    {
      typebotId: publishedTypebot?.typebotId as string,
      timeFilter,
      timeZone,
    },
    {
      enabled: !!publishedTypebot,
      onError: (err) => showToast({ description: err.message }),
    }
  )

  const { data } = trpc.results.getResults.useQuery({
    typebotId: publishedTypebot?.typebotId as string,
    timeFilter,
    timeZone,
  })

  const chartData = parseChartData(data?.results)

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
      <Flex h="full" w="full" bgColor={bgColor}>
        <Flex
          pt={['10px', '60px']}
          w="full"
          justify="center"
          h="550px"
          gap={10}
          maxW="1600px"
          px="4"
          mx="auto"
        >
          <Box
            w="70%"
            bg="gray.800"
            p={10}
            borderRadius="lg"
            border="1px"
            borderColor="gray.600"
          >
            <HStack justifyContent="space-between" mb="10">
              <Heading fontSize="2xl" as="h1">
                {t('results.graph.label')}
              </Heading>
              <HStack>
                <DropdownList
                  items={Object.entries(timeFilterLabels).map(
                    ([value, label]) => ({
                      label,
                      value,
                    })
                  )}
                  currentItem={timeFilter}
                  onItemSelect={(val) =>
                    setTimeFilter(val as (typeof timeFilterValues)[number])
                  }
                />
              </HStack>
            </HStack>

            <Box w="full" h="full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={chartData.reverse()}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="blueShade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5800AF" stopOpacity={0.5} />
                      <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip payload={chartData} />} />
                  <Area
                    type="monotone"
                    dataKey="hasStarted"
                    stroke="#944CDC"
                    strokeWidth={2}
                    fill="url(#blueShade)"
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
            <StatsCard stats={stats} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0]?.payload

    return (
      <VStack alignItems="start">
        <h4>{item.createdAt}</h4>
        <Heading as="h1" fontSize="4xl" fontWeight="bold">
          {item.hasStarted} Contatos
        </Heading>
      </VStack>
    )
  }
}
