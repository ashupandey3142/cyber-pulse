import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '.'

describe('Button Component', () => {
  it('renders button with label', () => {
    const { getByText } = render(<Button label="Click me" />)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('executes onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button label="Click me" onClick={onClickMock} />
    )
    const buttonElement = getByText('Click me')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
  it('should render a disabled button', () => {
    const { getByTestId } = render(<Button label="Click me" disabled={true} />)

    const button = getByTestId('button')
    expect(button).toBeDisabled()
  })

  it('should not trigger onClick for a disabled button', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <Button label="Click me" disabled={true} onClick={onClickMock} />
    )

    const button = getByTestId('button')
    fireEvent.click(button)

    expect(onClickMock).not.toHaveBeenCalled()
  })
})
