import { render } from '@testing-library/react'
import Avatar from '.'
import AvatarPic from '../../../../public/assets/icons/avtar.svg'

describe('testing Avatar component', () => {
  it('should render Correctly component', () => {
    const { getByTestId } = render(<Avatar src={AvatarPic} alt="avatar" />)
    expect(getByTestId('avatar-component')).toBeInTheDocument()
  })
})
