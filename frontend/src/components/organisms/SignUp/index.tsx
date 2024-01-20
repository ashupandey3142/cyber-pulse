import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import ImageWithText from '@/components/molecules/ImageWithText'
import LabeledInput from '@/components/molecules/LabeledInput'
import {
  ALREADY_ACCOUNT,
  AUTHSIGNUP,
  CONFIRM_PASSWORD,
  CONFIRM_PASSWORD_ERROR_TEXT,
  CREATE_ACCOUNT,
  CREATE_PASSWORD,
  EMAIL,
  EMAIL_ERROR_TEXT,
  EXAMPLE_MAIL,
  PASSWORD_ERROR_TEXT,
  REPEAT_PASSWORD_PLACEHOLDER,
  SIGNIN,
  SIGN_UP,
  SIZE_CHARACTER,
  VALIDEMAIL,
  VALIDPASSWORD,
} from '@/utils/constant'
import styled from '@emotion/styled'
import { Box, Divider, FormHelperText, IconButton, Stack } from '@mui/material'
import React, { ChangeEvent, ReactNode, useState } from 'react'
import GoogleIcon from '@Assets/icons/newgoogle.svg'
import Icon from '@/components/atoms/Icon'
import theme from '@/theme'
import { FormDataProps } from '@/utils/interfaces'
import OpenEye from '@Assets/icons/open.svg'
import ClosedEye from '@Assets/icons/close.svg'

interface SignUpProps {
  handleAuthClick?: () => void
  handleSignUp: (params: FormDataProps) => void
  handleSignInNavigation: () => void
}

const SignUpContainer = styled(Stack)({
  display: 'flex',
  height: '49.1875rem',
  width: '30rem',
  flexDirection: 'column',
  background: theme.palette.darkTheme.STOKE_EMPHASIS,
  padding: '2.5rem',
  gap: '1.25rem',
  justifyContent: 'center',
  borderRadius: '1rem',
})

const MuiSignUpDivider = styled(Divider)({
  color: theme.palette.darkTheme.MEDIUM_EMPHASIS,
  '&.MuiDivider-root::before': {
    borderTop: `thin solid ${theme.palette.darkTheme.DIVIDER_EMPHASIS};
    `,
  },
  '&.MuiDivider-root::after': {
    borderTop: `thin solid ${theme.palette.darkTheme.DIVIDER_EMPHASIS}`,
  },
})
const ImageSignUpBox = styled(Box)({
  display: 'flex',
  paddingLeft: '7.8125rem',
  marginBottom: '1.25rem',
})

const MuiSignUpButton = styled(Button)({
  height: '2.75rem',
  marginTop: '0.625rem',
  background: theme.palette.primary.main,
  width: '100%',
  ':disabled': {
    background: theme.palette.darkTheme.LIGHT_EMPHASIS,
  },
})
const MuiSignUpBox = styled(Box)({
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.75rem',
  marginTop: '1.25rem',
})
const MuiAuthSignUpButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(1),
})

interface FormInputProps {
  label: string
  labelVariant: 'body3' | 'body6'
  placeholder: string
  size: 'small'
  value: string
  onChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void
  type: string
  endAdornment?: ReactNode
}

const FormInput = ({
  label,
  labelVariant,
  placeholder,
  size,
  value,
  onChange,
  type,
  endAdornment,
}: FormInputProps) => (
  <Stack>
    <LabeledInput
      label={label}
      labelVariant={labelVariant}
      textFieldProps={{
        placeholder,
        type,
        size,
        value,
        onChange,
        InputProps: {
          endAdornment,
        },
      }}
    />
  </Stack>
)

const SignUp = ({
  handleSignUp,
  handleSignInNavigation,
  handleAuthClick,
}: SignUpProps) => {
  const [formData, setFormData] = useState<FormDataProps>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [formError, setFormError] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  })

  const [toggle, setToggle] = useState({
    showPassword: false,
    showConfirmPassword: false,
  })

  const handleSignUpClickShowPassword = () => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      showPassword: !prevToggle.showPassword,
    }))
  }

  const handleSignUpClickShowConfirmPassword = () => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      showConfirmPassword: !prevToggle.showConfirmPassword,
    }))
  }
  const handleSignUpEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value
    setFormData({ ...formData, email: emailValue })
    if (!emailValue) {
      setFormError({ ...formError, emailError: EMAIL_ERROR_TEXT[1] })
    } else if (!VALIDEMAIL.test(emailValue)) {
      setFormError({ ...formError, emailError: EMAIL_ERROR_TEXT[0] })
    } else {
      setFormError({ ...formError, emailError: '' })
    }
  }

  const handleSignUpPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const passwordValue = e.target.value
    setFormData({ ...formData, password: passwordValue })
    if (!passwordValue) {
      setFormError({ ...formError, passwordError: PASSWORD_ERROR_TEXT[1] })
    } else if (!VALIDPASSWORD.test(passwordValue)) {
      setFormError({ ...formError, passwordError: PASSWORD_ERROR_TEXT[0] })
    } else {
      setFormError({ ...formError, passwordError: '' })
    }
  }

  const handleSignUpConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const confirmPasswordValue = e.target.value
    setFormData({ ...formData, confirmPassword: confirmPasswordValue })
    if (!confirmPasswordValue) {
      setFormError({
        ...formError,
        confirmPasswordError: CONFIRM_PASSWORD_ERROR_TEXT[1],
      })
    } else if (!VALIDPASSWORD.test(confirmPasswordValue)) {
      setFormError({
        ...formError,
        confirmPasswordError: CONFIRM_PASSWORD_ERROR_TEXT[0],
      })
    } else {
      setFormError({ ...formError, confirmPasswordError: '' })
    }
  }

  const handleSignUpClick = () => {
    handleSignUp(formData)
  }

  const isResetPasswordButtonDisabled =
    formData.email === '' ||
    formData.confirmPassword === '' ||
    formData.password === '' ||
    formError.emailError !== '' ||
    formError.passwordError !== '' ||
    formError.confirmPasswordError ||
    formData.confirmPassword !== formData.password
      ? true
      : false

  return (
    <SignUpContainer>
      <ImageSignUpBox>
        <ImageWithText fileName={SIGN_UP} />
      </ImageSignUpBox>

      <FormInput
        label={EMAIL}
        labelVariant={'body3'}
        placeholder={EXAMPLE_MAIL}
        size="small"
        value={formData.email}
        onChange={(e) => handleSignUpEmailChange(e)}
        type={'email'}
      />
      {formError.emailError && (
        <FormHelperText error>{formError.emailError}</FormHelperText>
      )}

      <FormInput
        label={CREATE_PASSWORD}
        labelVariant={'body3'}
        placeholder={SIZE_CHARACTER}
        size="small"
        value={formData.password}
        onChange={(e) => handleSignUpPasswordChange(e)}
        type={toggle.showPassword ? 'text' : 'password'}
        endAdornment={
          <IconButton onClick={handleSignUpClickShowPassword} edge="end">
            <Icon
              src={toggle.showPassword ? OpenEye : ClosedEye}
              alt={
                toggle.showPassword
                  ? 'VisibleIconShowPassword'
                  : 'InvisibleIconShowPassword'
              }
            />
          </IconButton>
        }
      />
      {formError.passwordError && (
        <FormHelperText error>{formError.passwordError}</FormHelperText>
      )}

      <FormInput
        label={CONFIRM_PASSWORD}
        labelVariant={'body3'}
        placeholder={REPEAT_PASSWORD_PLACEHOLDER}
        value={formData.confirmPassword}
        size="small"
        onChange={(e) => handleSignUpConfirmPasswordChange(e)}
        type={toggle.showConfirmPassword ? 'text' : 'password'}
        endAdornment={
          <IconButton onClick={handleSignUpClickShowConfirmPassword} edge="end">
            <Icon
              src={toggle.showConfirmPassword ? OpenEye : ClosedEye}
              alt={
                toggle.showConfirmPassword
                  ? 'VisibleIconShowConfirmPassword'
                  : 'InvisibleIconShowConfirmPassword'
              }
            />
          </IconButton>
        }
      />
      {formError.confirmPasswordError && (
        <FormHelperText error>{formError.confirmPasswordError}</FormHelperText>
      )}

      <MuiSignUpButton
        label={CREATE_ACCOUNT}
        textColor={theme.palette.darkTheme.STOKE_EMPHASIS}
        onClick={handleSignUpClick}
        disabled={isResetPasswordButtonDisabled}
      />
      <MuiSignUpDivider>or</MuiSignUpDivider>
      <MuiAuthSignUpButton
        endIcon={<Icon src={GoogleIcon} alt="google" />}
        label={AUTHSIGNUP}
        onClick={handleAuthClick}
        variant="contained"
        textColor={theme.palette.text.highEmphasis}
        typographyVariant={'button'}
        backgroundColor={theme.palette.darkTheme.STRUCTURAL_CARD_BG}
      />
      <MuiSignUpBox>
        <Typography
          label={ALREADY_ACCOUNT}
          variant="body3"
          textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
        />
        <Typography
          label={SIGNIN}
          variant="body3"
          textColor={theme.palette.primary.main}
          style={{ textDecoration: 'underline' }}
          onClick={handleSignInNavigation}
        />
      </MuiSignUpBox>
    </SignUpContainer>
  )
}

export default SignUp
