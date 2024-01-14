import { Box, IconProps } from '@mui/material'

interface IconComponentProps extends IconProps {
  src: string
  alt: string
  onClick?: () => void
  sx?: React.CSSProperties
}

const Icon = ({ src, alt, sx, onClick, ...props }: IconComponentProps) => {
  return (
    <Box onClick={onClick} data-testid="icon-component" {...props}>
      <img src={src} alt={alt} style={{ cursor: 'pointer', ...sx }} />
    </Box>
  )
}

export default Icon
