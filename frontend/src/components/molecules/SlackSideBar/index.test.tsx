import { SLACK_SIGN_IN_LABEL } from '@/utils/constant'
import { render, screen } from '@testing-library/react'
import SlackSideBar from '.'

describe('SlackSideBar', () => {
  it('should render the component', () => {
    render(<SlackSideBar />)
    expect(screen.getByText(SLACK_SIGN_IN_LABEL)).toBeInTheDocument()
    expect(screen.getByText('Terms of Use')).toBeInTheDocument()
    expect(screen.getByText('Privacy statement')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
  })
})
