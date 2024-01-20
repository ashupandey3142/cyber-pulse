import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import styled from '@emotion/styled'
import { useState } from 'react'
import DOWNCARD from '@Assets/icons/downloadmock.svg'
import { MOCKOPTIONS, SELECT_ORGANISATION, SELECT_TEXT } from '@/utils/constant'
import { Box, SxProps } from '@mui/material'
interface GenericProps {
  sx?: SxProps
}
const GenericContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.darkTheme.STOKE_EMPHASIS,
})

const MuiButton = styled(Button)({
  width: '100%',
  height: '2.5rem',
  background: theme.palette.darkTheme.STOKE_EMPHASIS,
  borderRadius: theme.spacing(1),
  border: `0.1px solid ${theme.palette.text.mediumEmphasis}`,
  borderColor: theme.palette.text.lowEmphasis,
  justifyContent: 'space-between',
  marginTop: '0.5rem',
})

const MuiBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.darkTheme.MODAL_BG,
  alignItems: 'center',
  border: `1px solid ${theme.palette.text.lowEmphasis}`,
})

export const DefineOrganisation = ({ sx }: GenericProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const handleToggle = () => {
    setOpen(!open)
  }
  return (
    <GenericContainer sx={sx}>
      <Typography
        label={SELECT_TEXT}
        textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
        variant="body6"
      />

      <MuiButton
        variant="contained"
        typographyVariant="body2"
        textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
        onClick={handleToggle}
        label={SELECT_ORGANISATION}
        endIcon={<Icon src={DOWNCARD} alt="down" />}
      />
      {open ? (
        <MuiBox onClick={handleToggle}>
          {MOCKOPTIONS.map((option) => (
            <Button
              key={option}
              typographyVariant="body2"
              textColor={
                option === 'Option 3'
                  ? theme.palette.darkTheme.MODAL_BG
                  : theme.palette.darkTheme.HIGH_EMPHASIS
              }
              variant="contained"
              label={option}
              sx={{
                height: '2.5rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pointerEvents: 'none',
                backgroundColor:
                  option === 'Option 3'
                    ? theme.palette.primary.main
                    : 'transparent',
              }}
            />
          ))}
        </MuiBox>
      ) : (
        <></>
      )}
    </GenericContainer>
  )
}
export default DefineOrganisation
