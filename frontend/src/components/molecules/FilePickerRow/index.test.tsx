import { render } from '@testing-library/react'
import FilePickerCard from '.'
import FileCard from '@Assets/icons/file.svg'
import { SPREADSHEET } from '@/utils/constant'

describe('FilePickerCard Component Test Case', () => {
  it('should render component with fileName and label', () => {
    const { getByText } = render(
      <FilePickerCard fileName={'SPREADSHEET'} fileUrl={FileCard} />
    )

    const spreadSheet = getByText(SPREADSHEET)
    expect(spreadSheet).toBeInTheDocument()
  })

  it('should render component with file Image', () => {
    const { getByAltText } = render(
      <FilePickerCard fileName={'SPREADSHEET'} fileUrl={FileCard} />
    )

    const spreadSheet = getByAltText('File')
    expect(spreadSheet).toBeInTheDocument()
  })
})
