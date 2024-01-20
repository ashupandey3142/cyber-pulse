import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import GenericModal from '@/components/molecules/GenericModal'
import LabeledInput from '@/components/molecules/LabeledInput'
import SlackSideBar from '@/components/molecules/SlackSideBar'
import Tabs from '@/components/molecules/Tabs'
import useIntegration from '@/hooks/useIntegration'
import { ADD_INTEGRATION_TAB_VALUES } from '@/strings/string'
import theme from '@/theme'
import { ADD_INTEGRATION_DATA } from '@/utils/constant'
import { SlackActionId } from '@/utils/interfaces'
import CLOSED_EYE from '@Assets/icons/closedEye.svg'
import OPEN_EYE from '@Assets/icons/openEye.svg'
import { Stack, SxProps, styled } from '@mui/material'

interface AddIntegrationModalProps {
  open: boolean
  onCrossIconClick?: () => void
  onBackIconClick?: () => void
  onAddIntegrationClick?: (slackActionId: SlackActionId) => void
  sx?: SxProps
}

const StyledButton = styled(Button)({
  width: theme.spacing(41.5),
  display: 'flex',
  alignSelf: 'end',
  marginTop: theme.spacing(137),
  marginRight: theme.spacing(4),
  color: theme.palette.darkTheme.MODAL_BG,
  ':hover': {
    backgroundColor: theme.palette.primary.main,
  },
})

const CenterButton = styled(Button)({
  width: theme.spacing(41.5),
  display: 'flex',
  alignSelf: 'start',
  color: theme.palette.darkTheme.MODAL_BG,
  ':hover': {
    backgroundColor: theme.palette.primary.main,
  },
})

const InnerStack = styled(Stack)({
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  width: '100%',
  gap: theme.spacing(4),
})

const AddIntegrationModal = ({
  open,
  onCrossIconClick,
  onBackIconClick,
  onAddIntegrationClick,
  sx,
}: AddIntegrationModalProps) => {
  const {
    showSlackInput,
    setShowSlackInput,
    showBaseUrl,
    setShowBaseUrl,
    showClientId,
    setShowClientId,
    showClientSecret,
    setShowClientSecret,
    slackActionId,
    setSlackActionId,
    disabled,
  } = useIntegration()
  return (
    <GenericModal
      open={open}
      isBackIcon={true}
      onBackButtonClick={onBackIconClick}
      title={ADD_INTEGRATION_DATA.TITLE.toUpperCase()}
      onCloseClick={onCrossIconClick}
    >
      <Stack sx={sx} direction="row">
        <SlackSideBar />
        {!showSlackInput ? (
          <InnerStack>
            <Tabs
              tabValues={ADD_INTEGRATION_TAB_VALUES}
              deActiveTabColor={theme.palette.text.mediumEmphasis ?? ''}
            />
            <Typography
              label={ADD_INTEGRATION_DATA.DESCRIPTION}
              variant="body4"
              color={theme.palette.darkTheme.HIGH_EMPHASIS}
            />
            <StyledButton
              label={ADD_INTEGRATION_DATA.TITLE.toUpperCase()}
              variant="contained"
              onClick={() => setShowSlackInput(true)}
            />
          </InnerStack>
        ) : (
          <Stack alignItems="center" justifyContent="center" width="100%">
            <Stack width="30vw" gap={4}>
              <Typography
                label={ADD_INTEGRATION_DATA.ENTER_CREDENTIALS.toUpperCase()}
                variant="subtitle2"
              />
              <LabeledInput
                label={ADD_INTEGRATION_DATA.Base_URL}
                labelVariant="body6"
                textFieldProps={{
                  value: slackActionId.baseUrl,
                  onChange: (e) =>
                    setSlackActionId({
                      ...slackActionId,
                      baseUrl: e.target.value,
                    }),
                  size: 'small',
                  type: showBaseUrl ? 'text' : 'password',
                  placeholder: ADD_INTEGRATION_DATA.BASE_URL_PLACEHOLDER,
                  InputProps: {
                    endAdornment: (
                      <Icon
                        src={showBaseUrl ? OPEN_EYE : CLOSED_EYE}
                        alt={showBaseUrl ? 'open-eye' : 'close-eye'}
                        onClick={() => setShowBaseUrl(!showBaseUrl)}
                      />
                    ),
                  },
                }}
              />
              <LabeledInput
                label={ADD_INTEGRATION_DATA.CLIENT_ID}
                labelVariant="body6"
                textFieldProps={{
                  value: slackActionId.clientId,
                  onChange: (e) =>
                    setSlackActionId({
                      ...slackActionId,
                      clientId: e.target.value,
                    }),
                  size: 'small',
                  type: showClientId ? 'text' : 'password',
                  placeholder: ADD_INTEGRATION_DATA.CLIENT_ID_PLACEHOLDER,
                  InputProps: {
                    endAdornment: (
                      <Icon
                        src={showClientId ? OPEN_EYE : CLOSED_EYE}
                        alt={showClientId ? 'open-eye' : 'close-eye'}
                        onClick={() => setShowClientId(!showClientId)}
                      />
                    ),
                  },
                }}
              />
              <LabeledInput
                label={ADD_INTEGRATION_DATA.CLIENT_SECRET}
                labelVariant="body6"
                textFieldProps={{
                  value: slackActionId.clientSecret,
                  onChange: (e) =>
                    setSlackActionId({
                      ...slackActionId,
                      clientSecret: e.target.value,
                    }),
                  size: 'small',
                  type: showClientSecret ? 'text' : 'password',
                  placeholder: ADD_INTEGRATION_DATA.CLIENT_SECRET_PLACEHOLDER,
                  InputProps: {
                    endAdornment: (
                      <Icon
                        src={showClientSecret ? OPEN_EYE : CLOSED_EYE}
                        alt={showClientSecret ? 'open-eye' : 'close-eye'}
                        onClick={() => setShowClientSecret(!showClientSecret)}
                      />
                    ),
                  },
                }}
              />
              <CenterButton
                label={ADD_INTEGRATION_DATA.BUTTON_LABEL}
                variant="contained"
                disabled={disabled}
                onClick={() => onAddIntegrationClick?.(slackActionId)}
              />
            </Stack>
          </Stack>
        )}
      </Stack>
    </GenericModal>
  )
}

export default AddIntegrationModal
