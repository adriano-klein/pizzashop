import { api } from '@/lib/axios'

export interface GetDayOrdersAmountProps {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountProps>(
    '/metrics/day-orders-amount',
  )
  console.log('Day', response.data)
  return response.data
}
