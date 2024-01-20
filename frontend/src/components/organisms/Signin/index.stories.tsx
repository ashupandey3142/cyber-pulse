import { StoryFn, Meta } from '@storybook/react'
import SignIn from '.'
import theme from '@/theme'

export default {
  title: 'Organisms/SignIn',
  component: SignIn,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: theme.palette.ampsec.LIGHTISH_DARK_BACKGROUND },
      ],
    },
  },
  argTypes: {
    onAuthHandleClick: { action: 'clicked' },
    handleSignIn: { action: 'clicked' },
    handleSignInNavigation: { action: 'clicked' },
    handleCheckBoxClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<typeof SignIn> = (args) => <SignIn {...args} />

export const SignInPage = Template.bind({})
SignInPage.args = {}
