import { fireEvent, render } from '@testing-library/react'
import SideBar from '.'
import { AMPLIFIER, SIDEBAR } from '@/utils/constant'
import userEvent from '@testing-library/user-event'

describe('SideBar Component testcase', () => {
  it('renders without crashing', () => {
    const handleNavClick = jest.fn()
    const { getByText } = render(<SideBar handleNavClick={handleNavClick} />)
    expect(getByText(AMPLIFIER)).toBeInTheDocument()
    expect(getByText(SIDEBAR[0].tabName)).toBeInTheDocument()
    expect(getByText(SIDEBAR[1].tabName)).toBeInTheDocument()
    expect(getByText(SIDEBAR[2].tabName)).toBeInTheDocument()
    expect(getByText(SIDEBAR[3].tabName)).toBeInTheDocument()
  })

  it('should handle items click', () => {
    const handleNavClick = jest.fn()
    const { getByText } = render(<SideBar handleNavClick={handleNavClick} />)

    fireEvent.click(getByText(SIDEBAR[0].tabName))
    expect(handleNavClick).toHaveBeenCalledTimes(1)
  })

  it('should open and close the logout popup', async () => {
    const handleNavClick = jest.fn()
    const { getByAltText, queryByText, queryByAltText } = render(
      <SideBar handleNavClick={handleNavClick} />
    )

    fireEvent.click(getByAltText('Downsider'))
    expect(queryByText('Sign Out')).toBeInTheDocument()

    userEvent.keyboard('{esc}')
    expect(queryByAltText('Sign Out')).toBeNull()
  })
})
