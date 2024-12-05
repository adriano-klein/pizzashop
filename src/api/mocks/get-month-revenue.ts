import { http, HttpResponse } from 'msw'

import { MonthRevenueProps } from '../get-month-revenue'

export const getMonthRevenueAmountMock = http.get<
  never,
  never,
  MonthRevenueProps
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 5000,
    diffFromLastMonth: 10,
  })
})
