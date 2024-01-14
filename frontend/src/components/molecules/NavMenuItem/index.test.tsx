import { NAV_MENU_ITEMS_MOCKS } from '@/components/mocks/mockData'
import { render, screen } from '@testing-library/react'
import NavMenuItem from '.'

describe('NavMenuItem', () => {
  it('should render the component', () => {
    render(<NavMenuItem items={NAV_MENU_ITEMS_MOCKS} />)
    expect(screen.getByText('Identity')).toBeInTheDocument()
  })
})
