import { Meta, StoryFn } from '@storybook/react'
import DashBoardHeader from '.'
import { DASHBOARD_TAB_VALUES } from '@/strings/string'
import theme from '@/theme'
import { EVERYONE } from '@/utils/constant'

export default {
  title: 'Molecules/DashBoardHeader',
  component: DashBoardHeader,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1A161E' }],
    },
  },
} as Meta

const Template: StoryFn<typeof DashBoardHeader> = (args) => (
  <DashBoardHeader {...args} />
)

export const DashBoardHeaderWithButton = Template.bind({})
DashBoardHeaderWithButton.args = {
  tabValues: DASHBOARD_TAB_VALUES,
  deActiveTabColor: theme.palette.text.highEmphasis,
  hasButtonLabel: true,
  buttonLabel: EVERYONE,
}
export const DashBoardHeaderWithOutButton = Template.bind({})
DashBoardHeaderWithOutButton.args = {
  tabValues: DASHBOARD_TAB_VALUES,
  deActiveTabColor: theme.palette.text.highEmphasis,
  hasButtonLabel: true,
  buttonLabel: EVERYONE,
}
