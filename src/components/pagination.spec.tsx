import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallBack = vi.fn()
// NOTE: Spies são uma funcionalidade usada em testes unitários para monitorar e
// registrar as interações com funções ou métodos. Eles permitem que você verifique
// se uma função foi chamada, quantas vezes foi chamada, com quais argumentos foi
// chamada, e outras informações relevantes. Spies são particularmente úteis para
// testar funções de callback, métodos de API, e outras interações que ocorrem dentro do código.
describe('Pagination', () => {
  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    // NOTE: para conseguir simular o clique em um botão, precisamos usar outra biblioteca @testing-library/user-event -D
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallBack}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      // NOTE: este é o conteúdo do botão
      name: 'Próxima página',
    })

    const user = userEvent.setup()
    await user.click(nextPageButton)

    expect(onPageChangeCallBack).toHaveBeenCalledWith(1)
  })
})
