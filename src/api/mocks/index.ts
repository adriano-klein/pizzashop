import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { updateProfileMock } from '../update-profile-mock'
import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDaysOrderAmountMock } from './get-days-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders'
import { getMonthRevenueAmountMock } from './get-month-revenue-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductMock } from './get-popular-products-mock'
import { registerRestaurantsMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantsMock,
  getDaysOrderAmountMock,
  getDaysOrderAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductMock,
  getMonthRevenueAmountMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
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
