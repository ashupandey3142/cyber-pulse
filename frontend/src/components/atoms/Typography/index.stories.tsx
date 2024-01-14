import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Typography from '.'
import theme from '@/theme'

export default {
  component: Typography,
  title: 'Atoms/Typography',
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

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'DASHBOARD SIGN UP',
  textColor: theme.palette.text.highEmphasis,
  typographyVariant: 'h6',
}

export const Email = Template.bind({})
Email.args = {
  label: 'EMAIL',
  textColor: theme.palette.text.mediumEmphasis,
  typographyVariant: 'body3',
}
