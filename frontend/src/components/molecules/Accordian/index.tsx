import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@/components/atoms/Typography'
import { Box } from '@mui/material'
import Chip from '@/components/atoms/Chip'
import { NOT_CONFIGURED, NOT_CONFIGURED_CHIP_STYLE } from '@/utils/constant'
import DOWN from '@Assets/icons/SideCard.svg'
import Icon from '@/components/atoms/Icon'
import theme from '@/theme'
interface AccordianCompProps {
  content?: React.ReactNode
  isConfigured: boolean
  configurationName: string
  isOpen?: boolean
  handleAccordionClick?: () => void
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&:not(:last-child)': {
    borderBottom: theme.palette.darkTheme.STOKE_EMPHASIS,
  },
  '&::before': {
    display: 'none',
  },
  borderBottom: `0.2px solid ${theme.palette.text.lowEmphasis}`,
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<Icon src={DOWN} alt="arrowIcon" sx={{ fontSize: '1rem' }} />}
    {...props}
  />
))({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(5),
  },
})

const AccordionDetails = styled(MuiAccordionDetails)({
  padding: theme.spacing(2),
  background: theme.palette.darkTheme.STOKE_EMPHASIS,
  paddingLeft: '3.4375rem',
  display: 'flex',
  height: 'inherit',
  borderBottom: `1px solid ${theme.palette.darkTheme.HIGH_EMPHASIS}`,
})

const AccordionSummaryContainer = styled(AccordionSummary)({
  background: theme.palette.darkTheme.BACK_EMPHASIS,
  height: theme.spacing(17),
})

const AccordianComp = ({
  configurationName,
  isConfigured,
  isOpen,
  content,
  handleAccordionClick,
}: AccordianCompProps) => {
  return (
    <div>
      <Accordion expanded={isOpen} onChange={handleAccordionClick}>
        <AccordionSummaryContainer
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Box gap={4} sx={{ display: 'flex' }}>
            <Typography
              label={configurationName}
              variant="subtitle2"
              textColor={theme.palette.darkTheme.HIGH_EMPHASIS}
            />
            {isConfigured ? (
              <Chip
                label={<Typography variant="body6" label={NOT_CONFIGURED} />}
                sx={NOT_CONFIGURED_CHIP_STYLE}
              />
            ) : (
              <></>
            )}
          </Box>
        </AccordionSummaryContainer>
        <AccordionDetails>{content ? content : <></>}</AccordionDetails>
      </Accordion>
    </div>
  )
}
export default AccordianComp
