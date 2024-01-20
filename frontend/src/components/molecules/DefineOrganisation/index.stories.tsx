import DefineOrganisation from './index'
import { StoryFn, Meta } from '@storybook/react'

export default {
  title: 'Molecules/DefineOrganisation',
  component: DefineOrganisation,
} as Meta

const Template: StoryFn<typeof DefineOrganisation> = (args) => (
  <DefineOrganisation {...args} />
)

export const DefineOrganisationMock = Template.bind({})
DefineOrganisationMock.args = {
  sx: {
    width: '22.734vw',
  },
}
