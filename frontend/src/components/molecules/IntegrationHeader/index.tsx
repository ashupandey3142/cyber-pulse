import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import AddIcon from '@Assets/icons/Add.svg'
import Icon from '@/components/atoms/Icon'
import { NO_OPTION } from '@/utils/constant'

interface IntegrationHeaderProps {
  label: string
  hasButtonLabel: boolean
  buttonLabel: string
}

const Container = styled(Box)({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '2.25rem',
})

const IntegrationHeader = ({
  label,
  hasButtonLabel,
  buttonLabel,
}: IntegrationHeaderProps) => {
  return (
    <Container>
      <Typography
        variant="subtitle1"
        label={label}
        color={theme.palette.darkTheme.HIGH_EMPHASIS}
      />
      {hasButtonLabel ? (
        <Button
          typographyVariant="button"
          variant="outlined"
          startIcon={<Icon src={AddIcon} alt="add" />}
          label={buttonLabel}
          textColor={theme.palette.primary.main}
          sx={{ borderRadius: '0.25rem' }}
        />
      ) : (
        <Typography typographyVariant="body2" label={NO_OPTION} />
      )}
    </Container>
  )
}

export default IntegrationHeader
