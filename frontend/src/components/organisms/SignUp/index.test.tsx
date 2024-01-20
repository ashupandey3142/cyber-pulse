import SignUp from '.'
import {
  ALREADY_ACCOUNT,
  AUTHSIGNIN,
  CONFIRM_PASSWORD,
  CONFIRM_PASSWORD_ERROR_TEXT,
  CREATE_ACCOUNT,
  CREATE_PASSWORD,
  EMAIL_ERROR_TEXT,
  EXAMPLE_MAIL,
  PASSWORD_ERROR_TEXT,
  REPEAT_PASSWORD_PLACEHOLDER,
  SIGN_UP,
  SIZE_CHARACTER,
} from '@/utils/constant'
import { fireEvent, render } from '@testing-library/react'

describe('SignUp Organism TestCase', () => {
  const authClick = jest.fn()
  const signClick = jest.fn()
  const navClick = jest.fn()
  it('should renders SignUp component', () => {
    const { getByText } = render(
      <SignUp
        onAuthHandleClick={authClick}
        handleSignUp={signClick}
        handleSignInNavigation={navClick}
      />
    )
    expect(getByText(CREATE_ACCOUNT)).toBeInTheDocument()
    expect(getByText(SIGN_UP)).toBeInTheDocument()
    expect(getByText(CREATE_ACCOUNT)).toBeInTheDocument()
    expect(getByText(CREATE_PASSWORD)).toBeInTheDocument()
    expect(getByText(CONFIRM_PASSWORD)).toBeInTheDocument()
    expect(getByText(CREATE_ACCOUNT)).toBeInTheDocument()
    expect(getByText(AUTHSIGNIN)).toBeInTheDocument()
    expect(getByText(ALREADY_ACCOUNT)).toBeInTheDocument()
  })

  it('should initial state is set correctly', () => {
    const { getByPlaceholderText } = render(
      <SignUp
        onAuthHandleClick={authClick}
        handleSignUp={signClick}
        handleSignInNavigation={navClick}
      />
    )
    expect(getByPlaceholderText(EXAMPLE_MAIL)).toHaveValue('')
    expect(getByPlaceholderText(SIZE_CHARACTER)).toHaveValue('')
    expect(getByPlaceholderText(REPEAT_PASSWORD_PLACEHOLDER)).toHaveValue('')
  })
  test('should check email ,password and confirm password validation', () => {
    const { queryByText, getByText, getByPlaceholderText } = render(
      <SignUp
        onAuthHandleClick={authClick}
        handleSignUp={signClick}
        handleSignInNavigation={navClick}
      />
    )
    fireEvent.change(getByPlaceholderText(EXAMPLE_MAIL), {
      target: { value: 'invalidemail' },
    })
    expect(getByText(EMAIL_ERROR_TEXT[0])).toBeInTheDocument()
    fireEvent.change(getByPlaceholderText(EXAMPLE_MAIL), {
      target: { value: '' },
    })
    expect(getByText(EMAIL_ERROR_TEXT[1])).toBeInTheDocument()
    fireEvent.change(getByPlaceholderText(EXAMPLE_MAIL), {
      target: { value: 'valid@gmail.com' },
    })
    expect(queryByText(EMAIL_ERROR_TEXT[0])).toBeNull()

    fireEvent.change(getByPlaceholderText(SIZE_CHARACTER), {
      target: { value: 'invalidpassword' },
    })
    expect(getByText(PASSWORD_ERROR_TEXT[0])).toBeInTheDocument()

    fireEvent.change(getByPlaceholderText(SIZE_CHARACTER), {
      target: { value: '' },
    })
    expect(getByText(PASSWORD_ERROR_TEXT[1])).toBeInTheDocument()

    fireEvent.change(getByPlaceholderText(SIZE_CHARACTER), {
      target: { value: 'Amplifier@123' },
    })
    expect(queryByText(PASSWORD_ERROR_TEXT[0])).toBeNull()

    fireEvent.change(getByPlaceholderText(REPEAT_PASSWORD_PLACEHOLDER), {
      target: { value: 'invalidconfirmpassword' },
    })
    expect(getByText(CONFIRM_PASSWORD_ERROR_TEXT[0])).toBeInTheDocument()

    fireEvent.change(getByPlaceholderText(REPEAT_PASSWORD_PLACEHOLDER), {
      target: { value: '' },
    })
    expect(getByText(CONFIRM_PASSWORD_ERROR_TEXT[1])).toBeInTheDocument()
    fireEvent.change(getByPlaceholderText(REPEAT_PASSWORD_PLACEHOLDER), {
      target: { value: 'Valdapass@123' },
    })
    expect(queryByText(CONFIRM_PASSWORD_ERROR_TEXT[0])).toBeNull()
  })

  it('should handle form submission', () => {
    const mockHandleSignUp = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <SignUp
        onAuthHandleClick={authClick}
        handleSignUp={mockHandleSignUp}
        handleSignInNavigation={navClick}
      />
    )

    fireEvent.change(getByPlaceholderText(EXAMPLE_MAIL), {
      target: { value: 'valid@gmail.com' },
    })
    fireEvent.change(getByPlaceholderText(SIZE_CHARACTER), {
      target: { value: 'validPassword123@' },
    })
    fireEvent.change(getByPlaceholderText(REPEAT_PASSWORD_PLACEHOLDER), {
      target: { value: 'validPassword123@' },
    })
    fireEvent.click(getByText(CREATE_ACCOUNT))
    expect(mockHandleSignUp).toHaveBeenCalledTimes(1)
    expect(mockHandleSignUp).toHaveBeenCalledWith({
      email: 'valid@gmail.com',
      password: 'validPassword123@',
      confirmPassword: 'validPassword123@',
    })
  })
  it('should toggles password visibility icon when the create password input is clicked', () => {
    const { getByAltText } = render(
      <SignUp
        onAuthHandleClick={authClick}
        handleSignUp={signClick}
        handleSignInNavigation={navClick}
      />
    )
    expect(getByAltText('InvisibleIconShowPassword')).toBeInTheDocument()
    fireEvent.click(getByAltText('InvisibleIconShowPassword'))
    expect(getByAltText('VisibleIconShowPassword')).toBeInTheDocument()
    fireEvent.click(getByAltText('VisibleIconShowPassword'))
    expect(getByAltText('InvisibleIconShowPassword')).toBeInTheDocument()
  })

  it('should toggles password visibility icon when the confirm password input is clicked', () => {
    const { getByAltText } = render(
      <SignUp
        onAuthHandleClick={authClick}
        handleSignUp={signClick}
        handleSignInNavigation={navClick}
      />
    )
    expect(getByAltText('InvisibleIconShowConfirmPassword')).toBeInTheDocument()
    fireEvent.click(getByAltText('InvisibleIconShowConfirmPassword'))
    expect(getByAltText('VisibleIconShowConfirmPassword')).toBeInTheDocument()
    fireEvent.click(getByAltText('VisibleIconShowConfirmPassword'))
    expect(getByAltText('InvisibleIconShowConfirmPassword')).toBeInTheDocument()
  })
})
