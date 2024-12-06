import { http, HttpResponse } from 'msw'

import { PopularProductsResponse } from '../get-popular-products'

export const getPopularProductMock = http.get<
  never,
  never,
  PopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 1', amount: 100 },
    { product: 'Pizza 2', amount: 200 },
    { product: 'Pizza 3', amount: 300 },
    { product: 'Pizza 4', amount: 400 },
  ])
})
