import { DASHBOARD } from '@/utils/constant'
import { render } from '@testing-library/react'
import ImageWithText from '.'

describe('ImageWithText Component', () => {
  it('should render ImageWithText component with the provided fileName', () => {
    const fileName = DASHBOARD
    const { getByText, getByAltText } = render(
      <ImageWithText fileName={fileName} />
    )
    expect(getByText(fileName)).toBeInTheDocument()
    expect(getByAltText('File')).toBeInTheDocument()
  })
})
