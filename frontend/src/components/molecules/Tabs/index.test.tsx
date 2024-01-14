import { render } from '@testing-library/react'
import Tabs from '.'

describe('Tabs', () => {
  it('renders Tabs component with Active and DeActive tabs', () => {
    const tabValues = ['Tab1', 'Tab2', 'Tab3']
    const deActiveTabColor = '#888888'

    const { getByText, getByTestId } = render(
      <Tabs tabValues={tabValues} deActiveTabColor={deActiveTabColor} />
    )
    expect(getByTestId('tabs')).toBeInTheDocument()
    expect(getByText('Tab1')).toBeInTheDocument()
    expect(getByText('Tab2')).toBeInTheDocument()
    expect(getByText('Tab2')).toHaveStyle(`color: ${deActiveTabColor}`)

    expect(getByText('Tab3')).toBeInTheDocument()
    expect(getByText('Tab3')).toHaveStyle(`color: ${deActiveTabColor}`)
  })
  it('renders Tabs component correctly with empty array', () => {
    const tabValues: string[] = []
    const deActiveTabColor = '#888888'

    const { queryByTestId, queryByText } = render(
      <Tabs tabValues={tabValues} deActiveTabColor={deActiveTabColor} />
    )

    expect(queryByTestId('tabs')).toBeInTheDocument()

    expect(queryByText('Tab1')).toBeNull()
    expect(queryByText('Tab2')).toBeNull()
    expect(queryByText('Tab3')).toBeNull()
  })
})
