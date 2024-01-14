import React from 'react'
import { render } from '@testing-library/react'
import Graph from '.'
import { MONTH } from '@/utils/constant'

jest.mock('react-chartjs-2', () => ({
  Line: () => <div />,
}))

describe('Graph component', () => {
  it('renders without crashing', () => {
    const graphValues = [10, 20, 15, 25, 30, 35, 40]

    const { getByTestId } = render(
      <Graph
        width={400}
        height={400}
        labels={MONTH}
        graphValues={graphValues}
      />
    )
    expect(getByTestId('line-graph')).toBeInTheDocument()
  })
})
