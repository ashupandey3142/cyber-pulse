import { Meta, StoryFn } from '@storybook/react'
import RemoveIntegration from '.'

export default {
  title: 'Organisms/RemoveIntegration',
  component: RemoveIntegration,
  parameters: {
    backgrounds: {
      default: 'RemoveIntegrationBackground',
      values: [{ name: 'RemoveIntegrationBackground', value: '#585366' }],
    },
  },
  argTypes: {
    onDeleteIntegrationClick: { action: 'clicked' },
    onDisableButtonClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<typeof RemoveIntegration> = (args) => (
  <RemoveIntegration {...args} />
)

export const Default = Template.bind({})
Default.args = {
  sx: {
    width: '90.625vw',
    height: '861px',
  },
  isActive: true,
}
