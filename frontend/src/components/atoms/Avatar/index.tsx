import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
  SxProps,
} from '@mui/material'

interface AvatarProps extends MuiAvatarProps {
  src: string
  alt: string
  sx?: SxProps
}

const Avatar = ({ src, alt, sx, ...props }: AvatarProps) => {
  return (
    <MuiAvatar
      src={src}
      alt={alt}
      sx={sx}
      data-testid="avatar-component"
      {...props}
    />
  )
}

export default Avatar
