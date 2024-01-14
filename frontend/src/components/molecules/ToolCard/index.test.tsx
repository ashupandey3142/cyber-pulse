import ProfileIcon from '@Assets/icons/profile.svg'
import { fireEvent, render, screen } from '@testing-library/react'
import ToolCard from '.'

describe('ToolCard', () => {
  it('should render without crashing with default props', () => {
    render(<ToolCard icon={ProfileIcon} title={'IDENTITY TOOLS'} />)
    const toolCard = screen.getByText('IDENTITY TOOLS')
    expect(toolCard).toBeInTheDocument()
  })

  it('should call onClick when clicked on card', () => {
    const AddIntegrationButton = jest.fn()
    render(
      <ToolCard
        icon={ProfileIcon}
        title={'IDENTITY TOOLS'}
        onClick={AddIntegrationButton}
      />
    )
    const toolCard = screen.getByText('IDENTITY TOOLS')
    expect(toolCard).toBeInTheDocument()
    fireEvent.click(toolCard)
    expect(AddIntegrationButton).toHaveBeenCalledTimes(1)
  })
})
