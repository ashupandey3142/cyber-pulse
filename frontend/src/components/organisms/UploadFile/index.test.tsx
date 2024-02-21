import FileContextProvider from '@/context/FileContext'
import { UPLOAD_FILE_CONSTANTS } from '@/utils/constant'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import UploadFile from '.'

jest.mock('@/services', () => ({
  uploadFile: jest.fn().mockImplementation(async (file, onUploadProgress) => {
    for (let progress = 0; progress <= 100; progress += 10) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      onUploadProgress(progress)
    }
    return {}
  }),
}))

describe('Testing UploadFile component', () => {
  it('should render with default props', () => {
    render(
      <FileContextProvider>
        <UploadFile />
      </FileContextProvider>
    )
    expect(screen.getByText(UPLOAD_FILE_CONSTANTS.TITLE)).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  it('should update progress bar when file is selected', async () => {
    render(
      <FileContextProvider>
        <UploadFile />
      </FileContextProvider>
    )

    const file = new File(['dummy content'], 'example.csv', {
      type: 'text/csv',
    })
    const input = screen.getByTestId('file-input')
    await act(async () => {
      fireEvent.change(input, { target: { files: [file] } })
    })
    await waitFor(() => {
      expect(screen.getByTestId('circular-progress-bar')).toBeInTheDocument()
      expect(screen.getByTestId('circular-progress-bar')).toHaveTextContent(
        '0%'
      )
    })
  })

  it('should show `uploaded` text when file is uploaded', async () => {
    const onCancel = jest.fn()
    const onProceed = jest.fn()
    render(
      <FileContextProvider>
        <UploadFile onCancel={onCancel} onProceed={onProceed} />
      </FileContextProvider>
    )

    const file = new File(['dummy content'], 'example.csv', {
      type: 'text/csv',
    })
    const input = screen.getByTestId('file-input')
    await act(async () => {
      fireEvent.change(input, { target: { files: [file] } })
    })
    await waitFor(
      () => {
        expect(
          screen.getByText('uploaded', { exact: false })
        ).toBeInTheDocument()
        fireEvent.click(screen.getByRole('button', { name: 'PROCEED' }))
        expect(onProceed).toHaveBeenCalledTimes(1)
      },
      { timeout: 2000 }
    )
  })

  describe('Testing UploadFile component', () => {
    it('should call handleFileSelect when a file is selected', async () => {
      const { getByTestId } = render(
        <FileContextProvider>
          <UploadFile />
        </FileContextProvider>
      )

      const file = new File(['dummy content'], 'example.csv', {
        type: 'text/csv',
      })
      const input = getByTestId('file-input')
      fireEvent.change(input, { target: { files: [file] } })

      expect((input as HTMLInputElement).files?.[0]).toBe(file)
    })

    it('should call handleFileSelect with an empty file when no file is selected', async () => {
      const { getByTestId } = render(
        <FileContextProvider>
          <UploadFile />
        </FileContextProvider>
      )

      const input = getByTestId('file-input')
      fireEvent.change(input, { target: { files: [] } })

      expect((input as HTMLInputElement).files?.[0]).toBe(undefined)
    })
  })
})
