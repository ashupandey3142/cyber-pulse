import SignIn from '.'
import {
  AUTHSIGNIN,
  CREATE_ONE,
  DASHBOARD,
  EMAIL_ERROR_TEXT,
  FORGOT_PASSWORD,
  KEEP_ME,
  PASSWORD_ERROR_TEXT,
  SIGNIN_EXAMPLE_MAIL,
  SIGN_IN,
} from '@/utils/constant'
import { fireEvent, render } from '@testing-library/react'

describe('SignIn Organism TestCase', () => {
  const authClick = jest.fn()
  const signClick = jest.fn()
  const navClick = jest.fn()
  it('should renders SignIn component', () => {
    const { getByText } = render(
      <SignIn
        onAuthHandleClick={authClick}
        handleSignIn={signClick}
        handleSignUpNavigation={navClick}
      />
    )
    expect(getByText(DASHBOARD)).toBeInTheDocument()
    expect(getByText(SIGN_IN)).toBeInTheDocument()
    expect(getByText('EMAIL')).toBeInTheDocument()
    expect(getByText('PASSWORD')).toBeInTheDocument()
    expect(getByText(FORGOT_PASSWORD)).toBeInTheDocument()
    expect(getByText(AUTHSIGNIN)).toBeInTheDocument()
    expect(getByText(CREATE_ONE)).toBeInTheDocument()
    expect(getByText(KEEP_ME)).toBeInTheDocument()
  })

  it('should initial state is set correctly', () => {
    const { getByPlaceholderText } = render(
      <SignIn
        onAuthHandleClick={authClick}
        handleSignIn={signClick}
        handleSignUpNavigation={navClick}
      />
    )
    expect(getByPlaceholderText(SIGNIN_EXAMPLE_MAIL)).toHaveValue('')
    expect(getByPlaceholderText('Password')).toHaveValue('')
  })

  it('should check email ,password and confirm password validation', () => {
    const { queryByText, getByText, getByPlaceholderText } = render(
      <SignIn
        onAuthHandleClick={authClick}
        handleSignIn={signClick}
        handleSignUpNavigation={navClick}
      />
    )
    fireEvent.change(getByPlaceholderText(SIGNIN_EXAMPLE_MAIL), {
      target: { value: 'invalidemail' },
    })
    expect(getByText(EMAIL_ERROR_TEXT[0])).toBeInTheDocument()
    fireEvent.change(getByPlaceholderText(SIGNIN_EXAMPLE_MAIL), {
      target: { value: '' },
    })
    expect(getByText(EMAIL_ERROR_TEXT[1])).toBeInTheDocument()
    fireEvent.change(getByPlaceholderText(SIGNIN_EXAMPLE_MAIL), {
      target: { value: 'valid@gmail.com' },
    })
    expect(queryByText(EMAIL_ERROR_TEXT[0])).toBeNull()

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'invalidpassword' },
    })
    expect(getByText(PASSWORD_ERROR_TEXT[0])).toBeInTheDocument()

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: '' },
    })
    expect(getByText(PASSWORD_ERROR_TEXT[1])).toBeInTheDocument()

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'Amplifier@123' },
    })
    expect(queryByText(PASSWORD_ERROR_TEXT[0])).toBeNull()
  })

  it('should handle form submission', () => {
    const mockHandleSignIn = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <SignIn
        onAuthHandleClick={authClick}
        handleSignIn={mockHandleSignIn}
        handleSignUpNavigation={navClick}
      />
    )

    fireEvent.change(getByPlaceholderText(SIGNIN_EXAMPLE_MAIL), {
      target: { value: 'valid@email.com' },
    })
    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'validPassword123' },
    })
    fireEvent.click(getByText(SIGN_IN))
    expect(mockHandleSignIn).toHaveBeenCalledTimes(1)
    expect(mockHandleSignIn).toHaveBeenCalledWith({
      email: 'valid@email.com',
      password: 'validPassword123',
    })
  })
  it('should toggles password visibility icon when the create password input is clicked', () => {
    const { getByAltText } = render(
      <SignIn
        onAuthHandleClick={authClick}
        handleSignIn={signClick}
        handleSignUpNavigation={navClick}
      />
    )
    expect(getByAltText('InvisibleIconShowPassword')).toBeInTheDocument()
    fireEvent.click(getByAltText('InvisibleIconShowPassword'))
    expect(getByAltText('VisibleIconShowPassword')).toBeInTheDocument()
    fireEvent.click(getByAltText('VisibleIconShowPassword'))
    expect(getByAltText('InvisibleIconShowPassword')).toBeInTheDocument()
  })
})
