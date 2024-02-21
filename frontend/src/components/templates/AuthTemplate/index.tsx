import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import React from 'react'
import BackGroundImage from '@Assets/image/BackgrounImage.png'
interface AuthTemplateProps {
  children?: React.ReactNode
}
const StyledStack = styled(Stack)({
  height: '100vh',
  width: '100%',
  backgroundImage: `url(${BackGroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'center',
})
const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return <StyledStack>{children ?? 'children'}</StyledStack>
}

export default AuthTemplate
