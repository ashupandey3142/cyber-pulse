import React from 'react'
import { render } from '@testing-library/react'
import CircularProgress from '.'

describe('CircularProgress', () => {
  it('renders CircularProgress with correct value', () => {
    const value = 50

    const { getByText, getByRole } = render(<CircularProgress value={value} />)

    expect(getByText(`${value}%`)).toBeInTheDocument()

    const circularProgress = getByRole('progressbar')
    expect(circularProgress).toBeInTheDocument()
  })
})
