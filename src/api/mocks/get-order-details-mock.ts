import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123456789',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 4400,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1200,
        product: { name: 'Pizza Pepperoni' },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 1000,
        product: { name: 'Pizza Marguerita' },
        quantity: 2,
      },
    ],
  })
})
