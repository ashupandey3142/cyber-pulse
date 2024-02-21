import { Meta, StoryFn } from '@storybook/react'
import SecurityFilter from '.'

export default {
  component: SecurityFilter,
  title: 'Organisms/SecurityFilter',
  tags: ['autodocs'],
  argTypes: {
    onPopupClose: { action: 'onPopupClose' },
  },
} as Meta

const Template: StoryFn<typeof SecurityFilter> = (args) => (
  <SecurityFilter {...args} />
)
export const Filter = Template.bind({})
Filter.args = {
  selectedId: 2,
  handleCheckboxClick: (e, id) => {
    console.log('Check', id)
  },
}
