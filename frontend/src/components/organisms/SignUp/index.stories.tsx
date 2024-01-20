import { StoryFn, Meta } from '@storybook/react'
import SignUp from '.'
import theme from '@/theme'

export default {
  title: 'Organisms/SignUp',
  component: SignUp,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: theme.palette.ampsec.LIGHTISH_DARK_BACKGROUND },
      ],
    },
  },
  argTypes: {
    handleAuthClick: { action: 'clicked' },
    handleSignUp: { action: 'clicked' },
    handleSignInNavigation: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<typeof SignUp> = (args) => <SignUp {...args} />

export const SignUpStory = Template.bind({})
SignUpStory.args = {}
