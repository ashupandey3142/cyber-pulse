import DashBoardCard from '@/components/molecules/DashBoardCard'
import theme from '@/theme'
import { Divider, LinearProgress, Stack, styled } from '@mui/material'
import RiskContributor from '@Assets/image/CoverageImage.svg'
import HealthCard from '@Assets/image/HealthCard.svg'
import {
  ACTIVE,
  DASHBOARD_DATA,
  FAILED_PHISHING,
  NOT_PROTECTED,
  OVERDUE_TRAINING,
  TOOLING_COVERAGE_DATA,
  vulnerabilityData,
} from '@/utils/constant'
import Image from '@/components/atoms/Image'
import Typography from '@/components/atoms/Typography'
import FirstText from '@Assets/image/Textinput.svg'
import SecText from '@Assets/image/SecTextInput.svg'
import TwinTypo from '@/components/molecules/TwinTypo'
import Graph from '@/components/molecules/Graph'

const DashboardCardContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(4.5),
})
const BodyContainer = styled(Stack)({
  gap: theme.spacing(4),
  flexShrink: 0,
})

const VulnerabilityContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(10),
})

const DashboardCardBodyContainer = styled(Stack)({
  width: theme.spacing(86.25),
  display: 'flex',
  alignItems: 'center',
})
const ToolingCoverageBodyContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  textAlign: 'center',
  gap: theme.spacing(6),
})
const ToolingMainContainer = styled(Stack)({
  width: theme.spacing(184.75),
  display: 'flex',
  justifyContent: 'center',
  padding: '3.125rem 5.625rem',
  alignItems: 'center',
})
const ExportEngagementBodyContainer = styled(Stack)({
  width: theme.spacing(86.25),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(8),
})

const MFAMainContainer = styled(Stack)({
  display: 'flex',
  width: '21.5625rem',
  height: '11.4375rem',
  padding: '1.5rem 2.75re',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
})
const MFATextContainer = styled(Stack)({
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
})

const StyleLinearProgress = styled(LinearProgress)({
  width: 300,
  height: 140,
  borderRadius: 16,
  transform: 'rotate(180deg)',
  background: theme.palette.ampsec.STRUCTURAL_BACKGROUND,
})

const SecurityTrainingContainer = styled(Stack)({
  display: 'flex',
  padding: '3.8125rem 1.125rem',
  justifyContent: 'center',
  alignItems: 'center',
})
const SecurityTrainingBodyContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(4),
})

const SecurityTrainingTextContainer = styled(Stack)({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  gap: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyleDivider = styled(Divider)({
  width: '0.0625rem',
  height: '6.5625rem',
  background: theme.palette.ampsec.STROKE_100,
})
interface IDashboard {
  mfaValue: number
  mfaTotalApplication: string
  failedPhishing: string
  overdueTraining: string
  totalEmployees: string
  totalEndpoints: string
  crowdStrikes: string
  text: string
  graphLabels: string[]
  graphValues: number[]
}
const Dashboard = ({
  mfaValue,
  mfaTotalApplication,
  totalEmployees,
  totalEndpoints,
  crowdStrikes,
  text,
  graphLabels,
  graphValues,
  failedPhishing,
  overdueTraining,
}: IDashboard) => {
  return (
    <BodyContainer data-testid="dashboard-container">
      <DashboardCardContainer>
        <DashBoardCard
          title={DASHBOARD_DATA[0].title}
          subtitle={DASHBOARD_DATA[0].subtitle}
          width={'28vw'}
          child={<Image src={HealthCard} alt="health-card" />}
        />
        <DashBoardCard
          title={DASHBOARD_DATA[1].title}
          width={'28vw'}
          child={
            <Graph
              labels={graphLabels}
              graphValues={graphValues}
              width={'25vw'}
              height={'21.44'}
            />
          }
        />
        <DashBoardCard
          title={DASHBOARD_DATA[2].title}
          width={'28vw'}
          child={<Image src={RiskContributor} alt="risk-contributor" />}
        />
      </DashboardCardContainer>
      <DashboardCardContainer>
        <DashBoardCard
          title={DASHBOARD_DATA[3].title}
          isMaximize={true}
          width={'57vw'}
          child={
            <ToolingMainContainer data-testid="tooling-main-container">
              <VulnerabilityContainer>
                <ToolingCoverageBodyContainer>
                  <Stack gap={theme.spacing(1)}>
                    <TwinTypo
                      title={TOOLING_COVERAGE_DATA.total_emp}
                      subtitle={TOOLING_COVERAGE_DATA.increased_by}
                      titleVariant="body1"
                      increasedBy="32"
                    />
                    <Typography
                      color={theme.palette.text.highEmphasis}
                      variant="h2"
                      label={totalEmployees}
                    />
                  </Stack>
                  <Stack>
                    <TwinTypo
                      title={TOOLING_COVERAGE_DATA.total_end}
                      subtitle={TOOLING_COVERAGE_DATA.increased_by}
                      titleVariant="body1"
                      increasedBy="32"
                    />
                    <Typography
                      color={theme.palette.text.highEmphasis}
                      variant="h2"
                      label={totalEndpoints}
                    />
                  </Stack>
                </ToolingCoverageBodyContainer>
                <StyleDivider />
                <ToolingCoverageBodyContainer>
                  <Stack gap={theme.spacing(1)}>
                    <TwinTypo
                      title={TOOLING_COVERAGE_DATA.crowdStrike}
                      titleVariant="body1"
                      subtitle={ACTIVE}
                    />
                    <Typography
                      color={theme.palette.ampsec.GREEN}
                      variant="h2"
                      label={crowdStrikes}
                    />
                  </Stack>
                  <Stack>
                    <TwinTypo
                      title={TOOLING_COVERAGE_DATA.text}
                      titleVariant="body1"
                      subtitle={ACTIVE}
                    />
                    <Typography
                      color={theme.palette.ampsec.ORANGE}
                      variant="h2"
                      label={text}
                    />
                  </Stack>
                </ToolingCoverageBodyContainer>
              </VulnerabilityContainer>
            </ToolingMainContainer>
          }
        />
        <DashBoardCard
          title={DASHBOARD_DATA[4].title}
          isMaximize={true}
          width={'28vw'}
          child={
            <DashboardCardBodyContainer>
              <Stack gap={theme.spacing(5)}>
                <VulnerabilityContainer>
                  {vulnerabilityData[0].map((data) => (
                    <Stack
                      key={data.count}
                      gap={theme.spacing(0.5)}
                      textAlign={'center'}
                    >
                      <Typography
                        color={theme.palette.text.highEmphasis}
                        variant="h2"
                        label={data.count}
                      />
                      <Typography
                        color={data.color}
                        variant="body1"
                        label={data.severity}
                      />
                    </Stack>
                  ))}
                </VulnerabilityContainer>
                <VulnerabilityContainer>
                  {vulnerabilityData[1].map((data) => (
                    <Stack
                      key={data.severity}
                      gap={theme.spacing(0.5)}
                      textAlign={'center'}
                    >
                      <Typography
                        color={theme.palette.text.highEmphasis}
                        variant="h2"
                        label={data.count}
                      />
                      <Typography
                        color={data.color}
                        variant="body1"
                        label={data.severity}
                      />
                    </Stack>
                  ))}
                </VulnerabilityContainer>
              </Stack>
            </DashboardCardBodyContainer>
          }
        />
      </DashboardCardContainer>
      <DashboardCardContainer>
        <DashBoardCard
          title={DASHBOARD_DATA[5].title}
          subtitle={mfaTotalApplication + ' ' + DASHBOARD_DATA[5].subtitle}
          width={'28vw'}
          height={'32vh'}
          child={
            <MFAMainContainer>
              <MFATextContainer>
                <Typography
                  color={theme.palette.ampsec.RED}
                  variant="h2"
                  label={mfaValue.toString()}
                />
                <Typography
                  color={theme.palette.text.highEmphasis}
                  variant="body1"
                  label={NOT_PROTECTED}
                />
              </MFATextContainer>
              <StyleLinearProgress
                data-testid="linear-progress"
                variant="determinate"
                value={mfaValue}
              />
            </MFAMainContainer>
          }
        />
        <DashBoardCard
          title={DASHBOARD_DATA[6].title}
          isMaximize={true}
          width={'28vw'}
          height={'32vh'}
          child={
            <SecurityTrainingContainer>
              <SecurityTrainingBodyContainer>
                <SecurityTrainingTextContainer>
                  <Typography
                    variant="body1"
                    color={theme.palette.text.highEmphasis}
                    label={FAILED_PHISHING}
                  />
                  <Typography
                    variant="h2"
                    color={theme.palette.text.highEmphasis}
                    label={failedPhishing}
                  />
                </SecurityTrainingTextContainer>
                <SecurityTrainingTextContainer>
                  <Typography
                    variant="body1"
                    color={theme.palette.text.highEmphasis}
                    label={OVERDUE_TRAINING}
                  />
                  <Typography
                    variant="h2"
                    color={theme.palette.text.highEmphasis}
                    label={overdueTraining}
                  />
                </SecurityTrainingTextContainer>
              </SecurityTrainingBodyContainer>
            </SecurityTrainingContainer>
          }
        />
        <DashBoardCard
          title={DASHBOARD_DATA[7].title}
          isMaximize={true}
          width={'28vw'}
          height={'32vh'}
          child={
            <ExportEngagementBodyContainer>
              <Image src={FirstText} alt="first-text" />
              <Image src={SecText} alt="sec-text" />
            </ExportEngagementBodyContainer>
          }
        />
      </DashboardCardContainer>
    </BodyContainer>
  )
}

export default Dashboard
