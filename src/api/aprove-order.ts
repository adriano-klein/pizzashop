import { api } from '@/lib/axios'

export interface AproveOrderProps {
  orderId: string
}

export async function aproveOrder({ orderId }: AproveOrderProps) {
  await api.patch(`/orders/${orderId}/approve`)
}
