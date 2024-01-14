import { Meta, StoryFn } from '@storybook/react'
import Graph from '.'
import { MONTH } from '@/utils/constant'

export default {
  title: 'Molecules/Graph',
  tags: ['autodocs'],
  component: Graph,
} as Meta

const Template: StoryFn<typeof Graph> = (args) => <Graph {...args} />
export const Default = Template.bind({})
Default.args = {
  labels: MONTH,
  graphValues: [25, 20, 15, 50.9, 45, 30],
  width: 400,
  height: 400,
}
