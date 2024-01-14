import { Meta, StoryFn } from '@storybook/react'
import DropDown from '.'
import { ACTION_CARD_DATA } from '@/utils/constant'

export default {
  title: 'Molecules/Dropdown',
  component: DropDown,
  argTypes: {
    handleClick: {
      action: 'clicked',
    },
  },
} as Meta

const Template: StoryFn<typeof DropDown> = (args) => <DropDown {...args} />

export const EngageDropDown = Template.bind({})
EngageDropDown.args = {
  cardData: ACTION_CARD_DATA,
  selectedId: 1,
  handleClick: (id: number) => console.log(`Clicked ID: ${id}`),
}
