import Icon from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { UPLOAD_CSV } from '@/utils/constant'
import styled from '@emotion/styled'
import { Box, Stack } from '@mui/material'

interface FilePickerCardProps {
  fileName: string
  fileUrl: string
}
const Container = styled(Box)({
  display: 'flex',
  height: '4.625rem',
  borderRadius: '0.5rem',
  backgroundColor: theme.palette.ampsec.LIGHTISH_DARK_BACKGROUND,
  alignItems: 'center',
  gap: '0.9375rem',
  paddingLeft: '1.25rem',
})

const TypoBox = styled(Stack)({
  display: 'flex',
})

const FilePickerCard = ({ fileUrl, fileName }: FilePickerCardProps) => {
  return (
    <Container>
      <Icon src={fileUrl} alt="File" />
      <TypoBox>
        <Typography
          variant="subtitle4"
          color={theme.palette.darkTheme.HIGH_EMPHASIS}
          label={fileName}
        />
        <Typography
          variant="body4"
          color={theme.palette.text.lowEmphasis}
          label={UPLOAD_CSV}
        />
      </TypoBox>
    </Container>
  )
}

export default FilePickerCard
