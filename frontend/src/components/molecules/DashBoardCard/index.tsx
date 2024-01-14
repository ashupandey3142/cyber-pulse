import Icon from '@/components/atoms/Icon'
import theme from '@/theme'
import MaximizeIcon from '@Assets/icons/maximize.svg'
import styled from '@emotion/styled'
import { Box, Card, CardContent, Stack } from '@mui/material'
import TwinTypo from '../TwinTypo'

interface DashBoardCardProps {
  title: string
  subtitle?: string
  child: React.ReactNode
  isMaximize?: boolean
  width?: string
  height?: string
}

const StyledCard = styled(Card)({
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  display: 'flex',
  alignItems: 'center',
})

const DashBoardCard = ({
  title,
  child,
  subtitle,
  isMaximize,
  width,
  height,
}: DashBoardCardProps) => {
  return (
    <StyledCard sx={{ width: width, height: height }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent={isMaximize ? 'space-between' : 'center'}
        >
          <Box />
          <TwinTypo
            title={title}
            titleVariant="subtitle3"
            subtitle={subtitle}
            subtitleVariant="body4"
          />
          {isMaximize && <Icon src={MaximizeIcon} alt="maximize" />}
        </Stack>
        {child}
      </CardContent>
    </StyledCard>
  )
}

export default DashBoardCard
