import { StoryFn, Meta } from '@storybook/react'
import ForgotPassword from '.'
import theme from '@/theme'

export default {
  title: 'Organisms/ForgotPassword',
  component: ForgotPassword,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: theme.palette.ampsec.LIGHTISH_DARK_BACKGROUND },
      ],
    },
  },
  argTypes: {
    handleForgotPassword: { action: 'clicked' },
    handleSignInNavigation: { action: 'clicked' },
    handleResetPassword: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<typeof ForgotPassword> = (args) => (
  <ForgotPassword {...args} />
)

export const ForgotPasswordPage = Template.bind({})
ForgotPasswordPage.args = {
  open: false,
}

export const ResetPasswordPage = Template.bind({})
ResetPasswordPage.args = {
  open: true,
}
