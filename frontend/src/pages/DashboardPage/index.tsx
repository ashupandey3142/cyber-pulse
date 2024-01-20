import DashBoardHeader from '@/components/molecules/DashBoardHeader'
import Dashboard from '@/components/organisms/Dashboard'
import SideBar from '@/components/organisms/SideBar'
import IntegrationTemplate from '@/components/templates/IntegrateTemplate'
import { DASHBOARD_TAB_VALUES } from '@/strings/string'
import theme from '@/theme'
import { EVERYONE, GRAPH_VALUE, TEXT_VALUE } from '@/utils/constant'
import useSecurityFindings from '@/hooks/useSecurityFindings'

const DashboardPage = () => {
  const {
    mfaValue,
    securityFindingData,
    failedPhishing,
    overdueTrainingData,
    graphLabels,
  } = useSecurityFindings()

  const handleNavClick = () => {
    // handle navigation
  }

  return (
    <IntegrationTemplate
      sidebar={<SideBar handleNavClick={handleNavClick} />}
      header={
        <DashBoardHeader
          buttonLabel={EVERYONE}
          tabValues={DASHBOARD_TAB_VALUES}
          deActiveTabColor={theme.palette.text.highEmphasis ?? ''}
          hasButtonLabel={true}
        />
      }
      body={
        <Dashboard
          mfaValue={mfaValue}
          mfaTotalApplication={securityFindingData.length.toString() ?? ''}
          failedPhishing={
            failedPhishing < 10
              ? '0' + failedPhishing
              : failedPhishing.toString()
          }
          overdueTraining={
            overdueTrainingData < 10
              ? '0' + overdueTrainingData.toString()
              : overdueTrainingData.toString()
          }
          totalEmployees={securityFindingData.length.toString() ?? ''}
          totalEndpoints={securityFindingData.length.toString() ?? ''}
          crowdStrikes={TEXT_VALUE}
          text={TEXT_VALUE}
          graphLabels={graphLabels}
          graphValues={GRAPH_VALUE}
        />
      }
    />
  )
}

export default DashboardPage
