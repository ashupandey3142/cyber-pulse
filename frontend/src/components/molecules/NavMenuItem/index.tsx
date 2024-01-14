import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import {
  MenuItem,
  MenuList,
  Paper,
  Stack,
  SxProps,
  styled,
} from '@mui/material'

interface MenuItem {
  label: string
  value: string
}

interface NavMenuItemProps {
  items: MenuItem[]
  sx?: SxProps
}

const StyledPaper = styled(Paper)({
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  borderRadius: theme.spacing(2),
})

const StyledMenuItem = styled(MenuItem)({
  margin: '0px 9px',
  borderRadius: theme.spacing(1),
  color: theme.palette.darkTheme.HIGH_EMPHASIS,
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.darkTheme.MODAL_BG,
  },
})

const NavMenuItem = ({ items, sx }: NavMenuItemProps) => {
  return (
    <StyledPaper sx={sx}>
      <MenuList>
        {items.map((item) => (
          <StyledMenuItem key={item.label}>
            <Stack
              justifyContent="space-between"
              direction="row"
              width="100%"
              p={2}
            >
              <Typography label={item.label} variant="body2" />
              <Typography label={item.value} variant="body2" />
            </Stack>
          </StyledMenuItem>
        ))}
      </MenuList>
    </StyledPaper>
  )
}

export default NavMenuItem
