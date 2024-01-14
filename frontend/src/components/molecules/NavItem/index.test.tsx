import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import NavItem from '.'

describe('NavItem', () => {
  it('renders without crashing', () => {
    const { getByText, getByAltText } = render(
      <NavItem src="example.png" alt="example" label="Example" />
    )

    expect(getByAltText('example')).toBeInTheDocument()
    expect(getByText('Example')).toBeInTheDocument()
  })

  it('executes onClick function when clicked', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <NavItem
        src="example.png"
        alt="example"
        label="Example"
        onClick={handleClick}
      />
    )

    const container = getByTestId('nav-item')
    fireEvent.click(container)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
