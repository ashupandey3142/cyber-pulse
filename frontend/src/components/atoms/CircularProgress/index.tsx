import React from 'react'
import Box from '@mui/material/Box'
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps,
  styled,
} from '@mui/material'
import theme from '@/theme'
import Typography from '@Components/atoms/Typography'

const CircularProgressBarWrapper = styled(Box)({
  position: 'relative',
  display: 'inline-flex',
})
const StyleCircularProgress = styled(MuiCircularProgress)({
  color: theme.palette.ampsec.ORANGE,
  width: theme.spacing(14),
  height: theme.spacing(14),
  strokeLinecap: 'round',
  borderRadius: '50%',
  boxShadow: `inset 0 0 0 6px ${theme.palette.text.mediumEmphasis}`,
})

const TextWrapper = styled(Box)({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const StyleTypography = styled(Typography)({
  color: theme.palette.text.highEmphasis,
})
const CircularProgress = (props: CircularProgressProps & { value: number }) => {
  return (
    <CircularProgressBarWrapper data-testid="circular-progress-bar">
      <StyleCircularProgress thickness={4} variant="determinate" {...props} />
      <TextWrapper>
        <StyleTypography
          variant="body5"
          label={`${Math.round(props.value)}%`}
        />
      </TextWrapper>
    </CircularProgressBarWrapper>
  )
}

export default CircularProgress
