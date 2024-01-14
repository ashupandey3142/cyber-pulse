import { render } from '@testing-library/react'
import LogoutPopup from '.'

describe('LogoutPopup Component Tests', () => {
  it('renders button with alt name "Downsider"', () => {
    const logoutClick = jest.fn()
    const handleClick = jest.fn()

    const { getByAltText } = render(
      <LogoutPopup
        userName={'shiva@gmail.com'}
        handleLogoutClick={logoutClick}
        handleClick={handleClick}
      />
    )

    expect(getByAltText('Downsider')).toBeInTheDocument()
  })
})
