import { Typography } from '@mui/material'
import { type Meta, type StoryObj } from '@storybook/react'
import Chip from '.'
import theme from '../../../theme/index'
import {
  INTEGRATED_CHIP_STYLE,
  NOT_CONFIGURED_CHIP_STYLE,
} from '../../../utils/constant'
const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
        },
        {
          name: 'darkblue',
          value: '#211A33',
        },
      ],
    },
  },
}
type Story = StoryObj<typeof Chip>

export const IntegratedChip: Story = {
  args: {
    label: <Typography variant="overline1">INTEGRATED</Typography>,
    sx: INTEGRATED_CHIP_STYLE,
  },
}

export const NotConfiguredChip: Story = {
  parameters: {
    backgrounds: { default: 'darkblue' },
  },
  args: {
    label: <Typography variant="body6">Not Configured</Typography>,
    sx: NOT_CONFIGURED_CHIP_STYLE,
  },
}

export default meta
