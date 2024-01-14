import theme from '@/theme'
import {
  TextField as MuiTextField,
  TextFieldProps,
  styled,
} from '@mui/material'
import React from 'react'

export type CustomTextFieldProps = TextFieldProps & {
  children?: React.ReactNode | string
  variant?: 'standard' | 'outlined' | 'filled'
  placeholder?: string
  sx?: object
  InputProps?: object
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  error?: boolean
  helperText?: string
  default?: string
  size?: 'medium' | 'small'
  type?: string
  value?: string
}

const CustomField = styled(MuiTextField)({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.palette.text.lowEmphasis}`,
  borderRadius: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.text.mediumEmphasis,
      color: theme.palette.text.mediumEmphasis,
      borderBottom: `1px solid ${theme.palette.text.mediumEmphasis}`,
    },
    '& .MuiInputBase-input': {
      color: theme.palette.text.highEmphasis,
    },
    '&::placeholder': {
      color: theme.palette.text.lowEmphasis,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.lowEmphasis,
  },
})

const TextField = (props: CustomTextFieldProps) => {
  return <CustomField data-testid="custom-textfield" {...props} fullWidth />
}

export default TextField
