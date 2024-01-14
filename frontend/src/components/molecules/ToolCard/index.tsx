import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { TOOLCARD_STRINGS } from '@/utils/constant'
import styled from '@emotion/styled'
import { Card, CardContent, Stack, SxProps } from '@mui/material'

interface ToolCardProps {
  icon: string
  title: string
  onClick?: () => void
  sx?: SxProps
}

const StyledCard = styled(Card)({
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  borderRadius: theme.spacing(2),
  cursor: 'pointer',
})

const StyledStack = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(5),
  gap: theme.spacing(3),
})

const ToolCard = ({ icon, title, onClick, sx }: ToolCardProps) => {
  return (
    <StyledCard onClick={onClick} sx={sx}>
      <CardContent>
        <StyledStack>
          <Icon src={icon} alt={TOOLCARD_STRINGS.ALT} onClick={onClick} />
          <Typography
            label={title}
            variant="subtitle4"
            color={theme.palette.darkTheme.HIGH_EMPHASIS}
          />
          <Typography
            label={TOOLCARD_STRINGS.SUBTITLE}
            variant="body6"
            color={theme.palette.text.lowEmphasis}
          />
          <Typography
            label={TOOLCARD_STRINGS.LINK}
            variant="button"
            color={theme.palette.primary.main}
            mt={5}
          />
        </StyledStack>
      </CardContent>
    </StyledCard>
  )
}

export default ToolCard
