import { api } from '@/lib/axios'

interface GetMonthCancelledOrdersAmountProps {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCancelledOrdersAmount() {
  const response = await api.get<GetMonthCancelledOrdersAmountProps>(
    '/metrics/month-canceled-orders-amount',
  )
  return response.data
}
