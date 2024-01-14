import { INFO_HEADER } from '@/utils/constant'
import { render, screen } from '@testing-library/react'
import InfoHeader from '.'

describe('InfoHeader', () => {
  it('should render the component', () => {
    render(<InfoHeader />)
    expect(screen.getByText(INFO_HEADER.TITLE)).toBeInTheDocument()
    expect(screen.getByText(INFO_HEADER.SUBTITLE)).toBeInTheDocument()
    expect(screen.getByAltText('info-icon')).toBeInTheDocument()
  })
})
