import { StoryFn, Meta } from '@storybook/react'
import AccordianComp from '.'
import { DEFINE_ORGANISATION, REMOVE_INTEGRATION } from '@/utils/constant'

export default {
  title: 'Molecules/Accordian',
  component: AccordianComp,
} as Meta

const Template: StoryFn<typeof AccordianComp> = (args) => (
  <AccordianComp {...args} />
)

export const GenericAccordian = Template.bind({})
GenericAccordian.args = {
  configurationName: DEFINE_ORGANISATION,
  isConfigured: true,
}
export const GenericRemoveAccordian = Template.bind({})
GenericRemoveAccordian.args = {
  configurationName: REMOVE_INTEGRATION,
  isConfigured: false,
}
