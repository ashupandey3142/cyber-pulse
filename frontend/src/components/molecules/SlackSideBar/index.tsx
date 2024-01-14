import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import { SLACK_SIGN_IN_LINKS } from '@/components/mocks/mockData'
import theme from '@/theme'
import { SLACK_SIGN_IN_LABEL } from '@/utils/constant'
import ExternalLinkIcon from '@Assets/icons/externalLink.svg'
import GoogleIcon from '@Assets/icons/google.svg'
import { Stack, styled } from '@mui/material'

interface SlackSideBarProps {
  width?: string
  height?: string
}

const OuterStack = styled(Stack)({
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  padding: theme.spacing(5),
  gap: theme.spacing(12),
})

const googleIconStyle = {
  width: theme.spacing(20),
  height: theme.spacing(20),
}

const SlackSideBar = ({ width, height }: SlackSideBarProps) => {
  return (
    <OuterStack width={width} height={height}>
      <Stack alignItems="center">
        <Icon src={GoogleIcon} alt={'google-icon'} sx={googleIconStyle} />
        <Typography
          label={SLACK_SIGN_IN_LABEL}
          variant="subtitle4"
          color={theme.palette.darkTheme.HIGH_EMPHASIS}
          textAlign="center"
        />
      </Stack>
      <Stack gap={3}>
        {SLACK_SIGN_IN_LINKS.map((link) => (
          <Stack key={link.id} direction="row" gap={2}>
            <Typography
              label={link.name}
              variant="body5"
              color={theme.palette.primary.main}
            />
            <Icon src={ExternalLinkIcon} alt="external-link" />
          </Stack>
        ))}
      </Stack>
    </OuterStack>
  )
}

export default SlackSideBar
