import { render, screen } from '@testing-library/react'
import ToolsCollection from '.'

describe('testing ToolsCollection component', () => {
  it('should render correctly', () => {
    render(<ToolsCollection />)
    expect(
      screen.getByText('HELPING YOU INTEGRATE MORE SECURITY TOOLS AT AMPLIFIER')
    ).toBeInTheDocument()
  })

  it('should show configured identity tool when isConfigured is true', () => {
    render(<ToolsCollection isConfigured={true} />)
    expect(screen.getByText('Google SSO')).toBeInTheDocument()
  })
})
