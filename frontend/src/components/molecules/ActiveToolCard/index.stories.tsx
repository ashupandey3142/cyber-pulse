import { Meta, StoryFn } from '@storybook/react'
import ActiveToolCard from '.'
import GoogleIcon from '@Assets/icons/Switch.svg'
export default {
  title: 'Molecules/ActiveToolCard',
  component: ActiveToolCard,
  argTypes: {
    handleConfigureClick: { action: 'Please Configured' },
  },
} as Meta

const Template: StoryFn<typeof ActiveToolCard> = (args) => (
  <ActiveToolCard {...args} />
)

export const ActiveToolCardDefault = Template.bind({})
ActiveToolCardDefault.args = {
  src: GoogleIcon,
  intgrationLabel: 'Google',
  alt: 'GoogleICon',
}
