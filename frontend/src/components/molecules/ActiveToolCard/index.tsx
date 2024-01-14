import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { CONFIGURE, IDENTITY } from '@/utils/constant'
import styled from '@emotion/styled'
import { Box, Stack } from '@mui/material'
import React from 'react'

interface ActiveToolCardProps {
  src: string
  alt: string
  intgrationLabel: string
  handleConfigureClick?: () => void
}

const Container = styled(Stack)({
  display: 'flex',
  borderRadius: '0.5rem',
  width: '17.4375rem',
  height: '17.1875rem',
  backgroundColor: theme.palette.darkTheme.ACTIVE_BG,
})

const ToolGrid = styled(Box)({
  display: 'flex',
  height: theme.spacing(11.5),
  width: '100%',
  paddingTop: theme.spacing(3),
  justifyContent: 'center',
  alignItems: 'center',
})

const InnerGrid = styled(Stack)({
  display: 'flex',
  padding: '2px',
  height: theme.spacing(57.1),
  background: theme.palette.darkTheme.DARK_GREEN,
  gap: '1.375rem',
  margin: '0.125rem',
  paddingTop: theme.spacing(2.5),
  borderRadius: '0.1rem 0.1rem 0.4rem 0.4rem',
  alignItems: 'center',
})

const IconBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const MuiButton = styled(Button)({
  height: theme.spacing(9),
  width: theme.spacing(39),
  borderRadius: theme.spacing(1),
  borderColor: `${theme.palette.darkTheme.HIGH_EMPHASIS}`,
  background: theme.palette.darkTheme.DARK_GREEN,
})

const ActiveToolCard = ({
  handleConfigureClick,
  intgrationLabel,
  src,
  alt,
}: ActiveToolCardProps) => {
  return (
    <Container>
      <ToolGrid>
        <Typography
          variant={'subtitle3'}
          color={theme.palette.ampsec.BLUE_TEXT_HIGH}
          label={IDENTITY}
        />
      </ToolGrid>
      <InnerGrid>
        <IconBox>
          <Icon src={src} alt={alt} />
          <Typography
            label={`${intgrationLabel} SSO`}
            variant="h4"
            color={theme.palette.darkTheme.HIGH_EMPHASIS}
          />
        </IconBox>
        <MuiButton
          label={CONFIGURE}
          typographyVariant={'overline2'}
          variant="outlined"
          textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
          onClick={handleConfigureClick}
        />
      </InnerGrid>
    </Container>
  )
}

export default ActiveToolCard
