import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

// NOTE: o describe serve para categorizar os testes, o it serve para descrever o que o teste faz
describe('Order Status', () => {
  it('should display the right text order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)
    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)
    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)
    const statusText = wrapper.getByText('Processando')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)
    const statusText = wrapper.getByText('Entregando')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)
    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
