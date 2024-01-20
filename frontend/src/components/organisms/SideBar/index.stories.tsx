import { type Meta, type StoryObj } from '@storybook/react'
import SideBar from '.'

const meta: Meta<typeof SideBar> = {
  title: 'ORGANISMS/SideBar',
  component: SideBar,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#282030' }],
    },
  },
  argTypes: {
    handleNavClick: { action: 'clicked' },
  },
}
type Story = StoryObj<typeof SideBar>

export const Default: Story = {
  args: {
    sx: { width: '10.5vw' },
  },
}

export default meta
