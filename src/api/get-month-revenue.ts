import { api } from '@/lib/axios'

export interface MonthRevenueProps {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<MonthRevenueProps>('/metrics/month-receipt')
  return response.data
}
