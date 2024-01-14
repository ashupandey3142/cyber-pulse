import Checkbox from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'atoms/checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    onChange: {
      action: 'changed',
    },
    sx: {
      control: { type: 'object' },
    },
    style: {
      control: { type: 'object' },
    },
  },
} as Meta

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />
export const DefaultCheckbox = Template.bind({})
DefaultCheckbox.args = {
  checked: false,
}

export const CheckedCheckbox = Template.bind({})
CheckedCheckbox.args = {
  checked: true,
}

export const DisabledCheckbox = Template.bind({})
DisabledCheckbox.args = {
  disabled: true,
}
