import Button from '@/components/atoms/Button'
import CircularProgress from '@/components/atoms/CircularProgress'
import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import FilePickerCard from '@/components/molecules/FilePickerRow'
import { useFileContext } from '@/context/FileContext'
import useFileUpload from '@/hooks/useFileUpload'
import theme from '@/theme'
import { SPREADSHEET, UPLOAD_FILE_CONSTANTS } from '@/utils/constant'
import fileIcon from '@Assets/icons/file.svg'
import ProgressSuccessIcon from '@Assets/icons/progressComplete.svg'
import { Stack, SxProps, styled } from '@mui/material'

const OuterStack = styled(Stack)({
  backgroundColor: theme.palette.ampsec.BLUE_TEXT_HIGH,
  padding: theme.spacing(10),
  borderRadius: theme.spacing(4),
})

const InnerStack = styled(Stack)({
  backgroundColor: theme.palette.ampsec.LIGHTISH_DARK_BACKGROUND,
  backgroundImage: `repeating-linear-gradient(0deg, #959595, #959595 15px, transparent 15px, transparent 25px, #959595 25px), repeating-linear-gradient(90deg, #959595, #959595 15px, transparent 15px, transparent 25px, #959595 25px), repeating-linear-gradient(180deg, #959595, #959595 15px, transparent 15px, transparent 25px, #959595 25px), repeating-linear-gradient(270deg, #959595, #959595 15px, transparent 15px, transparent 25px, #959595 25px)`,
  backgroundSize: '1px 100%, 100% 1px, 1px 100% , 100% 1px',
  backgroundPosition: '0 0, 0 0, 100% 0, 0 100%',
  backgroundRepeat: 'no-repeat',
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(1),
  padding: '24px 16px 24px 16px',
  height: '184px',
  alignItems: 'center',
  justifyContent: 'center',
})

const TypoStack = styled(Stack)({
  gap: theme.spacing(2),
  alignItems: 'center',
  marginBottom: theme.spacing(10),
})

const StyledButton = styled(Button)({
  width: theme.spacing(23),
  height: theme.spacing(11),
})

const ProceedButton = styled(Button)({
  width: theme.spacing(23),
  height: theme.spacing(11),
  ':hover': {
    backgroundColor: theme.palette.primary.main,
  },
})

const TypoButton = styled(Typography)({
  textDecoration: 'underline',
  cursor: 'pointer',
})

const CancelButton = styled(Button)({
  height: theme.spacing(8),
  backgroundColor: theme.palette.ampsec.CANCEL_BG,
  color: theme.palette.ampsec.CANCEL,
  ':hover': {
    backgroundColor: theme.palette.ampsec.CANCEL_BG,
  },
})

interface UploadFileProps {
  onCancel?: () => void
  onProceed?: () => void
  sx?: SxProps
}

const UploadFile = ({ onProceed, onCancel, sx }: UploadFileProps) => {
  const getUploadComponentProps = useFileUpload()
  const { file } = useFileContext()
  const {
    showBrowse,
    showProgress,
    progressValue,
    fileInputRef,
    handleClick,
    handleFileSelect,
    handleCancelOrReupload,
  } = getUploadComponentProps()

  return (
    <OuterStack sx={sx}>
      <TypoStack>
        <Typography
          label={UPLOAD_FILE_CONSTANTS.TITLE}
          variant="subtitle1"
          color={theme.palette.darkTheme.HIGH_EMPHASIS}
        />
        <Typography
          label={UPLOAD_FILE_CONSTANTS.SUBTITLE}
          variant="body4"
          color={theme.palette.darkTheme.MEDIUM_EMPHASIS}
        />
      </TypoStack>
      <FilePickerCard fileName={SPREADSHEET} fileUrl={fileIcon} />
      <InnerStack>
        {showBrowse && (
          <Stack alignItems="center" mt={6} gap={4}>
            <Typography
              label={UPLOAD_FILE_CONSTANTS.DROP_ZONE}
              variant="body3"
              color={theme.palette.darkTheme.HIGH_EMPHASIS}
              fontSize={theme.spacing(5)}
            />
            <Stack direction="row" gap={1}>
              <Typography
                label={UPLOAD_FILE_CONSTANTS.DRAG_AND_DROP}
                variant="body4"
                color={theme.palette.text.lowEmphasis}
                fontSize={theme.spacing(5)}
              />
              <TypoButton
                label={UPLOAD_FILE_CONSTANTS.BROWSE}
                variant="button"
                sx={{ textDecoration: 'underline' }}
                color={theme.palette.primary.main}
                onClick={handleClick}
                fontSize={theme.spacing(5)}
              />
            </Stack>
          </Stack>
        )}
        {showProgress && (
          <Stack alignItems="center" gap={2}>
            {progressValue === 100 ? (
              <Icon
                src={ProgressSuccessIcon}
                alt={UPLOAD_FILE_CONSTANTS.UPLOAD_COMPLETED_ALT}
              />
            ) : (
              <CircularProgress value={progressValue} size={70} />
            )}
            <Typography
              label={
                progressValue === 100
                  ? `"${file.name}" ${UPLOAD_FILE_CONSTANTS.UPLOAD_SUCCESSFULLY}`
                  : `${UPLOAD_FILE_CONSTANTS.UPLOADING} "${file.name}" ${UPLOAD_FILE_CONSTANTS.FILE}`
              }
              variant="body4"
              color={theme.palette.text.lowEmphasis}
            />
            <CancelButton
              label={
                progressValue === 100
                  ? UPLOAD_FILE_CONSTANTS.RE_UPLOAD_BUTTON_LABEL
                  : UPLOAD_FILE_CONSTANTS.CANCEL_BUTTON_LABEL
              }
              onClick={handleCancelOrReupload}
            />
          </Stack>
        )}
      </InnerStack>
      <Stack direction="row" alignSelf="end" mt={6} gap={4}>
        <StyledButton
          label={UPLOAD_FILE_CONSTANTS.CANCEL_BUTTON_LABEL.toUpperCase()}
          variant="outlined"
          onClick={onCancel}
        />
        <ProceedButton
          label={UPLOAD_FILE_CONSTANTS.PROCEED_BUTTON_LABEL.toUpperCase()}
          variant="contained"
          onClick={progressValue === 100 ? onProceed : undefined}
        />
      </Stack>
      <input
        type="file"
        ref={fileInputRef}
        accept=".csv"
        style={{ display: 'none' }}
        onChange={(e) => {
          handleFileSelect(e.target.files?.[0] ?? new File([], ''))
        }}
        data-testid="file-input"
      />
    </OuterStack>
  )
}

export default UploadFile
