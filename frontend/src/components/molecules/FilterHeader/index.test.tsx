import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FilterHeader from '.'
import { FILTER } from '@/utils/constant'

describe('FilterHeader', () => {
  const mockOnChange = jest.fn()
  const mockOnDropDownClick = jest.fn()
  const mockOnFilterClick = jest.fn()

  const renderComponent = () => {
    return render(
      <FilterHeader
        selectedId={1}
        onChange={mockOnChange}
        onDropDownClick={mockOnDropDownClick}
        onFilterClick={mockOnFilterClick}
      />
    )
  }

  it('renders FilterHeader component with initial values', () => {
    const { getByPlaceholderText, getByText } = renderComponent()

    expect(getByPlaceholderText('Search')).toBeInTheDocument()
    expect(getByText(FILTER)).toBeInTheDocument()
  })

  it('calls onChange when text field value changes', () => {
    const { getByPlaceholderText } = renderComponent()

    const textField = getByPlaceholderText('Search')
    fireEvent.change(textField, { target: { value: 'Test Input' } })

    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'Test Input',
        }),
      })
    )
  })

  it('calls onFilterClick when Filter button is clicked', () => {
    const { getByText } = renderComponent()

    const filterButton = getByText(FILTER)
    fireEvent.click(filterButton)

    expect(mockOnFilterClick).toHaveBeenCalledTimes(1)
  })

  it('calls onDropDownClick when DropDown is clicked', () => {
    const { getByText } = renderComponent()

    expect(getByText('ACTION')).toBeInTheDocument()
    fireEvent.click(getByText('ACTION'))
    const dropDownButton = getByText('ENGAGE')
    fireEvent.click(dropDownButton)

    expect(mockOnDropDownClick).toHaveBeenCalledTimes(1)
  })
})
