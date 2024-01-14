import { fireEvent, render, waitFor } from '@testing-library/react'
import DropDown from '.'
import { NO_OPTION } from '@/utils/constant'

const actionProps = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
]

describe('DropDown component', () => {
  it('should render with given props', () => {
    const selectedId = 1
    const handleClick = jest.fn()

    const { getByText } = render(
      <DropDown
        cardData={actionProps}
        selectedId={selectedId}
        handleClick={handleClick}
      />
    )

    expect(getByText('ACTION')).toBeInTheDocument()
    fireEvent.click(getByText('ACTION'))
    expect(getByText('Option 1')).toBeInTheDocument()
    expect(getByText('Option 2')).toBeInTheDocument()
    expect(getByText('Option 3')).toBeInTheDocument()
  })

  it('should opens popover on button click', () => {
    const selectedId = 1
    const handleClick = jest.fn()

    const { getByText, getByTestId } = render(
      <DropDown
        cardData={actionProps}
        selectedId={selectedId}
        handleClick={handleClick}
      />
    )

    fireEvent.click(getByText('ACTION'))
    const popover = getByTestId('popover')
    expect(popover).toBeInTheDocument()
  })

  it('should call handleClick when an option is clicked', () => {
    const selectedId = 1
    const handleClick = jest.fn()

    const { getByText } = render(
      <DropDown
        cardData={actionProps}
        selectedId={selectedId}
        handleClick={handleClick}
      />
    )

    fireEvent.click(getByText('ACTION'))

    fireEvent.click(getByText('Option 1'))

    expect(handleClick).toHaveBeenCalledWith(1)
  })

  it('should close the dropdown when clicking outside', async () => {
    const { getByText, queryByTestId } = render(
      <DropDown cardData={actionProps} selectedId={1} handleClick={() => {}} />
    )
    fireEvent.click(getByText('ACTION'))
    await waitFor(() => {
      fireEvent.click(document)
      expect(queryByTestId('popover')).not.toBeNull()
    })
  })

  it('should display "No options available" when carddata is empty', async () => {
    const { getByText, getByTestId } = render(
      <DropDown cardData={[]} selectedId={1} handleClick={() => {}} />
    )

    fireEvent.click(getByText('ACTION'))
    expect(getByTestId('dropdown-button1')).toBeInTheDocument()
    expect(getByText(NO_OPTION)).toBeInTheDocument()
  })
})
