import { Meta, StoryFn } from '@storybook/react'
import DisableSocialCard from '.'
import GoogleSignIn from '@Assets/icons/Switch.svg'
export default {
  title: 'Molecules/DisableSocialCard',
  component: DisableSocialCard,
} as Meta

const Template: StoryFn<typeof DisableSocialCard> = (args) => (
  <DisableSocialCard {...args} />
)

export const HomeCoverageImage = Template.bind({})
HomeCoverageImage.args = {
  isActive: true,
  socialIcon: GoogleSignIn,
  socialLabel: 'Google Single Sign In',
  onToggleClick: () => console.log('Disable Clicked'),
}
