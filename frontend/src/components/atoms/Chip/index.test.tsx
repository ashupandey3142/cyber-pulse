import { render } from '@testing-library/react'
import Chip from '.'

describe('testing chip component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Chip label="test" />)
    expect(getByTestId('chip-component')).toBeInTheDocument()
  })
})
