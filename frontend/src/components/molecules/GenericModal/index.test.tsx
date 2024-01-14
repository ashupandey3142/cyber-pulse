import { fireEvent, render, screen } from '@testing-library/react'
import GenericModal from '.'

describe('GenericModal', () => {
  it('should render the component', () => {
    render(<GenericModal title={'ENGAGE WITH EMPLOYEES'} open={true} />)
    screen.getByText('ENGAGE WITH EMPLOYEES')
    expect(screen.getAllByTestId('icon-component').length).toBe(1)
  })

  it('should render the component with back icon', () => {
    render(
      <GenericModal title={'ADD INTEGRATION'} open={true} isBackIcon={true} />
    )
    screen.getByText('ADD INTEGRATION')
    expect(screen.getAllByTestId('icon-component').length).toBe(2)
  })

  it('should call onBackClick when clicked on back icon', () => {
    const onBackClick = jest.fn()
    render(
      <GenericModal
        title={'ADD INTEGRATION'}
        open={true}
        isBackIcon={true}
        onBackButtonClick={onBackClick}
      />
    )
    screen.getByText('ADD INTEGRATION')
    const backIcon = screen.getAllByTestId('icon-component')[0]
    fireEvent.click(backIcon)
    expect(onBackClick).toHaveBeenCalledTimes(1)
  })

  it('should call onClose when clicked on cross icon', () => {
    const onClose = jest.fn()
    render(
      <GenericModal
        title={'ADD INTEGRATION'}
        open={true}
        onCloseClick={onClose}
      />
    )
    screen.getByText('ADD INTEGRATION')
    const crossIcon = screen.getByTestId('icon-component')
    fireEvent.click(crossIcon)
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
