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
  Button,
  Text,
  Tag,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { TypebotNotFoundPage } from '@/features/editor/components/TypebotNotFoundPage'
import { trpc } from '@/lib/trpc'
import {
  TimeFilter,
  defaultTimeFilter,
  timeFilterLabels,
  timeFilterValues,
} from '@/features/analytics/constants'
import { DropdownList } from '@/components/DropdownList'
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useTranslate } from '@tolgee/react'
import { StatsCard } from './StatsCard'
import { parseChartData } from '../helpers/parseChartData'
import Link from 'next/link'

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

export const ResultsPage = () => {
  const router = useRouter()
  const { typebot, publishedTypebot, is404 } = useTypebot()
  const isAnalytics = useMemo(
    () => router.pathname.endsWith('analytics'),
    [router.pathname]
  )
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
          pos="absolute"
          zIndex={2}
          w="full"
          justifyContent="center"
          h="60px"
          display={['none', 'flex']}
        >
          <HStack maxW="1600px" w="full" px="4">
            <Button
              as={Link}
              colorScheme={!isAnalytics ? 'blue' : 'gray'}
              variant={!isAnalytics ? 'outline' : 'ghost'}
              size="sm"
              href={`/typebots/${typebot?.id}/results`}
            >
              <Text>Submissions</Text>
              {(stats?.totalStarts ?? 0) > 0 && (
                <Tag size="sm" colorScheme="blue" ml="1">
                  {stats?.totalStarts}
                </Tag>
              )}
            </Button>
          </HStack>
        </Flex>
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
            <Chart
              timeFilter={timeFilter}
              setTimeFilter={setTimeFilter}
              typebotId={publishedTypebot?.typebotId as string}
            />

            <StatsCard stats={stats} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

const Chart = ({
  timeFilter,
  setTimeFilter,
  typebotId,
}: {
  timeFilter: TimeFilter
  setTimeFilter: (val: TimeFilter) => void
  typebotId: string
}) => {
  const { t } = useTranslate()

  const { data } = trpc.results.getResults.useQuery({
    typebotId: typebotId as string,
    timeFilter,
    timeZone,
  })

  const chartData = parseChartData(data?.results || [], timeFilter)

  return (
    <Box
      w="70%"
      bg={useColorModeValue('gray.100', 'gray.800')}
      p={10}
      borderRadius="lg"
      border="1px"
      borderColor={useColorModeValue('gray.300', 'gray.600')}
    >
      <HStack justifyContent="space-between" mb="10">
        <Heading fontSize="2xl" as="h1">
          {t('results.graph.label')}
        </Heading>
        <HStack>
          <DropdownList
            items={Object.entries(timeFilterLabels).map(([value, label]) => ({
              label,
              value,
            }))}
            currentItem={timeFilter}
            onItemSelect={(val) => setTimeFilter(val as TimeFilter)}
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
              bottom: 80,
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
