import FileContextProvider from '@/context/FileContext'
import { render, screen } from '@testing-library/react'
import FilesPage from '.'

describe('FilesPage', () => {
  it('renders without crashing', () => {
    render(
      <FileContextProvider>
        <FilesPage />
      </FileContextProvider>
    )
    expect(screen.getByText('IMPORT YOUR DATA')).toBeInTheDocument()
  })
})
