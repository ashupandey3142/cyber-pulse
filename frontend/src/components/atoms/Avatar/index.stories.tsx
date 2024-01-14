import { type Meta, type StoryObj } from '@storybook/react'
import Avatar from '.'
import AvatarPic from '../../../../public/assets/icons/avtar.svg'
const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof Avatar>

export const AvatarWithPic: Story = {
  args: {
    src: AvatarPic,
    alt: 'Avatar with pic',
  },
}

export const AvatarWithOutPic: Story = {
  args: {
    alt: 'Avatar without pic',
  },
}

export default meta
