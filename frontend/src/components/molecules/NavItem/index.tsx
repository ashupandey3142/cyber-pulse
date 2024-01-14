import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { Box, SxProps, styled } from '@mui/material'

interface INavItem {
  src: string
  alt: string
  label: string
  sx?: SxProps
  onClick?: () => void
}

const Nav = styled(Box)({
  padding: `${theme.spacing(1.5)} 0`,
  gap: theme.spacing(0.5),
  width: theme.spacing(28.5),
  height: theme.spacing(19.5),
  borderRadius: theme.spacing(2),
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
})

const NavItem = ({ src, sx, alt, label, onClick }: INavItem) => {
  return (
    <Nav data-testid="nav-item" onClick={onClick} sx={sx}>
      <Icon src={src} alt={alt} />
      <Typography variant="caption1" label={label} />
    </Nav>
  )
}

export default NavItem
