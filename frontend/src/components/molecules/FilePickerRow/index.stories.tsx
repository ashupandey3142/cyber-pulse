import { Meta, StoryFn } from '@storybook/react'
import FilePickerCard from '.'
import FileCard from '@Assets/icons/file.svg'

export default {
  title: 'Molecules/FilePickerCard',
  component: FilePickerCard,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1A161E' }],
    },
  },
} as Meta

const Template: StoryFn<typeof FilePickerCard> = (args) => (
  <FilePickerCard {...args} />
)

export const FilePickerCardImage = Template.bind({})

FilePickerCardImage.args = {
  fileName: 'SPREADSHEET',
  fileUrl: FileCard,
}
