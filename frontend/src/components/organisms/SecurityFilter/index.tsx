import Checkbox from '@/components/atoms/Checkbox'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { APPLY, CLEAR, FILTER_MENU, ISSUE_TYPE_MENU } from '@/utils/constant'
import { Box, MenuItem, Popover, Stack, styled } from '@mui/material'
import { useState } from 'react'
import Button from '@/components/atoms/Button'

interface ISecurityFilter {
  filterOpen: boolean
  anchorElement?: Element | null
  selectedId: number
  handleClear?: () => void
  handleApply?: () => void
  handleCheckboxClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onPopupClose?: () => void
}

const ActiveMenu = styled(MenuItem)({
  background: theme.palette.primary.main,
  color: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  ':hover': {
    background: theme.palette.primary.main,
    color: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  },
})

const DeActiveMenu = styled(MenuItem)({
  color: theme.palette.text.highEmphasis,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  ':hover': {
    background: theme.palette.primary.main,
    color: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  },
})

const FilterMenuContainer = styled(Box)({
  width: theme.spacing(60),
  padding: `${theme.spacing(2)} 0`,
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.ampsec.STRUCTURAL_BACKGROUND,
})

const PopupContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: theme.spacing(60),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.ampsec.STROKE_100}`,
  backgroundColor: theme.palette.ampsec.STRUCTURAL_BACKGROUND,
})

const BottomContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
})

const StyleCheckbox = styled(Checkbox)({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  color: theme.palette.text.highEmphasis,
  '& + span': {
    fontSize: theme.spacing(3.75),
    fontWeight: 400,
    marginLeft: 0,
    color: theme.palette.text.highEmphasis,
  },
  ':hover': {
    background: theme.palette.primary.main,
    color: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  },
})

const StylePropOver = styled(Popover)({
  marginLeft: theme.spacing(0.5),
})
const CheckboxContainer = styled(Stack)({
  borderBottom: `1px solid ${theme.palette.ampsec.STROKE_100}`,
})

const CheckboxTab = styled(Stack)({
  background: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  color: theme.palette.text.highEmphasis,
  ':hover': {
    background: theme.palette.primary.main,
    color: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  },
})
const ApplyButton = styled(Button)({
  color: theme.palette.ampsec.STRUCTURAL_BACKGROUND,
})

const SecurityFilter = ({
  filterOpen,
  anchorElement,
  selectedId,
  handleClear,
  handleCheckboxClick,
  handleApply,
  onPopupClose,
}: ISecurityFilter) => {
  const [anchor, setAnchor] = useState<Element | null>(null)

  const handlePopClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setAnchor(null)
  }

  const open = Boolean(anchor)

  return (
    <Stack>
      <Popover
        data-testid="filter-popup"
        open={filterOpen}
        onClose={onPopupClose}
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <FilterMenuContainer>
          {FILTER_MENU.map((menu) =>
            menu.id === selectedId ? (
              <ActiveMenu key={menu.id} onClick={handlePopClick}>
                <Typography variant="body2" label={menu.label} />
              </ActiveMenu>
            ) : (
              <DeActiveMenu key={menu.id}>
                <Typography variant="body3" label={menu.label} />
              </DeActiveMenu>
            )
          )}

          <StylePropOver
            data-testid="issue-type-popup"
            open={open}
            anchorEl={anchor}
            onClose={handleClose}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <PopupContainer>
              <CheckboxContainer>
                {ISSUE_TYPE_MENU.map((menu) => (
                  <CheckboxTab key={menu.id}>
                    <StyleCheckbox
                      label={menu.label}
                      onClick={handleCheckboxClick}
                    />
                  </CheckboxTab>
                ))}
              </CheckboxContainer>
              <BottomContainer>
                <Button
                  data-testid="clear-button"
                  typographyVariant="button2"
                  variant="text"
                  onClick={handleClear}
                  label={CLEAR}
                />
                <ApplyButton
                  data-testid="apply-button"
                  backgroundColor={theme.palette.primary.main}
                  typographyVariant="button2"
                  variant="contained"
                  onClick={handleApply}
                  label={APPLY}
                />
              </BottomContainer>
            </PopupContainer>
          </StylePropOver>
        </FilterMenuContainer>
      </Popover>
    </Stack>
  )
}

export default SecurityFilter
