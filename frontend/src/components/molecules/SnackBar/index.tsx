import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import CompleteIcon from '@Assets/icons/check_circle.svg'
import CloseIcon from '@Assets/icons/closeIconsnack.svg'
import styled from '@emotion/styled'
import { IconButton, Stack } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import { SyntheticEvent } from 'react'

interface SnackbarProps {
  topPosition: string
  snackMessage: string
  open: boolean
  handleClose: (event: Event | SyntheticEvent<unknown, Event>) => void
}

const CustomSnackbar = styled(Snackbar)(
  ({ topPosition }: { topPosition: string }) => ({
    position: 'absolute',
    top: topPosition,
    '& .MuiSnackbarContent-root': {
      minWidth: '18.75rem',
      height: '3.75rem',
      borderRadius: '0.35rem',
      background: theme.palette.ampsec.STRUCTURAL_BACKGROUND,
      border: `1.8px solid ${theme.palette.ampsec.GREEN}`,
    },
  })
)

const StyledIcon = styled(Icon)({
  position: 'relative',
  bottom: theme.spacing(4),
})
const MuiStack = styled(Stack)({ gap: '0.625rem', height: '0.625rem' })
const SnackBar = ({
  topPosition,
  open,
  handleClose,
  snackMessage,
}: SnackbarProps) => {
  const action = (
    <IconButton onClick={handleClose}>
      <StyledIcon src={CloseIcon} alt="closeIcon" />
    </IconButton>
  )

  return (
    <CustomSnackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={
        <MuiStack direction="row" alignItems="center">
          <Icon src={CompleteIcon} alt="completeIcon" />
          <Typography
            label={snackMessage}
            typographyVariant="caption2"
            textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
            width={theme.spacing(56)}
          />
        </MuiStack>
      }
      action={action}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      topPosition={topPosition}
    />
  )
}

export default SnackBar
