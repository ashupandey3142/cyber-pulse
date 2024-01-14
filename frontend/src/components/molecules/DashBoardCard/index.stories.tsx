import Image from '@/components/atoms/Image'
import RiskContributor from '@Assets/image/CoverageImage.svg'
import HealthCard from '@Assets/image/HealthCard.svg'
import ToolingCoverage from '@Assets/image/ToolingCoverage.svg'
import { type Meta, type StoryObj } from '@storybook/react'
import DashBoardCard from '.'

const meta: Meta<typeof DashBoardCard> = {
  title: 'Molecules/DashBoardCard',
  component: DashBoardCard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dashboardBackground',
      values: [{ name: 'dashboardBackground', value: '#534D66' }],
    },
  },
}
type Story = StoryObj<typeof DashBoardCard>

export const SecurityHealth: Story = {
  args: {
    title: 'SECURITY HEALTH',
    subtitle: '4,345 self-healed findings',
    child: <Image src={HealthCard} alt="health-card" />,
    width: '377px',
  },
}

export const ToolingCoverageStory: Story = {
  args: {
    title: 'TOOLING COVERAGE',
    child: <Image src={ToolingCoverage} alt="tooling-coverage" />,
    isMaximize: true,
    width: '771px',
  },
}

export const RiskContributorsStory: Story = {
  args: {
    title: 'RISK CONTRIBUTORS',
    child: <Image src={RiskContributor} alt="risk-contributor" />,
    isMaximize: true,
    width: '377px',
  },
}

export default meta
