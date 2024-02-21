import { type Meta, type StoryObj } from '@storybook/react'
import AddIntegrationModal from '.'

const meta: Meta<typeof AddIntegrationModal> = {
  title: 'ORGANISMS/AddIntegrationModal',
  component: AddIntegrationModal,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#282030' }],
    },
  },
}
type Story = StoryObj<typeof AddIntegrationModal>

export const Default: Story = {
  args: {
    open: true,
    sx: {
      width: '86vw',
      height: '750px',
    },
  },
}

export default meta
