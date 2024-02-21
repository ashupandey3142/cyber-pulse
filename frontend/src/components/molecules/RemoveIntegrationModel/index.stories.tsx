import RemoveIntegrationModal from './index'
import { StoryFn, Meta } from '@storybook/react'
export default {
  title: 'Molecules/RemoveIntegrationModal',
  component: RemoveIntegrationModal,
  argTypes: {
    handleRemoveCancel: { action: 'clicked' },
    handleDeleteIntegration: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<typeof RemoveIntegrationModal> = (args) => (
  <RemoveIntegrationModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  open: true,
  sx: {
    width: '50vw',
    height: '190px',
  },
}
