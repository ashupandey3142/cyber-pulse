import { Meta, StoryFn } from '@storybook/react'
import theme from '@/theme/index'
import Button from '.'
import google from '@Assets/icons/google.svg'

export default {
  component: Button,
  title: 'Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outlined', 'text', 'contained'],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const SignIn = Template.bind({})
SignIn.args = {
  variant: 'contained',
  label: 'SIGN IN',
  textColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  typographyVariant: 'button',
  backgroundColor: theme.palette.primary.main,
  sx: {
    width: theme.spacing(100),
    height: theme.spacing(11),
  },
}

export const SignInWithGoogle = Template.bind({})
SignInWithGoogle.args = {
  variant: 'outlined',
  label: 'SIGN IN WITH GOOGLE',
  textColor: theme.palette.text.highEmphasis,
  typographyVariant: 'button',
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  endIcon: <img src={google} alt="google" width={theme.spacing(6)} />,
  sx: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
    width: theme.spacing(100),
    height: theme.spacing(11),
  },
}

export const Cancel = Template.bind({})
Cancel.args = {
  variant: 'contained',
  label: 'Cancel',
  textColor: theme.palette.ampsec.CANCEL,
  typographyVariant: 'button2',
  backgroundColor: theme.palette.ampsec.CANCEL_BG,
  sx: {
    width: theme.spacing(13.25),
    height: theme.spacing(8),
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
}
