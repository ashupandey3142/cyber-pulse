import React from 'react'
import { render } from '@testing-library/react'
import Typography from '.'

describe('Typography Component', () => {
  it('renders the typography component with label and text color', () => {
    const { getByText } = render(
      <Typography label="Test Label" textColor="#333" />
    )

    const typographyElement = getByText('Test Label')

    expect(typographyElement).toBeInTheDocument()
    expect(typographyElement).toHaveStyle('color: #333')
  })

  it('renders the typography component with custom variant', () => {
    const { getByText } = render(
      <Typography label="Test Label" typographyVariant="h6" />
    )

    const typographyElement = getByText('Test Label')

    expect(typographyElement).toBeInTheDocument()
    expect(typographyElement.tagName).toBe('H6')
  })
})
