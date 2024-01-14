import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import EngageModalBox from '.'

describe('EngageModalBox', () => {
  const dropdownData = [
    { label: 'Option 1', src: 'icon1.png' },
    { label: 'Option 2', src: 'icon2.png' },
  ]

  it('renders EngageModalBox component with initial values', () => {
    const { getByText, getByRole, getByAltText } = render(
      <EngageModalBox
        open={true}
        dropdownData={dropdownData}
        selectedDropdown="Option 1"
        textFieldValue="Some text"
        onChange={() => {}}
        handleDropdownChange={() => {}}
        onModalCloseClick={() => {}}
        onSend={() => {}}
      />
    )

    expect(getByText('ENGAGE WITH EMPLOYEES')).toBeInTheDocument()
    expect(getByText('Medium')).toBeInTheDocument()

    expect(getByAltText('social-icon')).toBeInTheDocument()
    expect(getByText('Option 1')).toBeInTheDocument()
    expect(getByRole('textbox')).toHaveValue('Some text')

    expect(getByText('Copy CISO')).toBeInTheDocument()
    expect(getByText('SEND')).toBeInTheDocument()
  })

  it('calls onChange function with the provided text field value', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(
      <EngageModalBox
        open={true}
        dropdownData={dropdownData}
        onChange={handleChange}
        handleDropdownChange={() => {}}
        onModalCloseClick={() => {}}
        onSend={() => {}}
      />
    )

    const textField = getByRole('textbox') as HTMLInputElement

    fireEvent.change(textField, { target: { value: 'Test Input' } })

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'Test Input',
        }),
      })
    )
  })

  it('calls onModalCloseClick function when modal is closed', () => {
    const handleClose = jest.fn()
    const { getAllByTestId } = render(
      <EngageModalBox
        open={true}
        dropdownData={dropdownData}
        onChange={() => {}}
        handleDropdownChange={() => {}}
        onModalCloseClick={handleClose}
        onSend={() => {}}
      />
    )

    const crossIcon = getAllByTestId('icon-component')
    fireEvent.click(crossIcon[0])

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onSend function when SEND button is clicked', () => {
    const handleSend = jest.fn()
    const { getByText } = render(
      <EngageModalBox
        open={true}
        dropdownData={dropdownData}
        onChange={() => {}}
        handleDropdownChange={() => {}}
        onModalCloseClick={() => {}}
        onSend={handleSend}
      />
    )

    const sendButton = getByText('SEND')
    fireEvent.click(sendButton)

    expect(handleSend).toHaveBeenCalledTimes(1)
  })

  it('renders without crashing when dropdownData prop is not provided', () => {
    const { getByText } = render(
      <EngageModalBox
        open={true}
        dropdownData={[]}
        onChange={() => {}}
        handleDropdownChange={() => {}}
        onModalCloseClick={() => {}}
        onSend={() => {}}
      />
    )

    expect(getByText('ENGAGE WITH EMPLOYEES')).toBeInTheDocument()
    expect(getByText('Medium')).toBeInTheDocument()

    expect(getByText('Copy CISO')).toBeInTheDocument()
    expect(getByText('SEND')).toBeInTheDocument()
  })
})
