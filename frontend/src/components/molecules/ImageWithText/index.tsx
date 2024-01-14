import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import React from 'react'
import DashboardImage from '@Assets/icons/DashboarContainer.svg'
import theme from '@/theme'
interface ImageWithTextProps {
  fileName: string
}

const Container = styled(Stack)({
  display: 'flex',
  height: '10rem',
  borderRadius: '0.5rem',
  width: '12.125rem',
  textAlign: 'center',
  gap: '1.875rem',
})

const ImageWithText = ({ fileName }: ImageWithTextProps) => {
  return (
    <Container>
      <Icon src={DashboardImage} alt="File" />
      <Typography
        variant="h6"
        color={theme.palette.darkTheme.HIGH_EMPHASIS}
        label={fileName}
      />
    </Container>
  )
}

export default ImageWithText
