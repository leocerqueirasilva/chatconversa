export const timeFilterValues = [
  'today',
  'last7Days',
  'last30Days',
  'monthToDate',
  'lastMonth',
  'yearToDate',
  'allTime',
] as const

export const timeFilterLabels: Record<
  (typeof timeFilterValues)[number],
  string
> = {
  today: 'Today',
  last7Days: 'Last 7 days',
  last30Days: 'Last 30 days',
  monthToDate: 'Month to date',
  lastMonth: 'Last month',
  yearToDate: 'Year to date',
  allTime: 'All time',
}

export const periodFilterValues = [
  'newContacts',
  'totalConversations',
  'openConversations',
  'conversationsEnded',
  'hangTags',
]

export const periodFilterLabels: Record<
  (typeof periodFilterValues)[number],
  string
> = {
  newContacts: 'Novos contatos',
  totalConversations: 'Total de conversas',
  openConversations: 'Conversas abertas',
  conversationsEnded: 'Conversas encerradas',
  hangTags: 'Etiquetas',
}

export const defaultTimeFilter = 'last7Days' as const
export const defaultPeriodFilter = 'newContacts' as const
