import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import SecurityFilter from '.'
import { APPLY, CLEAR, FILTER_MENU, ISSUE_TYPE_MENU } from '@/utils/constant'
import userEvent from '@testing-library/user-event'

describe('SecurityFilter', () => {
  const mockHandleClear = jest.fn()
  const mockHandleApply = jest.fn()
  const mockHandleClick = jest.fn()

  const renderComponent = (filterOpen: boolean) =>
    render(
      <SecurityFilter
        filterOpen={filterOpen}
        anchorElement={document.body}
        selectedId={1}
        handleClear={mockHandleClear}
        handleApply={mockHandleApply}
        handleCheckboxClick={mockHandleClick}
      />
    )

  it('renders SecurityFilter component with menu items', () => {
    const { getByText } = renderComponent(true)

    FILTER_MENU.forEach((menu) => {
      expect(getByText(menu.label)).toBeInTheDocument()
    })
  })

  it('opens issue type menu when a menu item is clicked', () => {
    const { getByTestId, getByText } = renderComponent(true)
    FILTER_MENU.forEach((menu) => {
      expect(getByText(menu.label)).toBeInTheDocument()
      fireEvent.click(getByText(menu.label))
    })

    expect(getByTestId('issue-type-popup')).toBeInTheDocument()
    ISSUE_TYPE_MENU.forEach((menu) => {
      expect(getByText(menu.label)).toBeInTheDocument()
    })
    expect(getByText(APPLY)).toBeInTheDocument()
    expect(getByText(CLEAR)).toBeInTheDocument()
  })

  it('calls handleClear when Clear button is clicked', () => {
    const { getByTestId, getByText } = renderComponent(true)
    FILTER_MENU.forEach((menu) => {
      expect(getByText(menu.label)).toBeInTheDocument()
      fireEvent.click(getByText(menu.label))
    })

    fireEvent.click(getByTestId('clear-button'))

    expect(mockHandleClear).toHaveBeenCalled()
  })

  it('calls handleApply when Apply button is clicked', () => {
    const { getByTestId, getByText } = renderComponent(true)
    FILTER_MENU.forEach((menu) => {
      expect(getByText(menu.label)).toBeInTheDocument()
      fireEvent.click(getByText(menu.label))
    })
    fireEvent.click(getByTestId('apply-button'))

    expect(mockHandleApply).toHaveBeenCalled()
  })

  it('issue type popup should close', async () => {
    const { getByText } = renderComponent(true)
    const Severity = getByText(FILTER_MENU[0].label)
    fireEvent.click(Severity)
    const issueType1 = getByText(ISSUE_TYPE_MENU[0].label)
    expect(issueType1).toBeInTheDocument()
    expect(Severity).toBeInTheDocument()
    userEvent.keyboard('{esc}')
    await waitFor(() => {
      expect(issueType1).not.toBeInTheDocument()
    })
  })
  it('calls handleCheckboxClick when a checkbox is clicked', () => {
    const { getByText } = renderComponent(true)

    FILTER_MENU.forEach((menu) => {
      expect(getByText(menu.label)).toBeInTheDocument()
      fireEvent.click(getByText(menu.label))
    })

    ISSUE_TYPE_MENU.forEach((menu) => {
      const checkboxLabel = getByText(menu.label)
      fireEvent.click(checkboxLabel)

      expect(mockHandleClick).toHaveBeenCalledWith(expect.anything())
    })
  })
})
