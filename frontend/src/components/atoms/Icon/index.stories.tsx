import { type Meta, type StoryObj } from '@storybook/react'
import Icon from '.'
import CheckLogo from '../../../../public/assets/icons/check.svg'
import FileIcon from '../../../../public/assets/icons/file.svg'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof Icon>

export const FileIconStory: Story = {
  args: {
    src: FileIcon,
    alt: 'file icon',
  },
}

export const CheckLogoStory: Story = {
  args: {
    src: CheckLogo,
    alt: 'check logo',
  },
}

export default meta
