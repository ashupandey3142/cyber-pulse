import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import SecurityDataTable from '.'
import { serverData } from '@/components/mocks/mockData'
import { transformIntoSecurityFindingData } from '@/utils/function'
import {
  APPLY,
  CLEAR,
  ENGAGE_MODAL_DROP_DOWN_DATA,
  FILTER,
  FILTER_MENU,
  ISSUE_TYPE_MENU,
} from '@/utils/constant'
import userEvent from '@testing-library/user-event'

const rowData = transformIntoSecurityFindingData(serverData[0])
const onSend = jest.fn()

describe('SecurityDataTable Component', () => {
  it('renders initial layout with FilterHeader, Table, and Pagination', async () => {
    const {
      getByAltText,
      getAllByText,
      getByText,
      getByPlaceholderText,
      getByTestId,
    } = render(
      <SecurityDataTable
        rowData={rowData}
        engageModalDropdownData={ENGAGE_MODAL_DROP_DOWN_DATA}
        onSend={onSend}
      />
    )

    expect(getByTestId('ArrowBackIosIcon')).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByAltText('chevron-down')).toBeInTheDocument()
    expect(getAllByText('3')[0]).toBeInTheDocument()
    expect(getByTestId('table')).toBeInTheDocument()
    expect(getByTestId('table-body')).toBeInTheDocument()
    expect(getByTestId('table-head')).toBeInTheDocument()
    expect(getByTestId('table-pagination')).toBeInTheDocument()

    expect(getByPlaceholderText('Search')).toBeInTheDocument()
    expect(getByText(FILTER)).toBeInTheDocument()

    fireEvent.click(getByText(FILTER))
    const filterModal = getByText(FILTER_MENU[1].label)
    FILTER_MENU.forEach((menu) => {
      expect(getAllByText(menu.label)[0]).toBeInTheDocument()
      fireEvent.click(getAllByText(menu.label)[0])
    })

    const issuePopup = getByTestId('issue-type-popup')

    expect(issuePopup).toBeInTheDocument()
    ISSUE_TYPE_MENU.forEach((menu) => {
      expect(getByText(menu.label)).toBeInTheDocument()
    })
    expect(getByText(APPLY)).toBeInTheDocument()
    expect(getByText(CLEAR)).toBeInTheDocument()

    userEvent.keyboard('{esc}')
    await waitFor(() => {
      expect(issuePopup).not.toBeInTheDocument()
    })
    userEvent.keyboard('{esc}')
    await waitFor(() => {
      expect(filterModal).not.toBeInTheDocument()
    })
  })

  it('should open Engage Modal Box and close modal', () => {
    const { getByText, getByTestId, getByAltText, getAllByText, getByRole } =
      render(
        <SecurityDataTable
          rowData={rowData}
          engageModalDropdownData={ENGAGE_MODAL_DROP_DOWN_DATA}
          onSend={onSend}
        />
      )

    expect(getByTestId('checkbox-2')).toBeInTheDocument()
    fireEvent.click(getByTestId('checkbox-2'))
    expect(getByTestId('checkbox-2').firstChild).toBeChecked()

    fireEvent.click(getByTestId('checkbox-3'))
    expect(getByTestId('checkbox-3').firstChild).toBeChecked()

    fireEvent.click(getByTestId('checkbox-2'))
    expect(getByTestId('checkbox-2').firstChild).not.toBeChecked()

    expect(getByText('ACTION')).toBeInTheDocument()
    fireEvent.click(getByText('ACTION'))

    const dropDownButton = getByText('ENGAGE')
    fireEvent.click(dropDownButton)

    const engageWithEmp = getByText('ENGAGE WITH EMPLOYEES')
    const medium = getAllByText('Medium')[0]
    expect(engageWithEmp).toBeInTheDocument()
    expect(medium).toBeInTheDocument()
    const textField = getByRole('textbox') as HTMLInputElement

    fireEvent.change(textField, { target: { value: 'Test Input' } })

    expect(textField).toHaveValue('Test Input')
    expect(getByText('Copy CISO')).toBeInTheDocument()
    expect(getByText('SEND')).toBeInTheDocument()

    fireEvent.click(getByAltText('cross-icon'))

    expect(engageWithEmp).not.toBeInTheDocument()
    expect(textField).not.toBeInTheDocument()
  })

  it('correctly handles Engage Modal Box: Opens, selects option, enters text, and sends message', () => {
    const { getByText, getByTestId, getByRole } = render(
      <SecurityDataTable
        rowData={rowData}
        engageModalDropdownData={ENGAGE_MODAL_DROP_DOWN_DATA}
        onSend={onSend}
      />
    )

    expect(getByTestId('checkbox-2')).toBeInTheDocument()
    fireEvent.click(getByTestId('checkbox-2'))
    expect(getByTestId('checkbox-2').firstChild).toBeChecked()

    expect(getByText('ACTION')).toBeInTheDocument()
    fireEvent.click(getByText('ACTION'))

    const dropDownButton = getByText('ENGAGE')
    fireEvent.click(dropDownButton)

    fireEvent.mouseDown(getByRole('combobox'))
    expect(getByText('Slack')).toBeInTheDocument()
    fireEvent.click(getByText('Slack'))

    const textField = getByRole('textbox') as HTMLInputElement
    fireEvent.change(textField, { target: { value: 'Test Input' } })

    expect(textField).toHaveValue('Test Input')

    expect(getByText('SEND')).toBeInTheDocument()
    fireEvent.click(getByText('SEND'))

    expect(onSend).toHaveBeenCalled()
  })

  it('should filter data properly', () => {
    const { getByText, getByPlaceholderText } = render(
      <SecurityDataTable
        rowData={rowData}
        engageModalDropdownData={ENGAGE_MODAL_DROP_DOWN_DATA}
        onSend={onSend}
      />
    )
    const lowEmp = getByText('Raghavendhar J')
    const midEmp = getByText('Sudhir Rao')
    expect(getByText('of 23')).toBeInTheDocument()
    expect(midEmp).toBeInTheDocument()
    expect(lowEmp).toBeInTheDocument()
    const textField = getByPlaceholderText('Search')
    fireEvent.change(textField, { target: { value: 'Medium' } })

    expect(midEmp).toBeInTheDocument()
    expect(lowEmp).not.toBeInTheDocument()
    expect(getByText('of 12')).toBeInTheDocument()
  })

  it('renders pagination buttons correctly', () => {
    const { getByTestId, getByText } = render(
      <SecurityDataTable
        rowData={rowData}
        engageModalDropdownData={ENGAGE_MODAL_DROP_DOWN_DATA}
        onSend={onSend}
      />
    )

    const firstPageEmployee = [
      getByText('Sudhir Rao'),
      getByText('Pranava Shashank Pindi'),
      getByText('Raghavendhar J'),
    ]
    expect(getByTestId('paginationButton-1')).toBeInTheDocument()
    const previousButton = getByTestId('ArrowBackIosIcon')
    const nextButton = getByTestId('ArrowForwardIosIcon')
    expect(previousButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
    firstPageEmployee.forEach((emp) => expect(emp).toBeInTheDocument())

    fireEvent.click(nextButton)
    const secPageEmployee = [
      getByText('Charul Mehta'),
      getByText('Mahesh Babu Kuraganti'),
      getByText('Bharti Sagar'),
    ]
    expect(getByTestId('paginationButton-2')).toBeInTheDocument()
    firstPageEmployee.forEach((emp) => expect(emp).not.toBeInTheDocument())
    secPageEmployee.forEach((emp) => expect(emp).toBeInTheDocument())

    fireEvent.click(previousButton)
    expect(getByTestId('paginationButton-1')).toBeInTheDocument()
    secPageEmployee.forEach((emp) => expect(emp).not.toBeInTheDocument())
  })

  it('correctly handles pagination updates when changing rows per page', () => {
    const { getByTestId, getByRole } = render(
      <SecurityDataTable
        rowData={rowData}
        engageModalDropdownData={ENGAGE_MODAL_DROP_DOWN_DATA}
        onSend={onSend}
      />
    )

    fireEvent.mouseDown(getByRole('combobox'))
    expect(getByTestId('option-5')).toBeInTheDocument()
    fireEvent.click(getByTestId('option-5'))

    expect(getByTestId('paginationButton-1')).toBeInTheDocument()
    const previousButton = getByTestId('ArrowBackIosIcon')
    const nextButton = getByTestId('ArrowForwardIosIcon')
    expect(previousButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
    const paginationButton1 = getByTestId('paginationButton-1')
    const paginationButton2 = getByTestId('paginationButton-2')
    const paginationButton3 = getByTestId('paginationButton-3')

    expect(paginationButton1).toBeInTheDocument()
    expect(paginationButton2).toBeInTheDocument()
    expect(paginationButton3).toBeInTheDocument()
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    const paginationButton4 = getByTestId('paginationButton-4')

    expect(paginationButton1).not.toBeInTheDocument()
    expect(paginationButton4).toBeInTheDocument()
    fireEvent.click(previousButton)
    fireEvent.click(previousButton)
    fireEvent.click(previousButton)
    expect(getByTestId('paginationButton-1')).toBeInTheDocument()
    expect(paginationButton4).not.toBeInTheDocument()
  })

  it('change pagination buttons styles correctly', () => {
    const { getByTestId, getByText } = render(
      <SecurityDataTable
        rowData={rowData}
        engageModalDropdownData={ENGAGE_MODAL_DROP_DOWN_DATA}
        onSend={onSend}
      />
    )

    const firstPageEmployee = [
      getByText('Sudhir Rao'),
      getByText('Pranava Shashank Pindi'),
      getByText('Raghavendhar J'),
    ]
    expect(getByTestId('paginationButton-1')).toBeInTheDocument()
    expect(getByTestId('paginationButton-2')).toBeInTheDocument()
    expect(getByTestId('paginationButton-1')).toBeInTheDocument()
    expect(getByTestId('paginationButton-1')).toHaveStyle({
      border: '1px solid #ffffff',
    })
    expect(getByTestId('paginationButton-2')).toHaveStyle({ border: '0px' })
    firstPageEmployee.forEach((emp) => expect(emp).toBeInTheDocument())

    fireEvent.click(getByTestId('paginationButton-2'))
    const secPageEmployee = [
      getByText('Charul Mehta'),
      getByText('Mahesh Babu Kuraganti'),
      getByText('Bharti Sagar'),
    ]
    firstPageEmployee.forEach((emp) => expect(emp).not.toBeInTheDocument())
    secPageEmployee.forEach((emp) => expect(emp).toBeInTheDocument())
    expect(getByTestId('paginationButton-2')).toHaveStyle({
      border: '1px solid #ffffff',
    })
    expect(getByTestId('paginationButton-1')).toHaveStyle({ border: '0px' })

    expect(getByTestId('paginationButton-3')).toHaveStyle({ border: '0px' })
    fireEvent.click(getByTestId('paginationButton-3'))
    expect(getByTestId('paginationButton-3')).toHaveStyle({
      border: '1px solid #ffffff',
    })
    expect(getByTestId('paginationButton-2')).toHaveStyle({ border: '0px' })
  })
})
