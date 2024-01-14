import theme from '@/theme'
import TextField from '.'
import { Meta, StoryFn } from '@storybook/react'
import searchIcon from '@Assets/icons/search_icon.svg'

export default {
  component: TextField,
  title: 'Atoms/TextField',
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

const Template: StoryFn<typeof TextField> = (args) => <TextField {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'example@gmail.com',
  type: 'email',
  sx: { width: theme.spacing(100) },
}

export const SearchField = Template.bind({})
SearchField.args = {
  placeholder: 'Search',
  type: 'text',
  sx: { width: theme.spacing(85) },
  InputProps: {
    startAdornment: (
      <img
        src={searchIcon}
        alt="search"
        width={theme.spacing(4.5)}
        style={{ marginRight: theme.spacing(2) }}
      />
    ),
  },
}
