import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import {
  LAST_UPDATE,
  LAST_UPDATE_TIME,
  STATUS,
  UPDATE_TIME,
} from '@/utils/constant'
import VERTICALCIRCLE from '@Assets/icons/Vertical container.svg'
import styled from '@emotion/styled'
import { Box, Grid, Stack } from '@mui/material'

interface DisableSocialCardProps {
  socialLabel: string
  socialIcon: string
  isActive: boolean
  onToggleClick?: () => void
}

const OuterContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '128px',
  borderRadius: '8px',
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  border: `1px solid ${theme.palette.darkTheme.STROKE_400}`,
})

const GoogleBox = styled(Grid)({
  display: 'flex',
  marginLeft: '10px',
  gap: '5px',
})

const TypoBox = styled(Stack)({
  display: 'flex',
  marginTop: '5px',
  gap: '8px',
})

const InnerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

const DisableBox = styled(Box)({
  display: 'flex',
  marginRight: '16px',
})

const IconBox = styled('div')({
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
})

const DisableSocialCard = ({
  isActive,
  socialLabel,
  socialIcon,
  onToggleClick,
}: DisableSocialCardProps) => {
  return (
    <OuterContainer>
      <GoogleBox>
        <Icon src={socialIcon} alt="GoogleSignIn" />
        <TypoBox>
          <Typography
            label={socialLabel}
            color={theme.palette.darkTheme.HIGH_EMPHASIS}
            variant="h4"
          />
          <InnerBox>
            <IconBox>
              <Typography
                label={STATUS}
                color={theme.palette.darkTheme.MEDIUM_EMPHASIS}
                variant="body6"
              />
              <Icon src={VERTICALCIRCLE} alt="Vertical" />
            </IconBox>
            <Stack direction="row" gap={1}>
              <Typography
                color={theme.palette.darkTheme.MEDIUM_EMPHASIS}
                label={LAST_UPDATE}
                variant="body4"
              />
              <Typography
                color={theme.palette.darkTheme.MEDIUM_EMPHASIS}
                label={LAST_UPDATE_TIME}
                variant="body3"
              />
              <Typography
                color={theme.palette.darkTheme.MEDIUM_EMPHASIS}
                label={UPDATE_TIME}
                variant="body4"
              />
            </Stack>
          </InnerBox>
        </TypoBox>
      </GoogleBox>
      <DisableBox>
        <Button
          variant="outlined"
          label={isActive ? 'ENABLE' : 'DISABLE'}
          typographyVariant="button"
          textColor={theme.palette.primary.main}
          onClick={onToggleClick}
        />
      </DisableBox>
    </OuterContainer>
  )
}

export default DisableSocialCard
