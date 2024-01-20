import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import ImageWithText from '@/components/molecules/ImageWithText'
import LabeledInput from '@/components/molecules/LabeledInput'
import {
  AUTHSIGNIN,
  CREATE_ONE,
  EMAIL,
  EMAIL_ERROR_TEXT,
  FORGOT_PASSWORD,
  KEEP_ME,
  NEED_ACCOUNT,
  PASSWORD,
  PASSWORD_ERROR_TEXT,
  SIGNIN_EXAMPLE_MAIL,
  SIGN_IN,
  SIGN_IN_DASHBOARD,
  VALIDEMAIL,
  VALIDPASSWORD,
} from '@/utils/constant'
import styled from '@emotion/styled'
import { Box, Divider, FormHelperText, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import GoogleIcon from '@Assets/icons/newgoogle.svg'
import Icon from '@/components/atoms/Icon'
import theme from '@/theme'
import { FormSignDataProps } from '@/utils/interfaces'
import OpenEye from '@Assets/icons/open.svg'
import ClosedEye from '@Assets/icons/close.svg'
import Checkbox from '@/components/atoms/Checkbox'

interface SignInProps {
  onAuthHandleClick: () => void
  handleSignIn: (params: FormSignDataProps) => void
  handleSignUpNavigation: () => void
  handleCheckBoxClick?: () => void
}

const SignInContainer = styled(Stack)({
  display: 'flex',
  height: '45.9375rem',
  width: '30rem',
  flexDirection: 'column',
  background: theme.palette.darkTheme.STOKE_EMPHASIS,
  padding: '2.5rem',
  gap: '1.25rem',
  justifyContent: 'center',
  borderRadius: '1rem',
})

const InnerCheckBox = styled(Checkbox)({
  color: theme.palette.text.lowEmphasis,
})

const MuiDivider = styled(Divider)({
  color: theme.palette.darkTheme.MEDIUM_EMPHASIS,
  '&.MuiDivider-root::before': {
    borderTop: `thin solid ${theme.palette.darkTheme.DIVIDER_EMPHASIS};
    `,
  },
  '&.MuiDivider-root::after': {
    borderTop: `thin solid ${theme.palette.darkTheme.DIVIDER_EMPHASIS}`,
  },
})
const ImageBox = styled(Box)({
  display: 'flex',
  paddingLeft: '7.8125rem',
  marginBottom: '1.25rem',
})

const MuiSignInButton = styled(Button)({
  height: '2.75rem',
  width: '100%',
})
const MuiBox = styled(Box)({
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.75rem',
  marginTop: '1rem',
})
const MuiAuthButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(1),
})
const MuiCheckBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&.MuiCheckbox-root': {
    color: theme.palette.darkTheme.HIGH_EMPHASIS,
  },
})
const SignIn = ({
  handleSignIn,
  handleSignUpNavigation,
  onAuthHandleClick,
  handleCheckBoxClick,
}: SignInProps) => {
  const [formData, setFormData] = useState<FormSignDataProps>({
    email: '',
    password: '',
  })

  const [formError, setFormError] = useState({
    emailError: '',
    passwordError: '',
  })

  const [toggle, setToggle] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setToggle(!toggle)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSignInClick = () => {
    handleSignIn(formData)
  }

  const buttonColor =
    formError.passwordError || formError.emailError
      ? theme.palette.darkTheme.LIGHT_EMPHASIS
      : theme.palette.primary.main

  return (
    <SignInContainer>
      <ImageBox>
        <ImageWithText fileName={SIGN_IN_DASHBOARD} />
      </ImageBox>

      <Stack>
        <LabeledInput
          label={EMAIL}
          labelVariant={'body3'}
          textFieldProps={{
            placeholder: SIGNIN_EXAMPLE_MAIL,
            type: 'email',
            size: 'small',
            value: formData.email,
            onChange: (e) => handleEmailChange(e),
          }}
        />
        {formError.emailError && (
          <FormHelperText error>{formError.emailError}</FormHelperText>
        )}
      </Stack>

      <Stack>
        <LabeledInput
          label={PASSWORD}
          labelVariant={'body3'}
          textFieldProps={{
            placeholder: 'Password',
            size: 'small',
            value: formData.password,
            onChange: (e) => handlePasswordChange(e),
            InputProps: {
              type: toggle ? 'text' : 'password',
              endAdornment: (
                <IconButton onClick={handleClickShowPassword} edge="end">
                  <Icon
                    src={toggle ? OpenEye : ClosedEye}
                    alt={
                      toggle
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
        <MuiCheckBox>
          <InnerCheckBox
            label={
              <Typography
                variant="body4"
                color={theme.palette.darkTheme.HIGH_EMPHASIS}
                label={KEEP_ME}
              />
            }
            onClick={handleCheckBoxClick}
          />
          <Typography
            label={FORGOT_PASSWORD}
            variant="body4"
            color={theme.palette.darkTheme.HIGH_EMPHASIS}
            style={{ textDecoration: 'underline' }}
          />
        </MuiCheckBox>
      </Stack>

      <MuiSignInButton
        label={SIGN_IN}
        textColor={theme.palette.darkTheme.STOKE_EMPHASIS}
        backgroundColor={buttonColor}
        onClick={handleSignInClick}
      />
      <MuiDivider>or</MuiDivider>
      <MuiAuthButton
        endIcon={<Icon src={GoogleIcon} alt="google" />}
        label={AUTHSIGNIN}
        onClick={onAuthHandleClick}
        variant="contained"
        textColor={theme.palette.text.highEmphasis}
        typographyVariant={'button'}
        backgroundColor={theme.palette.darkTheme.STRUCTURAL_CARD_BG}
      />
      <MuiBox>
        <Typography
          label={NEED_ACCOUNT}
          variant="body3"
          textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
        />
        <Typography
          label={CREATE_ONE}
          variant="body3"
          textColor={theme.palette.primary.main}
          style={{ textDecoration: 'underline' }}
          onClick={handleSignUpNavigation}
        />
      </MuiBox>
    </SignInContainer>
  )
}

export default SignIn
