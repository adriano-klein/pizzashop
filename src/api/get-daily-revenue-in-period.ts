import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type DailyRevenueInPeriodProps = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<DailyRevenueInPeriodProps>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from: from?.toISOString(),
        to: to?.toISOString(),
      },
    },
  )
  return response.data
}
