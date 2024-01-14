import { Meta, StoryFn } from '@storybook/react'
import LogoutPopup from '.'

export default {
  title: 'Molecules/LogoutPopup',
  component: LogoutPopup,
  argTypes: {
    handleLogoutClick: { action: 'clicked' },
    handleClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<typeof LogoutPopup> = (args) => (
  <LogoutPopup {...args} />
)

export const LogoutImage = Template.bind({})
LogoutImage.args = {
  userName: 'Somnath@gmail.com',
}
