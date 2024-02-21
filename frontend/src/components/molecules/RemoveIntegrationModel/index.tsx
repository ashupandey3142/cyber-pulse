import React from 'react'
import GenericModal from '../GenericModal'
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { Box, Stack, SxProps } from '@mui/material'
import styled from '@emotion/styled'
import theme from '@/theme'
import {
  ARE_YOU_SURE_TO_REMOVE,
  CANCEL,
  DELETE_IT,
  REMOVED_INTEGRATION,
} from '@/utils/constant'

interface RemoveProps {
  handleRemoveCancel: () => void
  handleDeleteIntegration: () => void
  open: boolean
  sx?: SxProps
}
const ButtonBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(15),
  gap: theme.spacing(4),
})

const RemoveIntegrationModal = ({
  handleRemoveCancel,
  handleDeleteIntegration,
  open,
  sx,
}: RemoveProps) => {
  return (
    <GenericModal
      isBackIcon={false}
      open={open}
      title={REMOVED_INTEGRATION}
      onCloseClick={handleRemoveCancel}
    >
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          ...sx,
        }}
      >
        <Typography
          variant="body3"
          color={theme.palette.darkTheme.HIGH_EMPHASIS}
          label={ARE_YOU_SURE_TO_REMOVE}
          sx={{ textAlign: 'center' }}
        />
        <ButtonBox>
          <Button
            onClick={handleRemoveCancel}
            label={CANCEL}
            textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
            typographyVariant="button"
            sx={{
              border: `1px solid ${theme.palette.text.lowEmphasis}`,
              height: theme.spacing(9),
            }}
          />
          <Button
            onClick={handleDeleteIntegration}
            backgroundColor={theme.palette.ampsec.RED}
            sx={{ height: theme.spacing(9) }}
            textColor={theme.palette.darkTheme.STRUCTURAL_CARD_BG}
            typographyVariant="button"
            label={DELETE_IT}
          />
        </ButtonBox>
      </Stack>
    </GenericModal>
  )
}

export default RemoveIntegrationModal
