import Checkbox from '@/components/atoms/Checkbox'
import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import FilterHeader from '@/components/molecules/FilterHeader'
import theme from '@/theme'
import { ROWS_PER_PAGE, columns } from '@/utils/constant'
import { IRowData } from '@/utils/interfaces'
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  styled,
} from '@mui/material'
import { useEffect, useState } from 'react'
import Filter from '@Assets/icons/Filter.svg'
import SecurityFilter from '../SecurityFilter'
import EngageModalBox from '@/components/molecules/EngageModalBox'
import Button from '@/components/atoms/Button'
import ArrowIcon from '@Assets/icons/DownCaretMedium.svg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface ISecurityDataTable {
  rowData: IRowData[]
  engageModalDropdownData: { label: string; src: string }[]
  onSend: () => void
}

const StyleTableHeader = styled(TableCell)({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.ampsec.BLUE_TEXT_HIGH,
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  borderBottomColor: theme.palette.primary.main,
})

const StyleCheckboxContainer = styled(TableCell)({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  width: theme.spacing(21.75),
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  borderBottomColor: theme.palette.primary.main,
})

const StyleCheckbox = styled(Checkbox)({
  width: theme.spacing(4),
  height: theme.spacing(4),
})

const StyleRowCheckbox = styled(Checkbox)({
  width: theme.spacing(4),
  height: theme.spacing(4),
  color: theme.palette.text.highEmphasis,
})

const StyleRowCheckboxContainer = styled(TableCell)({
  display: 'flex',
  justifyContent: 'center',
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  borderBottomColor: theme.palette.ampsec.BACKGROUND,
})
const StyleTableRowCell = styled(TableCell)({
  color: theme.palette.text.highEmphasis,
  padding: `0 ${theme.spacing(4)}`,
  whiteSpace: 'nowrap',
  borderBottomColor: theme.palette.ampsec.BACKGROUND,
})
const FilterHeaderContainer = styled(Stack)({
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
  padding: theme.spacing(3),
})

const HeaderTableCellWrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
})

const StyleTableRow = styled(TableRow)({
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
})

const StyleAlternateTableRow = styled(TableRow)({
  backgroundColor: theme.palette.ampsec.BACKGROUND,
})

const TablePaginationContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomLeftRadius: theme.spacing(1),
  borderBottomRightRadius: theme.spacing(1),
  width: '86.5vw',
  padding: '0.6875rem 1rem',
  backgroundColor: theme.palette.darkTheme.STRUCTURAL_CARD_BG,
})

const StyleDropDownContainer = styled(Stack)({
  color: theme.palette.text.highEmphasis,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
})

const StyleDropDown = styled(Select)({
  border: `1px solid ${theme.palette.ampsec.STROKE_100}`,
  color: theme.palette.text.highEmphasis,
  height: theme.spacing(8.5),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  '& .MuiSelect-icon': {
    display: 'none',
  },
})
const StyleNumberOfEngagementCell = styled(TableCell)({
  textAlign: 'center',
  color: theme.palette.text.highEmphasis,
  padding: `0 ${theme.spacing(4)}`,
  borderBottomColor: theme.palette.ampsec.BACKGROUND,
})
const DropDownIcon = styled(Icon)({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
})

const StyleIconButton = styled(Button)({
  width: theme.spacing(4.5),
  height: theme.spacing(4),
  color: theme.palette.primary.main,
  ':disabled': {
    color: theme.palette.text.lowEmphasis,
  },
})

const ButtonWrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  alignItems: 'center',
  height: theme.spacing(6),
})

const StylePaginationButton = styled(Button)({
  color: theme.palette.primary.main,
})
const StyleActivePaginationButton = styled(Button)({
  border: `1px solid ${theme.palette.text.highEmphasis}`,
  color: theme.palette.text.highEmphasis,
  paddingLeft: 0,
  paddingRight: 0,
})

const StyleTableContainer = styled(TableContainer)({
  width: '88.2vw',
  overflowX: 'scroll',
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: `${theme.palette.darkTheme.SCROLL_BAR} ${theme.palette.darkTheme.SCROLL_BAR_BG}`,
  '&::-webkit-scrollbar': {
    width: '10px',
    height: '10px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.darkTheme.SCROLL_BAR_BG,
    border: '1px solid #30363D',
    borderRadius: 12,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.darkTheme.SCROLL_BAR,
    borderRadius: 12,
  },
})

const CustomIconComponent = () => (
  <DropDownIcon src={ArrowIcon} alt="arrow-icon" />
)
const SecurityDataTable = ({
  rowData,
  engageModalDropdownData,
  onSend,
}: ISecurityDataTable) => {
  const [filteredRowData, setFilteredRowData] = useState<IRowData[]>(rowData)
  const [selectedDropdownId, setSelectedDropdownId] = useState<number>(1)
  const [textFieldValue, setTextFieldValue] = useState<string>('')
  const [anchor, setAnchor] = useState<Element | null>(null)
  const [checkboxValues, setCheckboxValues] = useState<boolean[]>(
    Array(10).fill(false)
  )
  const [engageModalBox, setEngageModalBox] = useState<boolean>(false)
  const [selectedIntegratedApi, setSelectedIntegratedApi] = useState<string>('')
  const [securityMessage, setSecurityMessage] = useState<string>('')
  const [page, setPage] = useState<number>(0)

  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [pagination, setPagination] = useState<number[]>([0, 1, 2])
  const [activePageNumber, setActivePageNumber] = useState<number>(page)
  const [totalNumberOfPages, setTotalNumberOfPages] = useState<number>(
    Math.ceil(rowData.length / rowsPerPage) - 1
  )

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowData.length) : 0

  useEffect(() => {
    setActivePageNumber(page)
    setTotalNumberOfPages(Math.ceil(rowData.length / rowsPerPage))
  }, [page, rowsPerPage, rowData.length])

  const handleChangeRowsPerPage = (event: SelectChangeEvent<unknown>) => {
    setRowsPerPage(parseInt(event.target.value as string, 10))
    setPage(0)
  }

  const handleCheckboxChange = (index: number) => {
    const newCheckboxValues = [...checkboxValues]
    newCheckboxValues[index] = !newCheckboxValues[index]
    setCheckboxValues(newCheckboxValues)
  }

  const handlePopupClose = () => {
    setAnchor(null)
  }
  const handlePopClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget)
  }

  const open = Boolean(anchor)
  const handleDropdownClick = (id: number) => {
    setSelectedDropdownId(id)
    if (selectedDropdownId === 1) setEngageModalBox(true)
  }
  const isButtonDisabled = !checkboxValues.some((value) => value)

  const handleSecurityMessage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSecurityMessage(e.target.value)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchText = e.target.value.toLowerCase()
    const filterData = rowData.filter((row) => {
      const nameMatches = row.name.toLowerCase().includes(searchText)
      const severityMatches = row.severity.toLowerCase().includes(searchText)
      const statusMatches = row.status.toLowerCase().includes(searchText)

      return nameMatches || severityMatches || statusMatches
    })

    setFilteredRowData(filterData)
    setTextFieldValue(e.target.value)
    setTotalNumberOfPages(filterData.length / rowsPerPage)
  }
  const startIndex = page * rowsPerPage
  const endIndex = startIndex + rowsPerPage

  const handleIntegratedApiDropdownChange = (e: SelectChangeEvent<unknown>) => {
    setSelectedIntegratedApi(e.target.value as string)
  }
  const isSendButtonDisabled = !selectedIntegratedApi

  const handleNextButtonClick = () => {
    if (activePageNumber >= pagination[2]) {
      setPagination([
        activePageNumber - 1,
        activePageNumber,
        activePageNumber + 1,
      ])
    }
    setPage(activePageNumber + 1)
    setActivePageNumber(activePageNumber + 1)
  }

  const handlePrevButtonClick = () => {
    if (
      activePageNumber >= pagination[0] &&
      activePageNumber + 1 < totalNumberOfPages
    ) {
      setPagination([
        activePageNumber - 1,
        activePageNumber,
        activePageNumber + 1,
      ])
    }
    setPage(activePageNumber - 1)
    setActivePageNumber(activePageNumber - 1)
  }

  const handlePageClick = (newPage: number) => {
    setPage(newPage)
    setActivePageNumber(newPage)
  }

  const handleCurrentPageClick = (val: number) => {
    if (activePageNumber != val && activePageNumber <= totalNumberOfPages) {
      handlePageClick(val)
    }
  }

  return (
    <Stack sx={{ opacity: open ? '0.5' : '' }}>
      <FilterHeaderContainer>
        <FilterHeader
          filedValue={textFieldValue}
          selectedId={selectedDropdownId}
          disabledButton={isButtonDisabled}
          onChange={handleChange}
          onDropDownClick={handleDropdownClick}
          onFilterClick={handlePopClick}
        />
        <SecurityFilter
          selectedId={2}
          filterOpen={open}
          anchorElement={anchor}
          onPopupClose={handlePopupClose}
        />
      </FilterHeaderContainer>
      <Stack>
        <StyleTableContainer data-testid="table">

          <Table>
            <TableHead data-testid="table-head">
              <TableRow>
                <StyleCheckboxContainer>
                  <StyleCheckbox />
                </StyleCheckboxContainer>
                {columns.map((col, index) => (
                  <StyleTableHeader key={col.field}>
                    {
                      <HeaderTableCellWrapper minWidth={col.width}>
                        <Typography variant="body2" label={col.headerName} />
                        {index < columns.length - 1 && (
                          <Icon src={Filter} alt="filter-icon" />
                        )}
                      </HeaderTableCellWrapper>
                    }
                  </StyleTableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody data-testid="table-body">
              {filteredRowData.slice(startIndex, endIndex).map((row, ind) =>
                ind % 2 == 0 ? (
                  <StyleTableRow key={row.id}>
                    <StyleRowCheckboxContainer>
                      <StyleRowCheckbox
                        checked={checkboxValues[ind + 1]}
                        data-testid={`checkbox-${ind + 1}`}
                        onChange={() => handleCheckboxChange(ind + 1)}
                      />
                    </StyleRowCheckboxContainer>
                    <StyleTableRowCell>
                      <Typography label={row.severity} variant="body4" />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography variant="body4" label={row.status} />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography label={row.provider} variant="body4" />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography label={row.domain} variant="body4" />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography variant="body4" label={row.finding} />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography label={row.name} variant="body4" />
                    </StyleTableRowCell>
                    <StyleNumberOfEngagementCell>
                      <Typography
                        label={row.numberOfEngagement.toString()}
                        variant="body4"
                      />
                    </StyleNumberOfEngagementCell>
                    <StyleTableRowCell>
                      <Typography variant="body4" label={row.department} />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography label={row.createdAt} variant="body4" />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography variant="body4" label={row.description} />
                    </StyleTableRowCell>
                  </StyleTableRow>
                ) : (
                  <StyleAlternateTableRow key={row.id}>
                    <StyleRowCheckboxContainer>
                      <StyleRowCheckbox
                        data-testid={`checkbox-${ind + 1}`}
                        onChange={() => handleCheckboxChange(ind + 1)}
                        checked={checkboxValues[ind + 1]}
                      />
                    </StyleRowCheckboxContainer>
                    <StyleTableRowCell>
                      <Typography label={row.severity} variant="body4" />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography variant="body4" label={row.status} />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography label={row.provider} variant="body4" />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography variant="body4" label={row.domain} />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography label={row.finding} variant="body4" />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography variant="body4" label={row.name} />
                    </StyleTableRowCell>
                    <StyleNumberOfEngagementCell>
                      <Typography
                        label={row.numberOfEngagement.toString()}
                        variant="body4"
                      />
                    </StyleNumberOfEngagementCell>
                    <StyleTableRowCell>
                      <Typography variant="body4" label={row.department} />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography label={row.createdAt} variant="body4" />
                    </StyleTableRowCell>
                    <StyleTableRowCell>
                      <Typography variant="body4" label={row.description} />
                    </StyleTableRowCell>
                  </StyleAlternateTableRow>
                )
              )}
              {emptyRows > 0 && (
                <StyleTableRow sx={{ height: 34 * emptyRows }}>
                  <StyleTableRowCell colSpan={columns.length} />
                </StyleTableRow>
              )}
            </TableBody>
          </Table>
        </StyleTableContainer>
        <TableFooter>
          <TablePaginationContainer data-testid="table-pagination">
            <StyleDropDownContainer>
              <StyleDropDown
                data-testid="rows-per-page-options"
                value={rowsPerPage.toString()}
                onChange={handleChangeRowsPerPage}
                IconComponent={CustomIconComponent}
              >
                {ROWS_PER_PAGE.map((val) => (
                  <MenuItem key={val} value={val}>
                    <Typography
                      variant="body4"
                      data-testid={`option-${val}`}
                      label={val.toString()}
                    />
                  </MenuItem>
                ))}
              </StyleDropDown>
              <Typography
                variant="body4"
                label={`of ${filteredRowData.length}`}
              />
            </StyleDropDownContainer>
            <ButtonWrapper>
              <StyleIconButton
                onClick={handlePrevButtonClick}
                disabled={page === 0}
                typographyVariant="button2"
                label=""
                startIcon={<ArrowBackIosIcon />}
              />
              {pagination.map((val) =>
                val === activePageNumber ? (
                  <StyleActivePaginationButton
                    key={val}
                    data-testid={`paginationButton-${val + 1}`}
                    variant={'text'}
                    disabled={val > totalNumberOfPages}
                    typographyVariant="body4"
                    label={(val + 1).toString()}
                  />
                ) : (
                  <StylePaginationButton
                    key={val}
                    data-testid={`paginationButton-${val + 1}`}
                    variant={'text'}
                    typographyVariant="body4"
                    label={(val + 1).toString()}
                    disabled={val > totalNumberOfPages}
                    onClick={() => handleCurrentPageClick(val)}
                  />
                )
              )}
              <StyleIconButton
                onClick={handleNextButtonClick}
                disabled={page === totalNumberOfPages - 1}
                label=""
                startIcon={<ArrowForwardIosIcon />}
              />
            </ButtonWrapper>
          </TablePaginationContainer>
        </TableFooter>
      </Stack>
      <EngageModalBox
        dropdownData={engageModalDropdownData}
        textFieldValue={securityMessage}
        selectedDropdown={selectedIntegratedApi}
        open={engageModalBox}
        disableButton={isSendButtonDisabled}
        handleDropdownChange={handleIntegratedApiDropdownChange}
        onModalCloseClick={() => setEngageModalBox(false)}
        onSend={onSend}
        onChange={handleSecurityMessage}
      />
    </Stack>

  )
}

export default SecurityDataTable
