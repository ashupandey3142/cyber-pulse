import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import CircularProgress from '.'
import theme from '@/theme'

export default {
  component: CircularProgress,
  title: 'Atoms/CircularProgress',
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
} as Meta

const Template: StoryFn<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
)

export const Default = Template.bind({})
Default.args = {
  value: 50,
  size: 60,
}
