import { http, HttpResponse } from 'msw'

import { GetMonthCancelledOrdersAmountProps } from '../get-canceled-month-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCancelledOrdersAmountProps
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: -5,
  })
})
