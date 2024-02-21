import {
  CONFIRM_PASSWORD_ERROR_TEXT,
  EMAIL_ERROR_TEXT,
  FORGOT_PASSWORD_LABEL,
  PASSWORD_ERROR_TEXT,
  REMEMBER_PASSWORD,
  RESET_LINK,
  RESET_PASSWORD,
  SIGN,
  MUST_BE,
  EXAM_EMAIL,
  REPEAT_PASS_PLACEHOLDER,
  RESET_PASSWORD_LABEL,
  CREATE_PASSWORD_LABEL,
} from '@/utils/constant'
import ForgotPassword from '.'
import { fireEvent, render } from '@testing-library/react'

describe('ForgotPassword Organism TestCase', () => {
  const forgotClick = jest.fn()
  const resetClick = jest.fn()
  const navClick = jest.fn()
  it('should renders ForgotPassword component', () => {
    const { getByText, getByPlaceholderText } = render(
      <ForgotPassword
        open={false}
        handleResetPassword={resetClick}
        handleForgotPassword={forgotClick}
        handleSignInNavigation={navClick}
      />
    )
    expect(getByText(FORGOT_PASSWORD_LABEL)).toBeInTheDocument()
    expect(getByText('EMAIL')).toBeInTheDocument()
    expect(getByPlaceholderText(EXAM_EMAIL)).toBeInTheDocument()
    expect(getByText(RESET_LINK)).toBeInTheDocument()
    expect(getByText(SIGN)).toBeInTheDocument()
    expect(getByText(REMEMBER_PASSWORD)).toBeInTheDocument()
  })

  it('should render Reset Password screen ', () => {
    const { getByPlaceholderText, getByText, getAllByText } = render(
      <ForgotPassword
        open={true}
        handleResetPassword={resetClick}
        handleForgotPassword={forgotClick}
        handleSignInNavigation={navClick}
      />
    )
    expect(getAllByText(RESET_PASSWORD)).not.toBeNull
    expect(getByText(CREATE_PASSWORD_LABEL)).toBeInTheDocument()
    expect(getByText('CONFIRM PASSWORD')).toBeInTheDocument()
    expect(getByPlaceholderText(MUST_BE)).toBeInTheDocument()
    expect(getByPlaceholderText(REPEAT_PASS_PLACEHOLDER)).toBeInTheDocument()
    expect(getByText(SIGN)).toBeInTheDocument()
    expect(getByText(REMEMBER_PASSWORD)).toBeInTheDocument()
  })

  it('should check email validation in forgot password', () => {
    const { queryByText, getByText, getByPlaceholderText } = render(
      <ForgotPassword
        open={false}
        handleResetPassword={resetClick}
        handleForgotPassword={forgotClick}
        handleSignInNavigation={navClick}
      />
    )
    fireEvent.change(getByPlaceholderText(EXAM_EMAIL), {
      target: { value: 'invalidemail' },
    })
    expect(getByText(EMAIL_ERROR_TEXT[0])).toBeInTheDocument()
    fireEvent.change(getByPlaceholderText(EXAM_EMAIL), {
      target: { value: '' },
    })
    expect(queryByText(EMAIL_ERROR_TEXT[1])).toBeInTheDocument()
    fireEvent.change(getByPlaceholderText(EXAM_EMAIL), {
      target: { value: 'Somanth@123' },
    })
    expect(queryByText(EMAIL_ERROR_TEXT[1])).toBeNull()
  })

  it('should check password and confirm password validation in repeat password', () => {
    const { queryByText, getByText, getByPlaceholderText } = render(
      <ForgotPassword
        open={true}
        handleResetPassword={resetClick}
        handleForgotPassword={forgotClick}
        handleSignInNavigation={navClick}
      />
    )

    fireEvent.change(getByPlaceholderText(MUST_BE), {
      target: { value: 'invalidpassword' },
    })
    expect(getByText(PASSWORD_ERROR_TEXT[0])).toBeInTheDocument()

    fireEvent.change(getByPlaceholderText(MUST_BE), {
      target: { value: '' },
    })
    expect(getByText(PASSWORD_ERROR_TEXT[1])).toBeInTheDocument()

    fireEvent.change(getByPlaceholderText(MUST_BE), {
      target: { value: 'Amplifier@123' },
    })
    expect(queryByText(PASSWORD_ERROR_TEXT[0])).toBeNull()

    fireEvent.change(getByPlaceholderText(REPEAT_PASS_PLACEHOLDER), {
      target: { value: 'invalidconfirmpassword' },
    })
    expect(getByText(CONFIRM_PASSWORD_ERROR_TEXT[0])).toBeInTheDocument()

    fireEvent.change(getByPlaceholderText(REPEAT_PASS_PLACEHOLDER), {
      target: { value: '' },
    })
    expect(getByText(CONFIRM_PASSWORD_ERROR_TEXT[1])).toBeInTheDocument()
    fireEvent.change(getByPlaceholderText(REPEAT_PASS_PLACEHOLDER), {
      target: { value: 'Valdapass@123' },
    })
    expect(queryByText(CONFIRM_PASSWORD_ERROR_TEXT[0])).toBeNull()
  })

  it('should handle and get email form submission forgot password', () => {
    const mockHandleForgotPassword = jest.fn()
    const { getByText, getByPlaceholderText } = render(
      <ForgotPassword
        open={false}
        handleResetPassword={resetClick}
        handleForgotPassword={mockHandleForgotPassword}
        handleSignInNavigation={navClick}
      />
    )
    fireEvent.change(getByPlaceholderText(EXAM_EMAIL), {
      target: { value: 'valid@email.com' },
    })
    fireEvent.click(getByText(RESET_LINK))
    expect(mockHandleForgotPassword).toHaveBeenCalledTimes(1)
    expect(mockHandleForgotPassword).toHaveBeenCalledWith('valid@email.com')
  })

  it('should handle get response  form submission of a reset password', () => {
    const mockHandleResetPassword = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <ForgotPassword
        open={true}
        handleResetPassword={mockHandleResetPassword}
        handleForgotPassword={resetClick}
        handleSignInNavigation={navClick}
      />
    )

    fireEvent.change(getByPlaceholderText(MUST_BE), {
      target: { value: 'Password@123' },
    })
    fireEvent.change(getByPlaceholderText(REPEAT_PASS_PLACEHOLDER), {
      target: { value: 'Password@123' },
    })
    fireEvent.click(getByText(RESET_PASSWORD_LABEL))
    expect(mockHandleResetPassword).toHaveBeenCalledTimes(1)
  })

  it('should toggles password visibility icon when the create password input is clicked', () => {
    const { getByAltText } = render(
      <ForgotPassword
        open={true}
        handleResetPassword={resetClick}
        handleForgotPassword={forgotClick}
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
      <ForgotPassword
        open={true}
        handleResetPassword={resetClick}
        handleForgotPassword={forgotClick}
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
