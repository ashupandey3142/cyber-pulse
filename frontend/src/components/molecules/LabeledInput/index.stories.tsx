import theme from '@/theme'
import { type Meta, type StoryObj } from '@storybook/react'
import LabeledInput from '.'

const meta: Meta<typeof LabeledInput> = {
  title: 'Molecules/LabeledInput',
  component: LabeledInput,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1A161E' }],
    },
  },
}
type Story = StoryObj<typeof LabeledInput>

export const EmailInputLabel: Story = {
  args: {
    label: 'EMAIL',
    labelVariant: 'body3',
    textFieldProps: {
      type: 'email',
      size: 'small',
      placeholder: 'example@gmail.com',
      sx: { width: theme.spacing(100) },
    },
  },
}

export const PasswordInputLabel: Story = {
  args: {
    label: 'Create a password'.toUpperCase(),
    labelVariant: 'body3',
    textFieldProps: {
      type: 'password',
      placeholder: 'must be 8 characters',
      size: 'small',
      sx: { width: theme.spacing(100) },
    },
  },
}

export const ClientSecret: Story = {
  args: {
    label: 'Client Secret',
    labelVariant: 'body6',
    textFieldProps: {
      type: 'password',
      placeholder: '************',
      size: 'small',
      sx: { width: theme.spacing(100) },
    },
  },
}

export default meta
