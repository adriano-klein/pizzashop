import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { registerRestaurantsMock } from './get-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock, registerRestaurantsMock)

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
