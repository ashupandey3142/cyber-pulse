import { fireEvent, render } from '@testing-library/react'
import Icon from '.'
import CheckLogo from '../../../../public/assets/icons/check.svg'

describe('Test Icon component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Icon src={CheckLogo} alt="check logo" />)
    expect(getByTestId('icon-component')).toBeInTheDocument()
  })

  it('should render correctly with onClick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Icon src={CheckLogo} alt="check logo" onClick={onClick} />
    )
    fireEvent.click(getByTestId('icon-component'))
    expect(onClick).toHaveBeenCalled()
  })
})
