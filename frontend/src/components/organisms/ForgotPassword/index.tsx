import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Box, FormHelperText, Stack, IconButton } from '@mui/material'

import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import ImageWithText from '@/components/molecules/ImageWithText'
import LabeledInput from '@/components/molecules/LabeledInput'
import Icon from '@/components/atoms/Icon'
import theme from '@/theme'
import OpenEye from '@Assets/icons/openEye.svg'
import ClosedEye from '@Assets/icons/closeEye.svg'

import {
  CONFIRM_PASSWORD,
  CONFIRM_PASSWORD_ERROR_TEXT,
  CREATE_PASSWORD_LABEL,
  EMAIL_ERROR_TEXT,
  EMAIL_LABEL,
  EXAM_EMAIL,
  FORGOT_PASSWORD_LABEL,
  MUST_BE,
  PASSWORD_ERROR_TEXT,
  REMEMBER_PASSWORD,
  REPEAT_PASS_PLACEHOLDER,
  RESET_LINK,
  RESET_PASSWORD,
  RESET_PASSWORD_LABEL,
  SIGN,
  VALIDEMAIL,
  VALIDPASSWORD,
} from '@/utils/constant'
import { ResetProps } from '@/utils/interfaces'

interface ForgotPasswordProps {
  handleForgotPassword: (params: string) => void
  handleSignInNavigation?: () => void
  handleResetPassword: (params: ResetProps) => void
  open: boolean
}

const ForgotPasswordContainer = styled(Stack)({
  display: 'flex',
  height: '640px',
  width: '30rem',
  flexDirection: 'column',
  background: theme.palette.darkTheme.STOKE_EMPHASIS,
  padding: '2.5rem',
  gap: '1.25rem',
  justifyContent: 'center',
  borderRadius: '1rem',
})

const ImageBox = styled(Box)({
  display: 'flex',
  paddingLeft: '7.8125rem',
  marginBottom: '1.25rem',
})

const MuiForgotPasswordButton = styled(Button)({
  height: '2.75rem',
  width: '100%',
})

const MuiBox = styled(Box)({
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.75rem',
  marginTop: '10.375rem',
})
const MuiResetBox = styled(Box)({
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.75rem',
  marginTop: '5rem',
})

const ForgotPassword = ({
  handleForgotPassword,
  handleSignInNavigation,
  handleResetPassword,
  open,
}: ForgotPasswordProps) => {
  const [email, setEmail] = useState<string>('')
  const [formData, setFormData] = useState({
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

  const handleForgotEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value
    setEmail(emailValue)
    if (!emailValue) {
      setFormError({ ...formError, emailError: EMAIL_ERROR_TEXT[1] })
    } else if (!VALIDEMAIL.test(emailValue)) {
      setFormError({ ...formError, emailError: EMAIL_ERROR_TEXT[0] })
    } else {
      setFormError({ ...formError, emailError: '' })
    }
  }

  const handleForgotPasswordChange = (
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

  const handleForgotConfirmPasswordChange = (
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

  const handleForgotPasswordClick = () => {
    handleForgotPassword(email)
  }
  const handleResetPasswordClick = () => {
    handleResetPassword(formData)
  }
  const handleForgotClickShowPassword = () => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      showPassword: !prevToggle.showPassword,
    }))
  }

  const handleForgotClickShowConfirmPassword = () => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      showConfirmPassword: !prevToggle.showConfirmPassword,
    }))
  }

  const buttonColor = formError.emailError
    ? theme.palette.darkTheme.LIGHT_EMPHASIS
    : theme.palette.primary.main
  const resetColor =
    formError.emailError || formError.passwordError
      ? theme.palette.darkTheme.LIGHT_EMPHASIS
      : theme.palette.primary.main
  return (
    <ForgotPasswordContainer>
      {!open ? (
        <>
          <ImageBox>
            <ImageWithText fileName={FORGOT_PASSWORD_LABEL} />
          </ImageBox>

          <Stack>
            <LabeledInput
              label={EMAIL_LABEL}
              labelVariant={'body3'}
              textFieldProps={{
                placeholder: EXAM_EMAIL,
                type: 'email',
                size: 'small',
                value: email,
                onChange: (e) => handleForgotEmailChange(e),
              }}
            />
            {formError.emailError && (
              <FormHelperText error>{formError.emailError}</FormHelperText>
            )}
          </Stack>

          <MuiForgotPasswordButton
            label={RESET_LINK}
            textColor={theme.palette.darkTheme.STOKE_EMPHASIS}
            backgroundColor={buttonColor}
            onClick={handleForgotPasswordClick}
          />
          <MuiBox>
            <Typography
              label={REMEMBER_PASSWORD}
              variant="body3"
              textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
            />
            <Typography
              label={SIGN}
              variant="body3"
              textColor={theme.palette.primary.main}
              style={{ textDecoration: 'underline' }}
              onClick={handleSignInNavigation}
            />
          </MuiBox>
        </>
      ) : (
        <>
          <ImageBox>
            <ImageWithText fileName={RESET_PASSWORD} />
          </ImageBox>

          <Stack>
            <LabeledInput
              label={CREATE_PASSWORD_LABEL}
              labelVariant={'body3'}
              textFieldProps={{
                placeholder: MUST_BE,
                size: 'small',
                value: formData.password,
                onChange: (e) => handleForgotPasswordChange(e),
                InputProps: {
                  type: toggle.showPassword ? 'text' : 'password',
                  endAdornment: (
                    <IconButton
                      onClick={handleForgotClickShowPassword}
                      edge="end"
                    >
                      <Icon
                        src={toggle.showPassword ? OpenEye : ClosedEye}
                        alt={
                          toggle.showPassword
                            ? 'VisibleIconShowPassword'
                            : 'InvisibleIconShowPassword'
                        }
                      />
                    </IconButton>
                  ),
                },
              }}
            />
            {formError.passwordError && (
              <FormHelperText error>{formError.passwordError}</FormHelperText>
            )}
          </Stack>

          <Stack>
            <LabeledInput
              label={CONFIRM_PASSWORD}
              labelVariant={'body3'}
              textFieldProps={{
                placeholder: REPEAT_PASS_PLACEHOLDER,
                size: 'small',
                onChange: (e) => handleForgotConfirmPasswordChange(e),
                InputProps: {
                  type: toggle.showConfirmPassword ? 'text' : 'password',
                  endAdornment: (
                    <IconButton
                      onClick={handleForgotClickShowConfirmPassword}
                      edge="end"
                    >
                      <Icon
                        src={toggle.showConfirmPassword ? OpenEye : ClosedEye}
                        alt={
                          toggle.showConfirmPassword
                            ? 'VisibleIconShowConfirmPassword'
                            : 'InvisibleIconShowConfirmPassword'
                        }
                      />
                    </IconButton>
                  ),
                },
              }}
            />
            {formError.confirmPasswordError && (
              <FormHelperText error>
                {formError.confirmPasswordError}
              </FormHelperText>
            )}
          </Stack>

          <MuiForgotPasswordButton
            label={RESET_PASSWORD_LABEL}
            textColor={theme.palette.darkTheme.STOKE_EMPHASIS}
            backgroundColor={resetColor}
            onClick={handleResetPasswordClick}
          />
          <MuiResetBox>
            <Typography
              label={REMEMBER_PASSWORD}
              variant="body3"
              textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
            />
            <Typography
              label={SIGN}
              variant="body3"
              textColor={theme.palette.primary.main}
              style={{ textDecoration: 'underline' }}
              onClick={handleSignInNavigation}
            />
          </MuiResetBox>
        </>
      )}
    </ForgotPasswordContainer>
  )
}

export default ForgotPassword
