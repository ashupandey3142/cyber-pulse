import GoogleIcon from '@Assets/icons/googleIcon.svg'
import { fireEvent, render, screen } from '@testing-library/react'
import SocialCard from '.'

describe('SocialCard', () => {
  it('should render the correct content', () => {
    render(<SocialCard title={'GOOGLE SSO'} icon={GoogleIcon} />)
    const socialCard = screen.getByText('GOOGLE SSO')
    expect(socialCard).toBeInTheDocument()
    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('src', GoogleIcon)
    const title = screen.getByText('GOOGLE SSO')
    expect(title).toBeInTheDocument()
  })

  it('should render with default props', () => {
    render(<SocialCard title={'GOOGLE SSO'} icon={GoogleIcon} />)
    const socialCard = screen.getByText('GOOGLE SSO')
    expect(socialCard).toBeInTheDocument()
  })

  it('should call onClick when clicked on card', () => {
    const onClick = jest.fn()
    render(
      <SocialCard title={'GOOGLE SSO'} icon={GoogleIcon} onClick={onClick} />
    )
    const socialCard = screen.getByText('GOOGLE SSO')
    fireEvent.click(socialCard)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
