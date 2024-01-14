import { fireEvent, render } from '@testing-library/react'
import ActiveToolCard from '.'
import GoogleIcon from '@Assets/icons/Switch.svg'
import { CONFIGURE } from '@/utils/constant'
describe('ActivationTool Card Component', () => {
  it('should render identity name and icon alt ', () => {
    const { getByAltText, getByText } = render(
      <ActiveToolCard
        src={GoogleIcon}
        alt={'Google'}
        intgrationLabel={'Google'}
      />
    )
    expect(getByAltText('Google')).toBeInthDocument
    expect(getByText('Google SSO'))
  })
  it('should configure click active  ', () => {
    const handleChange = jest.fn()
    const { getByText } = render(
      <ActiveToolCard
        src={GoogleIcon}
        alt={'api'}
        intgrationLabel={'SLACK'}
        handleConfigureClick={handleChange}
      />
    )
    expect(getByText('SLACK SSO')).toBeInTheDocument()
    fireEvent.click(getByText(CONFIGURE))
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
