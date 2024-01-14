import { Meta, StoryFn } from '@storybook/react'
import IntegrationHeader from '.'

export default {
  title: 'Molecules/IntegrationHeader',
  component: IntegrationHeader,
} as Meta

const Template: StoryFn<typeof IntegrationHeader> = (args) => (
  <IntegrationHeader {...args} />
)

export const IntegrationHeaderWithButton = Template.bind({})
IntegrationHeaderWithButton.args = {
  label: 'INTEGRATIONS',
  hasButtonLabel: true,
  buttonLabel: 'Add New',
}

export const IntegrationHeaderWithoutButton = Template.bind({})
IntegrationHeaderWithoutButton.args = {
  label: 'INTEGRATIONS',
  hasButtonLabel: false,
  buttonLabel: 'Add New',
}
