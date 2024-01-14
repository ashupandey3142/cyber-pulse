import * as React from 'react'
import Popover from '@mui/material/Popover'
import styled from '@emotion/styled'
import ChevronDown from '../../../../public/assets/icons/cheverondown.svg'
import { Card, MenuItem } from '@mui/material'
import { ActionProps } from '@/utils/interfaces'
import { ACTION, NO_OPTION } from '@/utils/constant'
import theme from '@/theme'
import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

interface DropDownCardProps {
  cardData?: ActionProps[]
  selectedId: number
  handleClick: (id: number) => void
}

const OuterContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
})

const CustomMenuItem = styled(MenuItem)({
  height: '2.375rem',
  width: '100%',
  textAlign: 'left',
})

const ButtonStyle = {
  height: '2.25rem',
  width: '6.875rem',
  backgroundColor: '#9975FF',
}

const StyledMenu = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  height: '7.125rem',
  width: '9rem',
})

const MuiPopover = styled(Popover)({
  marginTop: '0.3125rem',
  display: 'flex',
})

const BLACK_COLOR = theme.palette.ampsec.BLUE_TEXT_HIGH
const SURFACE_COLOR = theme.palette.primary.main
const HIGH_EMPHASIS_COLOR = theme.palette.darkTheme.SURFACE_EMPHASIS

const DropDown: React.FC<DropDownCardProps> = ({
  cardData,
  selectedId,
  handleClick,
}: DropDownCardProps) => {
  const [engage, setEngage] = React.useState<HTMLButtonElement | null>(null)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEngage(event.currentTarget)
  }

  const handleClose = () => {
    setEngage(null)
  }
  const open = Boolean(engage)

  return (
    <OuterContainer>
      <Button
        variant="contained"
        style={ButtonStyle}
        typographyVariant="button"
        textColor={BLACK_COLOR}
        endIcon={<img src={ChevronDown} alt="chevron-down" />}
        onClick={handleOpen}
        label={ACTION}
      ></Button>

      {cardData && cardData.length > 0 ? (
        <MuiPopover
          data-testid="popover"
          open={open}
          anchorEl={engage}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <StyledMenu onClick={handleClose} data-testid="dropdown-button">
            {cardData.map((card) => (
              <CustomMenuItem
                key={card.id}
                style={{
                  background:
                    selectedId === card.id ? SURFACE_COLOR : BLACK_COLOR,
                }}
                onClick={() => handleClick(card.id)}
              >
                <Typography
                  typographyVariant="body2"
                  style={{
                    color:
                      selectedId === card.id
                        ? BLACK_COLOR
                        : HIGH_EMPHASIS_COLOR,
                  }}
                  label={card.label}
                />
              </CustomMenuItem>
            ))}
          </StyledMenu>
        </MuiPopover>
      ) : (
        <CustomMenuItem data-testid="dropdown-button1">
          <Typography
            typographyVariant="body2"
            color={HIGH_EMPHASIS_COLOR}
            label={NO_OPTION}
          />
        </CustomMenuItem>
      )}
    </OuterContainer>
  )
}

export default DropDown
