import { Meta, StoryFn } from '@storybook/react'
import Tabs from '.'
import {
  ADD_INTEGRATION_TAB_VALUES,
  DASHBOARD_TAB_VALUES,
} from '@/strings/string'
import theme from '@/theme'

export default {
  component: Tabs,
  title: 'Molecules/Tabs',
} as Meta

const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />

export const DashboardTab = Template.bind({})
DashboardTab.args = {
  tabValues: DASHBOARD_TAB_VALUES,
  deActiveTabColor: theme.palette.text.highEmphasis,
}

export const AddIntegrationTab = Template.bind({})
AddIntegrationTab.args = {
  tabValues: ADD_INTEGRATION_TAB_VALUES,
  deActiveTabColor: theme.palette.text.mediumEmphasis,
}
