import { Meta, StoryFn } from '@storybook/react'
import Dashboard from '.'
import { MONTH } from '@/utils/constant'

export default {
  title: 'Organisms/Dashboard',
  component: Dashboard,
  parameters: {
    backgrounds: {
      default: 'dashboardBackground',
      values: [{ name: 'dashboardBackground', value: '#534D66' }],
    },
  },
} as Meta

const Template: StoryFn<typeof Dashboard> = (args) => <Dashboard {...args} />

export const Default = Template.bind({})
Default.args = {
  mfaValue: 12,
  mfaTotalApplication: '194',
  failedPhishing: '06',
  overdueTraining: '40',
  totalEmployees: '300',
  totalEndpoints: '300',
  crowdStrikes: '12',
  text: '12',
  graphLabels: MONTH,
  graphValues: [25, 20, 15, 50.9, 45, 30],
}
