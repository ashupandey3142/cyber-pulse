import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { INFO_HEADER } from '@/utils/constant'
import InfoIcon from '@Assets/icons/infoIcon.svg'
import { Stack, styled } from '@mui/material'

const OuterStack = styled(Stack)({
  flexDirection: 'row',
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_100,
  gap: theme.spacing(3),
  padding: theme.spacing(5),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.darkTheme.STROKE_400}`,
})

const InfoHeader = () => {
  return (
    <OuterStack>
      <Icon src={InfoIcon} alt="info-icon" />
      <Stack gap={3}>
        <Typography
          label={INFO_HEADER.TITLE}
          variant="body1"
          color={theme.palette.darkTheme.HIGH_EMPHASIS}
        />
        <Typography
          label={INFO_HEADER.SUBTITLE}
          variant="body6"
          color={theme.palette.darkTheme.HIGH_EMPHASIS}
        />
      </Stack>
    </OuterStack>
  )
}

export default InfoHeader
