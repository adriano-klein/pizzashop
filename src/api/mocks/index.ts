import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-days-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthRevenueAmountMock } from './get-month-revenue'
import { getPopularProductMock } from './get-popular-products-mock'
import { registerRestaurantsMock } from './get-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantsMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}

// NOTE:O Mock Service Worker (MSW) é uma ferramenta utilizada para interceptar
// e simular requisições de rede em aplicações web. Ele permite que você crie mocks
//  de APIs, facilitando o desenvolvimento e os testes de componentes que dependem
//  de dados externos.
