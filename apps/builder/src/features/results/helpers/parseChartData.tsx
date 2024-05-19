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

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = date.getMonth().toString()

  return `${day} de ${months[month as keyof typeof months]}`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseChartData = (data?: any[]) => {
  if (!data) return []

  const dateCountMap = new Map()

  data.forEach((item) => {
    if (item.hasStarted) {
      const formattedDate = formatDate(item.createdAt as string)
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
