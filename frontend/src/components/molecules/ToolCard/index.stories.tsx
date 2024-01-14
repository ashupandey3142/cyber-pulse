import ProfileIcon from '@Assets/icons/profile.svg'
import TrainingToolIcon from '@Assets/icons/trainingTool.svg'
import { type Meta, type StoryObj } from '@storybook/react'
import ToolCard from '.'

const meta: Meta<typeof ToolCard> = {
  title: 'Molecules/ToolCard',
  component: ToolCard,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#282030' }],
    },
  },
}
type Story = StoryObj<typeof ToolCard>

export const IdentityTool: Story = {
  args: {
    title: 'IDENTITY TOOLS',
    icon: ProfileIcon,
    sx: {
      width: '279px',
      height: '275px',
    },
  },
}

export const TrainingTool: Story = {
  args: {
    title: 'TRAINING TOOLS',
    icon: TrainingToolIcon,
    sx: {
      width: '279px',
      height: '275px',
    },
  },
}

export default meta
