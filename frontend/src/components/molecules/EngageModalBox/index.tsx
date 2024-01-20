import Button from '@/components/atoms/Button'
import Checkbox from '@/components/atoms/Checkbox'
import Icon from '@/components/atoms/Icon'
import TextField from '@/components/atoms/TextField'
import Typography from '@/components/atoms/Typography'
import GenericModal from '@/components/molecules/GenericModal'
import theme from '@/theme'
import { COPYCISO, ENGAGE_TITLE, MEDIUM, SEND } from '@/utils/constant'
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
} from '@mui/material'
import ArrowIcon from '@Assets/icons/DownCaretMedium.svg'

interface IMenuItem {
  label: string
  src: string
}
interface IEngageModalBox {
  open: boolean
  dropdownData: IMenuItem[]
  selectedDropdown?: string
  textFieldValue?: string
  error?: boolean
  disableButton?: boolean
  helperText?: string
  handleDropdownChange: (e: SelectChangeEvent<unknown>) => void
  onModalCloseClick: () => void
  onSend: () => void
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const CustomIconComponent = () => (
  <DropDownIcon src={ArrowIcon} alt="arrow-icon" />
)

const ChildrenContainer = styled(Stack)({
  width: theme.spacing(151),
  height: theme.spacing(85),
  padding: theme.spacing(4),
  gap: theme.spacing(4),
})

const DropdownContainer = styled(Stack)({
  gap: theme.spacing(2),
})

const FieldContainer = styled(TextField)({
  width: theme.spacing(143),

  '& .MuiInputBase-input': {
    fontSize: theme.spacing(3.75),
    fontWeight: 400,
    overflowY: 'auto',
    scrollbarWidth: 'thin',

    '&::-webkit-scrollbar': {
      width: theme.spacing(1.5),
    },
    '&::-webkit-scrollbar-thumb': {
      border: `0.5px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.darkTheme.DIVIDER_EMPHASIS,
      borderRadius: 12,
    },
  },
})

const BottomContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: theme.spacing(143),
})
const StyleSelect = styled(Select)({
  color: theme.palette.text.highEmphasis,
  width: theme.spacing(31.5),
  height: theme.spacing(8),
  border: `1px solid ${theme.palette.text.lowEmphasis}`,
  borderRadius: theme.spacing(1),
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
})

const StyleMenuItem = styled(MenuItem)({
  backgroundColor: theme.palette.ampsec.BACKGROUND,
})
const StyleMenuContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
})

const SocialIcon = styled(Icon)({
  width: theme.spacing(4),
  height: theme.spacing(4),
})

const DropDownIcon = styled(Icon)({
  width: theme.spacing(5),
  height: theme.spacing(5),
})
const StyleTypography = styled(Typography)({
  color: theme.palette.text.lowEmphasis,
})

const StyleCheckbox = styled(Checkbox)({
  color: theme.palette.text.highEmphasis,
  margin: 0,
  '& + span': {
    fontSize: theme.spacing(3.75),
    fontWeight: 400,
    marginLeft: 0,
  },
})

const StyleButton = styled(Button)({
  color: theme.palette.ampsec.STRUCTURAL_BACKGROUND,
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.spacing(1),
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
})
const EngageModalBox = ({
  open,
  selectedDropdown,
  dropdownData,
  textFieldValue,
  disableButton,
  error,
  helperText,
  onChange,
  handleDropdownChange,
  onModalCloseClick,
  onSend,
}: IEngageModalBox) => {
  return (
    <GenericModal
      title={ENGAGE_TITLE}
      open={open}
      isBackIcon={false}
      onCloseClick={onModalCloseClick}
    >
      <ChildrenContainer>
        <DropdownContainer>
          <Typography variant="body5" label={MEDIUM} />
          <StyleSelect
            data-testid="dropdown-container"
            value={selectedDropdown}
            onChange={handleDropdownChange}
            IconComponent={CustomIconComponent}
          >
            {dropdownData &&
              dropdownData.length > 0 &&
              dropdownData.map((val) => (
                <StyleMenuItem key={val.label} value={val.label}>
                  <StyleMenuContainer>
                    <SocialIcon src={val.src} alt="social-icon" />
                    <StyleTypography variant="body3" label={val.label} />
                  </StyleMenuContainer>
                </StyleMenuItem>
              ))}
          </StyleSelect>
        </DropdownContainer>
        <FieldContainer
          multiline
          data-testid="textarea"
          type="textarea"
          error={error}
          helperText={helperText}
          rows={5}
          value={textFieldValue}
          onChange={onChange}
        />
        <BottomContainer>
          <StyleCheckbox label={COPYCISO} />
          <StyleButton
            variant="contained"
            label={SEND}
            onClick={onSend}
            disabled={disableButton}
          />
        </BottomContainer>
      </ChildrenContainer>
    </GenericModal>
  )
}

export default EngageModalBox
