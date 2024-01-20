import theme from '@/theme'
import { Stack, styled } from '@mui/material'

interface IntegrationTemplateProps {
  header: React.ReactNode
  sidebar: React.ReactNode
  body: React.ReactNode
}

const OuterStack = styled(Stack)({
  backgroundColor: theme.palette.ampsec.STRUCTURAL_BACKGROUND,
  height: '100%',
  width: '100%',
  flexDirection: 'row',
  gap: theme.spacing(4),
})

const InnerStack = styled(Stack)({
  gap: theme.spacing(5),
  paddingTop: theme.spacing(3),
  marginRight: theme.spacing(5),
})

const IntegrationTemplate = ({
  header,
  sidebar,
  body,
}: IntegrationTemplateProps) => {
  return (
    <OuterStack>
      <Stack height="100%">{sidebar}</Stack>
      <InnerStack>
        {header}
        {body}
      </InnerStack>
    </OuterStack>
  )
}

export default IntegrationTemplate
