import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material'

interface ChipProps extends MuiChipProps {
  label: string | React.ReactNode
  sx?: React.CSSProperties
}

const Chip = ({ label, sx, ...props }: ChipProps) => {
  return (
    <MuiChip label={label} style={sx} data-testid="chip-component" {...props} />
  )
}

export default Chip
