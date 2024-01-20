import { ADD_INTEGRATION_DATA } from '@/utils/constant'
import { fireEvent, render, screen } from '@testing-library/react'
import AddIntegrationModal from '.'

describe('AddIntegrationModal', () => {
  it('should render with default props without crashing', () => {
    const backButton = jest.fn()
    const crossButton = jest.fn()
    render(
      <AddIntegrationModal
        open={true}
        onBackIconClick={backButton}
        onCrossIconClick={crossButton}
      />
    )
    fireEvent.click(screen.getByAltText('back-icon'))
    expect(backButton).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByAltText('cross-icon'))
    expect(crossButton).toHaveBeenCalledTimes(1)
  })

  it('should return with slack input when integrate now button is clicked', () => {
    const backButton = jest.fn()
    const crossButton = jest.fn()
    const integrateNowButton = jest.fn()
    render(
      <AddIntegrationModal
        open={true}
        onBackIconClick={backButton}
        onCrossIconClick={crossButton}
        onAddIntegrationClick={integrateNowButton}
      />
    )
    fireEvent.click(screen.getByRole('button', { name: 'ADD INTEGRATION' }))
    const integrateNowButtonElement = screen.getByRole('button', {
      name: 'INTEGRATE NOW',
    })
    expect(integrateNowButtonElement).toBeInTheDocument()
    expect(integrateNowButtonElement).toBeDisabled()
    expect(screen.getByText('ENTER CREDENTIALS')).toBeInTheDocument()
    fireEvent.change(
      screen.getByPlaceholderText(ADD_INTEGRATION_DATA.BASE_URL_PLACEHOLDER),
      {
        target: { value: 'https://slack.com/api' },
      }
    )

    fireEvent.change(
      screen.getByPlaceholderText(ADD_INTEGRATION_DATA.CLIENT_ID_PLACEHOLDER),
      {
        target: { value: 'abcd' },
      }
    )

    fireEvent.change(
      screen.getByPlaceholderText(
        ADD_INTEGRATION_DATA.CLIENT_SECRET_PLACEHOLDER
      ),
      {
        target: { value: 'abcd' },
      }
    )
    expect(integrateNowButtonElement).not.toBeDisabled()
    fireEvent.click(integrateNowButtonElement)
    expect(integrateNowButton).toHaveBeenCalledTimes(1)
    expect(integrateNowButton).toHaveBeenCalledWith({
      baseUrl: 'https://slack.com/api',
      clientId: 'abcd',
      clientSecret: 'abcd',
    })
  })

  it('should toggle password visibility when eye icon is clicked', () => {
    render(<AddIntegrationModal open={true} />)
    fireEvent.click(screen.getByRole('button', { name: 'ADD INTEGRATION' }))
    const baseUrlInput = screen.getByPlaceholderText(
      ADD_INTEGRATION_DATA.BASE_URL_PLACEHOLDER
    )
    expect(baseUrlInput).toHaveAttribute('type', 'password')
    fireEvent.click(screen.getAllByAltText('close-eye')[0])
    expect(baseUrlInput).toHaveAttribute('type', 'text')

    const clientIdInput = screen.getByPlaceholderText(
      ADD_INTEGRATION_DATA.CLIENT_ID_PLACEHOLDER
    )
    expect(clientIdInput).toHaveAttribute('type', 'password')
    fireEvent.click(screen.getAllByAltText('close-eye')[1])
  })
})
