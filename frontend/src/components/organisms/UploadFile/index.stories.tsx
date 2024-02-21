import FileContextProvider from '@/context/FileContext'
import { type Meta, type StoryObj } from '@storybook/react'
import UploadFile from '.'

const meta: Meta<typeof UploadFile> = {
  title: 'ORGANISMS/UploadFile',
  component: UploadFile,
  decorators: [
    (Story) => (
      <FileContextProvider>
        <Story />
      </FileContextProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#282030' }],
    },
  },
}
type Story = StoryObj<typeof UploadFile>

export const Default: Story = {
  args: {},
}

export default meta
