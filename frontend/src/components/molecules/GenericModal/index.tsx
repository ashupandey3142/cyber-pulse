import {
  Divider,
  Modal as MuiModal,
  Stack,
  Typography,
  styled,
} from '@mui/material'
import BackIcon from '../../../../public/assets/icons/backIcon.svg'
import CrossIcon from '../../../../public/assets/icons/crossIcon.svg'
import theme from '../../../theme'
import Icon from '../../atoms/Icon'

interface GenericModalProps {
  title: string
  open: boolean
  onCloseClick?: () => void
  onBackButtonClick?: () => void
  children?: React.ReactNode
  isBackIcon?: boolean
  onBackDropClose?: () => void
}

const ModalOverlay = styled(Stack)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.darkTheme.MODAL_BG,
  color: theme.palette.darkTheme.HIGH_EMPHASIS,
  borderRadius: 8,
  border: `1px solid ${theme.palette.darkTheme.STROKE_400}`,
  outline: 'none',
})

const StyledDivider = styled(Divider)({
  backgroundColor: theme.palette.darkTheme.STROKE_400,
})

const OuterStack = styled(Stack)({
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  margin: theme.spacing(2),
  padding: theme.spacing(2),
})

const InnerStack = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
})

const GenericModal = ({
  title,
  isBackIcon,
  children,
  open,
  onBackButtonClick,
  onCloseClick,
  onBackDropClose,
}: GenericModalProps) => {
  return (
    <MuiModal open={open} onClose={onBackDropClose}>
      <ModalOverlay>
        <OuterStack>
          <InnerStack>
            {isBackIcon && (
              <Icon
                src={BackIcon}
                alt="back-icon"
                onClick={onBackButtonClick}
              />
            )}
            <Typography variant="subtitle2">{title}</Typography>
          </InnerStack>
          <Icon src={CrossIcon} alt="cross-icon" onClick={onCloseClick} />
        </OuterStack>
        <StyledDivider />
        {children}
      </ModalOverlay>
    </MuiModal>
  )
}

export default GenericModal
