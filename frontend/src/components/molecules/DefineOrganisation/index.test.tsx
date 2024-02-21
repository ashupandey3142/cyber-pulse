import { fireEvent, render, waitFor } from '@testing-library/react'
import DefineOrganisation from '.'
import { SELECT_TEXT } from '@/utils/constant'

describe('Define Organisation Mock Component', () => {
  it('renders DefineOrganisation component', () => {
    const { getByText } = render(<DefineOrganisation />)
    expect(getByText(SELECT_TEXT)).toBeInTheDocument()
  })

  it('toggles the options on button click', () => {
    const { getByRole, getByText } = render(<DefineOrganisation />)

    fireEvent.click(getByRole('button'))

    waitFor(() => {
      expect(getByText('Option 1')).toBeInTheDocument()
      expect(getByText('Option 2')).toBeInTheDocument()
      expect(getByText('Option 3')).toBeInTheDocument()
    })
  })

  it('selects an option on click', () => {
    const { getByRole, getByText } = render(<DefineOrganisation />)

    fireEvent.click(getByRole('button'))
    waitFor(() => {
      fireEvent.click(getByText('Option 2'))
      expect(getByText('Option 2')).toHaveStyle('background-color: transparent')
    })
  })

  it('closes the options on selecting an option', () => {
    const { getByRole, getByText, queryByText } = render(<DefineOrganisation />)

    fireEvent.click(getByRole('button'))
    waitFor(() => {
      fireEvent.click(getByText('Option 2'))
      expect(queryByText('Option 1')).toBeNull()
      expect(queryByText('Option 2')).toBeNull()
      expect(queryByText('Option 3')).toBeNull()
    })
  })
})
