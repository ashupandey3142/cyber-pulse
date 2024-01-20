import DashBoardHeader from '@/components/molecules/DashBoardHeader'
import IntegrationHeader from '@/components/molecules/IntegrationHeader'
import ToolsCollection from '@/components/molecules/ToolsCollection'
import Dashboard from '@/components/organisms/Dashboard'
import SideBar from '@/components/organisms/SideBar'
import { DASHBOARD_TAB_VALUES } from '@/strings/string'
import theme from '@/theme'
import { EVERYONE, MONTH } from '@/utils/constant'
import { type Meta, type StoryObj } from '@storybook/react'
import IntegrationTemplate from '.'
const meta: Meta<typeof IntegrationTemplate> = {
  title: 'Template/IntegrationTemplate',
  component: IntegrationTemplate,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'darkblue',
          value: '#2d2832',
        },
      ],
    },
  },
}
type Story = StoryObj<typeof IntegrationTemplate>

export const DashBoardStory: Story = {
  args: {
    sidebar: <SideBar handleNavClick={() => {}} />,
    header: (
      <DashBoardHeader
        tabValues={DASHBOARD_TAB_VALUES}
        deActiveTabColor={theme.palette.text.highEmphasis ?? ''}
        hasButtonLabel={true}
        buttonLabel={EVERYONE}
      />
    ),
    body: (
      <Dashboard
        mfaValue={12}
        mfaTotalApplication={'194'}
        failedPhishing={'06'}
        overdueTraining={'40'}
        totalEmployees={'300'}
        totalEndpoints={'300'}
        crowdStrikes={'12'}
        text={'12'}
        graphLabels={MONTH}
        graphValues={[25, 20, 15, 50.9, 45, 30]}
      />
    ),
  },
}

export const Integration: Story = {
  args: {
    sidebar: <SideBar handleNavClick={() => {}} />,
    header: (
      <IntegrationHeader
        label={'INTEGRATIONS'}
        hasButtonLabel={false}
        buttonLabel={'ADD NEW'}
      />
    ),
    body: <ToolsCollection />,
  },
}
export default meta
