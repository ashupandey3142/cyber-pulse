import { type Meta, type StoryObj } from '@storybook/react'
import SlackSideBar from '.'

const meta: Meta<typeof SlackSideBar> = {
  title: 'Molecules/SlackSideBar',
  component: SlackSideBar,
}
type Story = StoryObj<typeof SlackSideBar>

export const Default: Story = {
  args: {
    width: '180px',
    height: '709px',
  },
}

export default meta
