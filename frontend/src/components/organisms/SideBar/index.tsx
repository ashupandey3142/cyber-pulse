import Typography from '@/components/atoms/Typography'
import NavItem from '@/components/molecules/NavItem'
import LogoutPopup from '@/components/molecules/PopupLogout'
import theme from '@/theme'
import { AMPLIFIER, DEFAULT_EMAIL, SIDEBAR } from '@/utils/constant'
import styled from '@emotion/styled'
import { Box, Stack, SxProps } from '@mui/material'
import React, { useState } from 'react'

interface SideBarProps {
  handleNavClick: (id: number) => void
  sx?: SxProps
}

const SideBarContainer = styled(Stack)({
  display: 'flex',
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  padding: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyleBox = styled(Box)(({ name }: { name: string }) => ({
  cursor:
    name === SIDEBAR[0].tabName || name === SIDEBAR[3].tabName
      ? 'pointer'
      : 'default',
}))

const MuiStack = styled(Stack)({
  marginTop: '1rem',
  gap: '12px',
})

const SideBar = ({ sx, handleNavClick }: SideBarProps) => {
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(
    null
  )
  const [isActive, setIsActive] = useState(0)
  const handleItemClick = (id: number) => {
    setIsActive(id)
    handleNavClick(id)
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  const handleLogoutClick = () => {
    // TODO will implement handle logout later :i.e navigate(-1)
  }

  return (
    <SideBarContainer sx={sx}>
      <Typography
        variant="subtitle1"
        label={AMPLIFIER}
        color={theme.palette.darkTheme.HIGH_EMPHASIS}
      />
      <MuiStack>
        {SIDEBAR.map((item, index) => (
          <StyleBox
            name={item.tabName}
            onClick={() => handleItemClick(index)}
            key={item.tabName}
          >
            <NavItem
              src={isActive == index ? item.selectedtSrc : item.unselectedSrc}
              alt={item.alt}
              label={item.tabName}
              sx={{
                color:
                  isActive == index
                    ? theme.palette.darkTheme.STRUCTURAL_CARD_BG
                    : theme.palette.darkTheme.HIGH_EMPHASIS,
                backgroundColor:
                  isActive == index
                    ? theme.palette.primary.main
                    : theme.palette.darkTheme.STRUCTURAL_CARD_BG,
              }}
            />
          </StyleBox>
        ))}
      </MuiStack>
      <LogoutPopup
        userName={DEFAULT_EMAIL}
        handleLogoutClick={handleLogoutClick}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorElement={anchorElement}
      />
    </SideBarContainer>
  )
}

export default SideBar
