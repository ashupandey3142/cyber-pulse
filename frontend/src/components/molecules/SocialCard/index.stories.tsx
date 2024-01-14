import Auth0Icon from '@Assets/icons/auth0.svg'
import GoogleIcon from '@Assets/icons/googleIcon.svg'
import { type Meta, type StoryObj } from '@storybook/react'
import SocialCard from '.'

const meta: Meta<typeof SocialCard> = {
  title: 'Molecules/SocialCard',
  component: SocialCard,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [{ name: 'black', value: '#000000' }],
    },
  },
}
type Story = StoryObj<typeof SocialCard>

export const GoogleSSO: Story = {
  args: {
    title: 'Google SSO',
    icon: GoogleIcon,
    sx: {
      width: '279px',
      height: '275px',
    },
  },
}

export const Auth0SSO: Story = {
  args: {
    title: 'Auth 0',
    icon: Auth0Icon,
    sx: {
      width: '279px',
      height: '275px',
    },
  },
}
export default meta
