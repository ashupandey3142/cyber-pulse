import TextField, { CustomTextFieldProps } from '@/components/atoms/TextField'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { Stack, styled } from '@mui/material'

interface LabeledInputProps {
  label: string
  labelVariant: 'body3' | 'body6'
  textFieldProps: CustomTextFieldProps
}

const StyledTypo = styled(Typography)({
  color: theme.palette.darkTheme.MEDIUM_EMPHASIS,
})

const LabeledInput = ({
  label,
  textFieldProps,
  labelVariant,
}: LabeledInputProps) => {
  return (
    <Stack gap={2}>
      <StyledTypo label={label} variant={labelVariant} />
      <TextField {...textFieldProps} />
    </Stack>
  )
}

export default LabeledInput
