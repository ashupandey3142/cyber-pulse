import Chip from '@/components/atoms/Chip'
import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { SOCIAL_CARD_STRING } from '@/utils/constant'
import styled from '@emotion/styled'
import { Card, CardContent, Divider, Stack, SxProps } from '@mui/material'

interface SocialCardProps {
  icon: string
  title: string
  onClick?: () => void
  isIntegrated?: boolean
  sx?: SxProps
}

const StyledCard = styled(Card)({
  backgroundColor: theme.palette.darkTheme.SOCIAL_CARD_BG,
  borderRadius: theme.spacing(2),
  cursor: 'pointer',
})

const StyledStack = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(5),
})

const StyledDivider = styled(Divider)({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  margin: theme.spacing(5),
})

const StyledIcon = styled(Icon)({
  width: theme.spacing(19.25),
  height: theme.spacing(19.25),
})

const StyledChip = styled(Chip)({
  borderRadius: theme.spacing(7),
  display: 'flex',
  alignSelf: 'flex-start',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.darkTheme.CHIP,
  border: `1px solid ${theme.palette.primary.main}`,
})

const SocialCard = ({
  icon,
  title,
  onClick,
  isIntegrated,
  sx,
}: SocialCardProps) => {
  return (
    <StyledCard
      onClick={onClick}
      sx={{ opacity: isIntegrated ? 0.5 : 1, ...sx }}
    >
      <CardContent>
        <StyledStack>
          {isIntegrated && (
            <StyledChip
              label={<Typography variant="overline1" label={'INTEGRATED'} />}
            />
          )}
          <StyledIcon
            src={icon}
            alt={SOCIAL_CARD_STRING.ALT}
            onClick={onClick}
          />
          <Stack alignItems="center" gap={2}>
            <Typography
              label={title}
              variant="h4"
              color={theme.palette.darkTheme.HIGH_EMPHASIS}
            />
            <Typography
              label={SOCIAL_CARD_STRING.SUBTITLE}
              variant="body4"
              color={theme.palette.text.lowEmphasis}
            />
          </Stack>
          <StyledDivider />
          <Typography
            label={SOCIAL_CARD_STRING.DESCRIPTION}
            variant="body6"
            color={theme.palette.darkTheme.HIGH_EMPHASIS}
            textAlign="center"
          />
        </StyledStack>
      </CardContent>
    </StyledCard>
  )
}

export default SocialCard
