import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the active link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            // NOTE: a rota ativa é salva em memória
            // Initial entries é um array de strings que representa a rota atual
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )
    expect(wrapper.getByText('Home').dataset.current).toBe('false')
    expect(wrapper.getByText('About').dataset.current).toBe('true')
  })
})
