import { TypographyVariant } from '@/utils/type'
import {
  Button as MuiButton,
  ButtonProps,
  Typography,
  SxProps,
} from '@mui/material'

interface ButtonComponentProps extends ButtonProps {
  label: string
  textColor?: string
  sx?: SxProps
  backgroundColor?: string
  disableColor?: string
  typographyVariant?: TypographyVariant
}
const Button = ({
  label,
  textColor,
  backgroundColor,
  sx,
  disableColor,
  typographyVariant,
  ...buttonProps
}: ButtonComponentProps) => {
  const hoverStyles: SxProps = {
    '&:hover': {
      backgroundColor: backgroundColor ?? 'inherit',
    },
    '&:disabled': {
      backgroundColor: disableColor ?? 'inherit',
    },
  }
  return (
    <MuiButton
      data-testid="button"
      sx={{ backgroundColor: { backgroundColor }, ...sx, ...hoverStyles }}
      type="button"
      {...buttonProps}
    >
      <Typography color={textColor} variant={typographyVariant}>
        {label}
      </Typography>
    </MuiButton>
  )
}

export default Button
