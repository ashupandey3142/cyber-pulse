import { type Meta, type StoryObj } from '@storybook/react'
import ToolIntegrationModal from '.'

const meta: Meta<typeof ToolIntegrationModal> = {
  title: 'ORGANISMS/ToolIntegrationModal',
  component: ToolIntegrationModal,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#282030' }],
    },
  },
}
type Story = StoryObj<typeof ToolIntegrationModal>

export const SecurityHealth: Story = {
  args: {
    open: true,
    isIntegrated: true,
    sx: {
      width: '86vw',
      height: '750px',
    },
  },
}

export default meta
