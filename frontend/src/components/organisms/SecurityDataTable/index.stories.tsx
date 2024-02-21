import { Meta, StoryFn } from '@storybook/react'
import SecurityDataTable from '.'
import { transformIntoSecurityFindingData } from '@/utils/function'
import { serverData } from '@/components/mocks/mockData'
import theme from '@/theme'
import slack from '@Assets/icons/slack.svg'

export default {
  title: 'Organisms/SecurityDataTable',
  component: SecurityDataTable,
  parameters: {
    backgrounds: {
      default: 'dashboardBackground',
      values: [
        {
          name: 'dashboardBackground',
          value: theme.palette.ampsec.STRUCTURAL_BACKGROUND,
        },
      ],
    },
  },
} as Meta

const Template: StoryFn<typeof SecurityDataTable> = (args) => (
  <SecurityDataTable {...args} />
)

export const Default = Template.bind({})
Default.args = {
  rowData: transformIntoSecurityFindingData(serverData[0]),
  engageModalDropdownData: [
    { label: 'Slack', src: slack },
    { label: 'Google', src: slack },
  ],
}
