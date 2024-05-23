import { TimeFilter } from '@/features/analytics/constants'

const months = {
  '1': 'Janeiro',
  '2': 'Fevereiro',
  '3': 'Março',
  '4': 'Abril',
  '5': 'Maio',
  '6': 'Junho',
  '7': 'Julho',
  '8': 'Agosto',
  '9': 'Setembro',
  '10': 'Outubro',
  '11': 'Novembro',
  '12': 'Dezembro',
}

function formatDate(dateString: Date) {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = date.getMonth().toString()

  return `${day} de ${months[month as keyof typeof months]}`
}

const createLastDaysObject = (numberOfDays: number) => {
  const result = new Map()

  for (let i = 0; i < numberOfDays; i++) {
    const d = new Date()

    d.setDate(d.getDate() - i)

    result.set(formatDate(d), 0)
  }

  return result
}

const getNumberOfDays = (timeFilter: TimeFilter) => {
  const today = new Date()

  switch (timeFilter) {
    case 'today':
      return 2

    case 'last7Days':
      return 7

    case 'last30Days':
      return 30

    case 'monthToDate': {
      // From the start of the month to today
      const startOfMonth = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1
      )

      return (
        Math.floor(
          (today.getTime() - startOfMonth.getTime()) / (1000 * 60 * 60 * 24)
        ) + 1
      )
    }

    case 'lastMonth': {
      // Full previous calendar month
      const lastMonthStart = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        1
      )
      const lastMonthEnd = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        0
      )
      return (
        Math.floor(
          (lastMonthEnd.getTime() - lastMonthStart.getTime()) /
            (1000 * 60 * 60 * 24)
        ) + 1
      )
    }

    case 'yearToDate': {
      return 1
    }

    case 'allTime': {
      return 1
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseChartData = (data: any[], timeFilter: TimeFilter) => {
  const dateCountMap = createLastDaysObject(getNumberOfDays(timeFilter))

  data.forEach((item) => {
    if (item.hasStarted) {
      const formattedDate = formatDate(item.createdAt)

      dateCountMap.set(
        formattedDate,
        (dateCountMap.get(formattedDate) || 0) + 1
      )
    }
  })

  const outputArray = Array.from(dateCountMap, ([createdAt, hasStarted]) => ({
    createdAt,
    hasStarted,
  }))

  return outputArray
}
