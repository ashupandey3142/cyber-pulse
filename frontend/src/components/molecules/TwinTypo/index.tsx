import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { Stack } from '@mui/material'

interface TwinTypoProps {
  title: string
  titleVariant: 'subtitle3' | 'body1' | 'subtitle4' | 'h4'
  subtitle?: string
  increasedBy?: string
  subtitleVariant?: 'body4' | 'body6'
  subtitleColor?: string
}

const TwinTypo = ({
  title,
  titleVariant,
  subtitle,
  subtitleVariant,
  increasedBy,
  subtitleColor,
}: TwinTypoProps) => {
  return (
    <Stack gap={3} alignItems="center">
      <Typography
        label={title}
        variant={titleVariant}
        color={theme.palette.darkTheme.HIGH_EMPHASIS}
      />

      <Stack direction="row" gap={2}>
        <Typography
          label={subtitle ?? ''}
          variant={subtitleVariant}
          color={subtitleColor ?? theme.palette.darkTheme.MEDIUM_EMPHASIS}
        />
        <Typography
          label={increasedBy ?? ''}
          variant="body4"
          color={theme.palette.ampsec.GREEN}
        />
      </Stack>
    </Stack>
  )
}

export default TwinTypo
