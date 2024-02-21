import { render } from '@testing-library/react'
import AuthTemplate from '.'

describe('AuthTemplate Testcases', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<AuthTemplate>Test Content</AuthTemplate>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('renders default text when no children are provided', () => {
    const { getByText } = render(<AuthTemplate />)
    expect(getByText('children')).toBeInTheDocument()
  })
})
