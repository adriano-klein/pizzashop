import { api } from '@/lib/axios'

export interface GetMonthOrdersAmountProps {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const responde = await api.get<GetMonthOrdersAmountProps>(
    '/metrics/month-orders-amount',
  )
  return responde.data
}
