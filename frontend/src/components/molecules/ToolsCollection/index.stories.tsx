import { type Meta, type StoryObj } from '@storybook/react'
import ToolsCollection from '.'

const meta: Meta<typeof ToolsCollection> = {
  title: 'Molecules/ToolsCollection',
  component: ToolsCollection,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#282030' }],
    },
  },
}
type Story = StoryObj<typeof ToolsCollection>

export const Default: Story = {
  args: {},
}

export default meta
