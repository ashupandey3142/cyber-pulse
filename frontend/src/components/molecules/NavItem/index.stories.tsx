import { Meta, StoryFn } from '@storybook/react'
import NavItem from '.'
import HealthDashboard from '@Assets/icons/HealthDashboard.svg'
import SecurityFinding from '@Assets/icons/SecurityFinding.svg'
import theme from '@/theme'

export default {
  component: NavItem,
  title: 'Molecules/NavItem',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
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

const Template: StoryFn<typeof NavItem> = (args) => <NavItem {...args} />

export const ActiveNav = Template.bind({})
ActiveNav.args = {
  src: HealthDashboard,
  alt: 'Dashboard',
  label: 'HEALTH DASHBOARD',
  sx: {
    color: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
    backgroundColor: theme.palette.primary.main,
  },
}

export const DeActiveNav = Template.bind({})
DeActiveNav.args = {
  src: SecurityFinding,
  alt: 'Dashboard',
  label: 'SECURITY FINDINGS',
  sx: {
    color: theme.palette.text.highEmphasis,
  },
}
