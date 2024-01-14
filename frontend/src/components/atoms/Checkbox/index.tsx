import {
  Checkbox as MuiCheckBox,
  CheckboxProps,
  FormControlLabel,
} from '@mui/material'
import { SxProps } from '@mui/system'

export interface MuiCheckboxProps extends CheckboxProps {
  label?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  sx?: SxProps
  style?: React.CSSProperties
  disabled?: boolean
  checked?: boolean
}

const Checkbox: React.FC<MuiCheckboxProps> = ({
  label,
  style,
  sx,
  disabled = false,
  checked,
  onChange,
  ...muiCheckboxProps
}) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckBox
          onChange={onChange}
          style={style}
          sx={sx}
          disabled={disabled}
          checked={checked}
          {...muiCheckboxProps}
        />
      }
      label={label}
    />
  )
}
export default Checkbox
