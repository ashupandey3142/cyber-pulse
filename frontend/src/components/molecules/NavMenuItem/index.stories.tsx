import { NAV_MENU_ITEMS_MOCKS } from '@/components/mocks/mockData'
import { type Meta, type StoryObj } from '@storybook/react'
import LabeledInput from '.'

const meta: Meta<typeof LabeledInput> = {
  title: 'Molecules/NavMenuItem',
  component: LabeledInput,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
}
type Story = StoryObj<typeof LabeledInput>

export const Default: Story = {
  args: {
    items: NAV_MENU_ITEMS_MOCKS,
    sx: { width: '290px' },
  },
}

export default meta
