import theme from '@/theme'
import { type Meta, type StoryObj } from '@storybook/react'
import TwinTypo from '.'

const meta: Meta<typeof TwinTypo> = {
  title: 'Molecules/TwinTypo',
  component: TwinTypo,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dashboardBackground',
      values: [{ name: 'dashboardBackground', value: '#1A161E' }],
    },
  },
}
type Story = StoryObj<typeof TwinTypo>

export const SecurityHealth: Story = {
  args: {
    title: 'SECURITY HEALTH',
    subtitle: '4,345 self-healed findings',
    titleVariant: 'subtitle3',
    subtitleVariant: 'body4',
  },
}

export const HealthTrend: Story = {
  args: {
    title: 'HEALTH TREND',
    titleVariant: 'subtitle3',
  },
}

export const TotalEmployees: Story = {
  args: {
    title: 'TOTAL EMPLOYEES',
    subtitle: 'Increased by',
    titleVariant: 'body1',
    subtitleVariant: 'body4',
    increasedBy: '32',
  },
}

export const IdentityTools: Story = {
  args: {
    title: 'VULNERABILITY TOOLS',
    titleVariant: 'subtitle4',
    subtitle: 'NO TOOLS INTEGRATED',
    subtitleVariant: 'body6',
  },
}

export const GoogleSSO: Story = {
  args: {
    title: 'Google SSO',
    titleVariant: 'h4',
    subtitle: 'Social connections',
    subtitleVariant: 'body4',
    subtitleColor: theme.palette.text.lowEmphasis,
  },
}
export default meta
