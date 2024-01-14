import { TypographyVariant } from '@/utils/type'
import { Typography as MuiTypography, TypographyProps } from '@mui/material'
interface TypographyComponentProps extends TypographyProps {
  label: string
  textColor?: string
  typographyVariant?: TypographyVariant
}
const Typography = ({
  label,
  textColor,
  typographyVariant,
  ...typographyProps
}: TypographyComponentProps) => {
  return (
    <MuiTypography
      variant={typographyVariant}
      color={textColor}
      {...typographyProps}
    >
      {label}
    </MuiTypography>
  )
}

export default Typography
