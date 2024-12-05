import { http, HttpResponse } from 'msw'

import { PopularProductsResponse } from '../get-popular-products'

export const getPopularProductMock = http.get<
  never,
  never,
  PopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Product 1', amount: 100 },
    { product: 'Product 2', amount: 200 },
    { product: 'Product 3', amount: 300 },
    { product: 'Product 4', amount: 400 },
  ])
})
