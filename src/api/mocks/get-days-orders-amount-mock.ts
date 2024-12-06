import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountProps } from '../get-day-orders-amount.ts'

export const getDaysOrderAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountProps
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
