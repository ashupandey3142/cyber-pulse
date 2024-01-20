import UploadFile from '@/components/organisms/UploadFile'
import AuthTemplate from '@/components/templates/AuthTemplate'

const FilesPage = () => {
  return (
    <AuthTemplate>
      <UploadFile sx={{ width: '80vw' }} />
    </AuthTemplate>
  )
}

export default FilesPage
