import { Box, Popover, Stack } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { SIGN_OUT } from '@/utils/constant'
import Sider from '@Assets/icons/Sider.png'
import USERIMAGE from '@Assets/icons/logout.svg'

interface LogoutProps {
  userName: string
  handleLogoutClick?: () => void
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleClose?: () => void
  anchorElement?: HTMLButtonElement | null
}

const LogoutContainer = styled(Stack)({
  display: 'flex',
  height: '5.625rem',
  width: '16.25rem',
  border: `0.5px solid ${theme.palette.text.mediumEmphasis}`,
  borderRadius: '0.25rem',
  background: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  gap: '0.375rem',
  paddingTop: '0.9375rem',
  justifyContent: 'flex-start',
})

const MuiButton = styled(Button)({
  width: '100%',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const PopupButton = styled(Button)({
  height: '2.625rem',
  width: '7.125rem',
  borderRadius: '0.25rem',
  border: `0.5px solid ${theme.palette.text.mediumEmphasis}`,
  position: 'relative',
  padding: '1.125rem',
  justifyContent: 'space-between',
})

const MuiTypography = styled(Typography)({ paddingLeft: '13px' })
const MuiBox = styled(Box)({
  marginTop: '387px',
})

const LogoutPopup: React.FC<LogoutProps> = ({
  userName,
  anchorElement,
  handleLogoutClick,
  handleClick,
  handleClose,
}) => {
  return (
    <MuiBox>
      <PopupButton
        startIcon={<Icon src={USERIMAGE} alt="Downsider" />}
        onClick={handleClick}
        label=""
      />
      <Popover
        open={Boolean(anchorElement)}
        anchorEl={anchorElement}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 790, left: 33 }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <LogoutContainer>
          <MuiTypography
            label={userName}
            variant="body1"
            color={theme.palette.text.mediumEmphasis}
          />
          <MuiButton
            label={SIGN_OUT}
            variant="outlined"
            backgroundColor={theme.palette.primary.main}
            textColor={theme.palette.darkTheme.MODAL_BG}
            typographyVariant="body1"
            onClick={handleLogoutClick}
            startIcon={<Icon src={Sider} alt="userImage" />}
          />
        </LogoutContainer>
      </Popover>
    </MuiBox>
  )
}

export default LogoutPopup
