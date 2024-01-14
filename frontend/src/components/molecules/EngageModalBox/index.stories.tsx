import { Meta, StoryFn } from '@storybook/react'
import EngageModalBox from '.'
import slack from '@Assets/icons/slack.svg'
import { MAIL_TEXT } from '@/utils/constant'

export default {
  component: EngageModalBox,
  title: 'Molecules/EngageModalBox',
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof EngageModalBox> = (args) => (
  <EngageModalBox {...args} />
)
export const EngageWithEmployees = Template.bind({})
EngageWithEmployees.args = {
  open: true,
  textFieldValue: MAIL_TEXT,
  dropdownData: [
    { label: 'Slack', src: slack },
    { label: 'Google', src: slack },
  ],
  selectedDropdown: 'Google',
  handleDropdownChange: () => console.log('hello'),
}
