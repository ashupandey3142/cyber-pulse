import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToolIntegrationModal from '.'
describe('testing tool integration modal', () => {
  it('should render tool integration modal', () => {
    render(<ToolIntegrationModal open={true} />)
    screen.getByText('IDENTITY TOOL INTEGRATION')
    screen.getByText('Google SSO')
  })

  it('should show navItemList when with isIntegrated prop', () => {
    render(<ToolIntegrationModal open={true} isIntegrated={true} />)
    expect(screen.getByText('Training')).toBeInTheDocument()
  })

  it('should show searched tool when search query is passed', () => {
    render(<ToolIntegrationModal open={true} isIntegrated={true} />)
    const searchInput = screen.getByTestId('custom-textfield')
    expect(searchInput).toBeInTheDocument()
    expect(screen.getByText('Google SSO')).toBeInTheDocument()
    userEvent.type(searchInput, 'au')
    expect(screen.getByText('Auth 0')).toBeInTheDocument()
  })
})
