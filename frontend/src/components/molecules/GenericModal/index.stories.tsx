import { Stack } from '@mui/material'
import { type Meta, type StoryObj } from '@storybook/react'
import GenericModal from '.'

const meta: Meta<typeof GenericModal> = {
  title: 'Molecules/GenericModal',
  component: GenericModal,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#282030' }],
    },
  },
}
type Story = StoryObj<typeof GenericModal>

export const WithoutBackIcon: Story = {
  args: {
    title: 'ENGAGE WITH EMPLOYEES',
    isBackIcon: false,
    open: true,
    children: <Stack width="52.06vw" height="49.5vh"></Stack>,
  },
}

export const WithBackIcon: Story = {
  args: {
    title: 'ADD INTEGRATION',
    isBackIcon: true,
    open: true,
    children: <Stack width="92.4vw" height="81.36vh"></Stack>,
  },
}

export default meta
