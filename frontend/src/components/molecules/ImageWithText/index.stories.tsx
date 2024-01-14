import { Meta, StoryFn } from '@storybook/react'
import ImageWithText from '.'
import { DASHBOARD } from '@/utils/constant'

export default {
  title: 'Molecules/ImageWithText',
  component: ImageWithText,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1A161E' }],
    },
  },
} as Meta

const Template: StoryFn<typeof ImageWithText> = (args) => (
  <ImageWithText {...args} />
)

export const ImageWithTextSelect = Template.bind({})
ImageWithTextSelect.args = {
  fileName: DASHBOARD,
}
