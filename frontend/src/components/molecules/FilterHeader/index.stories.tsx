import { Meta, StoryFn } from '@storybook/react'
import FilterHeader from '.'

export default {
  title: 'Molecules/FilterHeader',
  component: FilterHeader,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof FilterHeader> = (args) => (
  <FilterHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  selectedId: 1,
  onDropDownClick: (id: number) => console.log(`Clicked ID: ${id}`),
}
