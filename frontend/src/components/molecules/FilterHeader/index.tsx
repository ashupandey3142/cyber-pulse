import { Stack, styled } from '@mui/material'
import DropDown from '@/components/molecules/Dropdown'
import { ACTION_CARD_DATA, FILTER, SEARCH } from '@/utils/constant'
import TextField from '@/components/atoms/TextField'
import Icon from '@/components/atoms/Icon'
import searchIcon from '@Assets/icons/search_icon.svg'
import Button from '@/components/atoms/Button'
import theme from '@/theme'

interface IFilterHeader {
  filedValue?: string
  selectedId: number
  disabledButton?: boolean
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onDropDownClick: (id: number) => void
  onFilterClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const MainWrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const FilterContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(4),
  height: theme.spacing(9),
})

const StyleButton = styled(Button)({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  borderRadius: theme.spacing(1),
  width: theme.spacing(20.75),
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.highEmphasis,
  },
  '&:active': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.highEmphasis,
  },
})

const StyleTextField = styled(TextField)({
  width: theme.spacing(85),
  height: theme.spacing(9),
  borderRadius: theme.spacing(1),
  borderColor: theme.palette.text.lowEmphasis,
  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.text.lowEmphasis,
    fontSize: theme.spacing(3.75),
    fontWeight: 400,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderRadius: theme.spacing(1),
      width: theme.spacing(85),
      height: theme.spacing(10),
    },
  },
})

const StyleIcon = styled(Icon)({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  marginRight: theme.spacing(2),
})
const FilterHeader = ({
  filedValue,
  selectedId,
  disabledButton,
  onChange,
  onDropDownClick,
  onFilterClick,
}: IFilterHeader) => {
  return (
    <MainWrapper>
      <FilterContainer>
        <StyleTextField
          value={filedValue}
          InputProps={{
            startAdornment: <StyleIcon alt="search" src={searchIcon} />,
          }}
          placeholder={SEARCH}
          size="small"
          type="text"
          onChange={onChange}
        />
        <StyleButton
          label={FILTER}
          variant="outlined"
          typographyVariant="button"
          onClick={onFilterClick}
        />
      </FilterContainer>
      <DropDown
        cardData={ACTION_CARD_DATA}
        disabled={disabledButton}
        selectedId={selectedId}
        handleClick={onDropDownClick}
      />
    </MainWrapper>
  )
}

export default FilterHeader
