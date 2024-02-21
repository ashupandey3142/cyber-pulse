import Typography from '@/components/atoms/Typography'
import SecurityDataTable from '@/components/organisms/SecurityDataTable'
import SideBar from '@/components/organisms/SideBar'
import IntegrationTemplate from '@/components/templates/IntegrateTemplate'
import useSecurityFindings from '@/hooks/useSecurityFindings'
import theme from '@/theme'
import { SECURITY_FINDINGS } from '@/utils/constant'
import { Stack } from '@mui/material'

const SecurityFindingPage = () => {
  const { securityFindingData } = useSecurityFindings()
  const handleNavClick = (id: number) => {
    // switch (id) {
    //   case 0:
    //     // TODO navigation to dashboard
    //     break
    //   case 1:
    //     // TODO navigation to security findings
    //     break
    //   case 3:
    //     // TODO navigation to integration
    //     break
    // }
  }
  const onSend = () => {
    // handle navigation
  }

  return (
    <IntegrationTemplate
      sidebar={<SideBar handleNavClick={handleNavClick} />}
      header={
        <Stack borderTop={theme.spacing(5)}>
          <Typography
            color={theme.palette.text.highEmphasis}
            variant="subtitle1"
            label={SECURITY_FINDINGS}
          />
        </Stack>
      }
      body={
        <SecurityDataTable
          rowData={securityFindingData}
          engageModalDropdownData={[]}
          onSend={onSend}
        />
      }
    />
  )
}

export default SecurityFindingPage
