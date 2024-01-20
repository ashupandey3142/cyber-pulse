import { useFileContext } from '@/context/FileContext'
import { uploadFile } from '@/services'
import { CancelTokenSource } from 'axios'
import { useEffect, useRef, useState } from 'react'

const useFileUpload = () => {
  const [progressValue, setProgressValue] = useState<number>(0)
  const [showBrowse, setShowBrowse] = useState<boolean>(true)
  const [showProgress, setShowProgress] = useState<boolean>(false)
  const [cancelTokenSource, setCancelTokenSource] =
    useState<CancelTokenSource | null>(null)
  const { setFile } = useFileContext()
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    return () => {
      if (cancelTokenSource) {
        cancelTokenSource.cancel('Upload canceled due to component unmount')
      }
    }
  }, [cancelTokenSource])

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile)
    setShowBrowse(false)
    setShowProgress(true)

    const { cancelSource } = await uploadFile(selectedFile, (progress) =>
      setProgressValue(progress)
    )

    setCancelTokenSource(cancelSource)
  }

  const handleCancelOrReupload = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('Upload canceled by the user')
    }

    setShowBrowse(true)
    setShowProgress(false)
    setProgressValue(0)
    setFile(new File([], ''))
    setCancelTokenSource(null)
  }

  if (fileInputRef.current) fileInputRef.current.value = ''

  const getUploadComponentProps = () => ({
    showBrowse,
    showProgress,
    progressValue,
    fileInputRef,
    handleClick: () => {
      if (fileInputRef.current) {
        fileInputRef.current.click()
      }
    },
    handleFileSelect,
    handleCancelOrReupload,
  })

  return getUploadComponentProps
}

export default useFileUpload
