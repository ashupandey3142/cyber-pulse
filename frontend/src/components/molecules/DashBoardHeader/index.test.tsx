import React from 'react'
import { render } from '@testing-library/react'
import { DASHBOARD_TAB_VALUES } from '@/strings/string'
import IntegrationHeader from './'
import { EVERYONE } from '@/utils/constant'
import theme from '@/theme'

describe('IntegrationHeader Component', () => {
  const deActiveTabColor = theme.palette.ampsec.BACKGROUND

  it('should render all three tabs without button when hasButtonLabel is false', () => {
    const { getByText, queryByText } = render(
      <IntegrationHeader
        hasButtonLabel={false}
        buttonLabel={EVERYONE}
        tabValues={DASHBOARD_TAB_VALUES}
        deActiveTabColor={deActiveTabColor}
      />
    )
    expect(getByText('DEPARTMENTS')).toBeInTheDocument()
    expect(getByText('ORGANIZATION')).toBeInTheDocument()
    expect(getByText('USERS')).toBeInTheDocument()
    expect(queryByText('Everyone')).toBeNull()
  })

  it('should render with a button when hasButtonLabel is true', () => {
    const { getByText, getByTestId } = render(
      <IntegrationHeader
        hasButtonLabel={true}
        buttonLabel={EVERYONE}
        tabValues={DASHBOARD_TAB_VALUES}
        deActiveTabColor={deActiveTabColor}
      />
    )

    expect(getByText('DEPARTMENTS')).toBeInTheDocument()
    expect(getByText('ORGANIZATION')).toBeInTheDocument()
    expect(getByText('USERS')).toBeInTheDocument()
    expect(getByTestId('button')).toBeInTheDocument()
    expect(getByText(EVERYONE)).toBeInTheDocument()
  })
})
