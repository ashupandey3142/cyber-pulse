import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import IntegrationHeader from './'

describe('IntegrationHeader Component', () => {
  it('should render without a button when hasButtonLabel is false', () => {
    const { getByText, queryByText } = render(
      <IntegrationHeader
        label="Integrations"
        hasButtonLabel={false}
        buttonLabel="New"
      />
    )

    expect(getByText('Integrations')).toBeInTheDocument()
    expect(queryByText('New')).toBeNull()
  })

  it('should render with a button when hasButtonLabel is true', () => {
    const { getByText, getByTestId } = render(
      <IntegrationHeader
        label="Integrations"
        hasButtonLabel={true}
        buttonLabel="Add New"
      />
    )

    expect(getByText('Integrations')).toBeInTheDocument()
    expect(getByTestId('button')).toBeInTheDocument()
    expect(getByText('Add New')).toBeInTheDocument()
  })
})
