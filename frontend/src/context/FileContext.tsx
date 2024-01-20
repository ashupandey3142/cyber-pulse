import { createContext, useContext, useMemo, useState } from 'react'

interface FileContextType {
  file: File
  setFile: (file: File) => void
}

const FileContext = createContext<FileContextType | null>(null)

const FileContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [file, setFile] = useState<File>({} as File)
  const value = useMemo(
    () => ({
      file,
      setFile,
    }),
    [file]
  )

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>
}
export default FileContextProvider

export const useFileContext = (): FileContextType =>
  useContext(FileContext) as FileContextType
