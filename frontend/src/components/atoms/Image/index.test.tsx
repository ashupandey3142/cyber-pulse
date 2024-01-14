import { screen, render } from '@testing-library/react'
import Home from '../../../../public/assets/image/CoverageImage.svg'
import Image from './'
describe('ImageComponent Testcases', () => {
  it('should render Image component', () => {
    render(<Image src={Home} alt="home" />)
  })

  it('should render Image props alternate text component', () => {
    render(<Image src={Home} alt="homeImage" />)
    const altMessage = screen.getByAltText('homeImage')
    expect(altMessage).toBeDefined()
  })
})
