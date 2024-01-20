import Typography from '@/components/atoms/Typography'
import AccordianComp from '@/components/molecules/Accordian'
import DefineOrganisation from '@/components/molecules/DefineOrganisation'
import DisableSocialCard from '@/components/molecules/DisableSocialCard'
import {
  COMPONENT_TEXT,
  DEFINE_EMPLOYEE_TEXT,
  DEFINE_ORGANISATION,
  GOOGLE_SIGN_IN,
  REMOVE_INTEGRATION,
  REMOVE_TEXT,
  WARNING_TEXT,
} from '@/utils/constant'
import styled from '@emotion/styled'
import { Box, Stack, SxProps } from '@mui/material'
import React, { useState } from 'react'
import GoogleSignIn from '@Assets/icons/Switch.svg'
import theme from '@/theme'
import Button from '@/components/atoms/Button'
import RemoveIntegrationModal from '@/components/molecules/RemoveIntegrationModel'

interface RemoveIntegrationProps {
  onDeleteIntegrationClick: () => void
  onDisableButtonClick: () => void
  isActive: boolean
  sx?: SxProps
}
const RemoveIntegrationContainer = styled(Box)({
  display: 'flex',
  padding: '20px 16px 32px 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '36px',
  backgroundColor: theme.palette.darkTheme.MODAL_BG,
})

const RemoveStack = styled(Stack)({
  gap: '1rem',
  marginBottom: '1.00rem',
  marginTop: '0.625rem',
})

const RemovePopup = {
  width: '37.109vw',
  height: theme.spacing(47.5),
}

const RemoveIntegration = ({
  sx,
  isActive,
  onDeleteIntegrationClick,
  onDisableButtonClick,
}: RemoveIntegrationProps) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const handleAccordionClick = (accordionName: string) => {
    setActiveAccordion(activeAccordion === accordionName ? null : accordionName)
  }
  const handleRemoveClick = () => {
    setIsDeleteOpen(!isDeleteOpen)
  }
  return (
    <RemoveIntegrationContainer sx={sx}>
      <DisableSocialCard
        socialLabel={GOOGLE_SIGN_IN}
        socialIcon={GoogleSignIn}
        isActive={isActive}
        onToggleClick={onDisableButtonClick}
      />
      <Stack sx={{ width: '100%' }}>
        <Typography
          label={COMPONENT_TEXT}
          variant="subtitle2"
          textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
          sx={{ marginBottom: '1.25rem' }}
        />
        <AccordianComp
          isConfigured={true}
          isOpen={activeAccordion === DEFINE_ORGANISATION}
          handleAccordionClick={() => handleAccordionClick(DEFINE_ORGANISATION)}
          configurationName={DEFINE_ORGANISATION}
          content={<DefineOrganisation />}
        />
        <AccordianComp
          isConfigured={true}
          isOpen={activeAccordion === DEFINE_EMPLOYEE_TEXT}
          handleAccordionClick={() =>
            handleAccordionClick(DEFINE_EMPLOYEE_TEXT)
          }
          configurationName={DEFINE_EMPLOYEE_TEXT}
        />
        <AccordianComp
          isConfigured={false}
          configurationName={REMOVE_INTEGRATION}
          isOpen={activeAccordion === REMOVE_INTEGRATION}
          handleAccordionClick={() => handleAccordionClick(REMOVE_INTEGRATION)}
          content={
            <RemoveStack>
              <Typography
                label={WARNING_TEXT}
                variant="body6"
                textColor={theme.palette.text.highEmphasis}
              />
              <Button
                label={REMOVE_TEXT}
                backgroundColor={theme.palette.ampsec.RED}
                sx={{ height: theme.spacing(9), width: theme.spacing(22.5) }}
                textColor={theme.palette.darkTheme.STRUCTURAL_CARD_BG}
                typographyVariant="button"
                onClick={handleRemoveClick}
              />
              {isDeleteOpen && (
                <RemoveIntegrationModal
                  open={isDeleteOpen}
                  sx={RemovePopup}
                  handleRemoveCancel={handleRemoveClick}
                  handleDeleteIntegration={onDeleteIntegrationClick}
                />
              )}
            </RemoveStack>
          }
        />
      </Stack>
    </RemoveIntegrationContainer>
  )
}

export default RemoveIntegration
