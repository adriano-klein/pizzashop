import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant'", () => {
  return HttpResponse.json({
    managerId: 'custom-manager-id',
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'lkjsdfkadjfhgkldsfjhg',
    createdAt: new Date(),
    updatedAt: null,
  })
})
