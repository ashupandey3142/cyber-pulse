import { Meta, StoryFn } from '@storybook/react'
import SnackBar from '.'

export default {
  title: 'Molecules/SnackBar',
  component: SnackBar,
  argTypes: {
    handleClose: {
      action: 'clicked',
    },
  },
} as Meta

const Template: StoryFn<typeof SnackBar> = (args) => <SnackBar {...args} />

export const SnackBarDefault = Template.bind({})
SnackBarDefault.args = {
  topPosition: '',
  open: true,
  snackMessage: 'Message sent to the employees successfully.',
}

export const SnackBarWithTopPosition = Template.bind({})
SnackBarWithTopPosition.args = {
  topPosition: '1rem',
  open: true,
  snackMessage: 'Message sent to the employees successfully.',
}
