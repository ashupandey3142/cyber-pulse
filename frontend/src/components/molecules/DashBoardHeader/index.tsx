import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import Tabs from '../Tabs'
import theme from '@/theme'
import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import DownIcon from '@Assets/icons/cheverondown.svg'
import Typography from '@/components/atoms/Typography'
import { NO_OPTION } from '@/utils/constant'

interface DashBoardHeaderProps {
  hasButtonLabel: boolean
  buttonLabel: string
  tabValues: string[]
  deActiveTabColor: string
}

const Container = styled(Box)({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '2.25rem',
})
const DashBoardHeader = ({
  tabValues,
  deActiveTabColor,
  buttonLabel,
  hasButtonLabel,
}: DashBoardHeaderProps) => {
  return (
    <Container>
      <Tabs tabValues={tabValues} deActiveTabColor={deActiveTabColor} />
      {hasButtonLabel ? (
        <Button
          typographyVariant="button"
          variant="outlined"
          endIcon={<Icon src={DownIcon} alt="add" />}
          label={buttonLabel}
          textColor={theme.palette.ampsec.BLUE_TEXT_HIGH}
          sx={{
            borderRadius: '0.25rem',
            background: theme.palette.primary.main,
            height: '2.25rem',
          }}
        />
      ) : (
        <Typography typographyVariant="body2" label={NO_OPTION} />
      )}
    </Container>
  )
}

export default DashBoardHeader
