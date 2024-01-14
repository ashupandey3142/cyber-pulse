import { type Meta, type StoryObj } from '@storybook/react'
import InfoHeader from '.'

const meta: Meta<typeof InfoHeader> = {
  title: 'Molecules/InfoHeader',
  component: InfoHeader,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#2d2832' }],
    },
  },
}
type Story = StoryObj<typeof InfoHeader>

export const Default: Story = {
  args: {},
}

export default meta
