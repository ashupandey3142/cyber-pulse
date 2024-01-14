import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextField from '.'

describe('TextField component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TextField />)
    const textField = getByTestId('custom-textfield')

    expect(textField).toBeInTheDocument()
  })

  it('handles onChange event', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(<TextField onChange={handleChange} />)
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

  it('renders with error and helper text', () => {
    const { getByText } = render(
      <TextField error={true} helperText="This is a helper text" />
    )
    const helperText = getByText('This is a helper text')

    expect(helperText).toBeInTheDocument()
  })
})
