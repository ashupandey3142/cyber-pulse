import TextField from '@/components/atoms/TextField'
import { NAV_MENU_ITEMS_MOCKS, SOCIAL_TOOLS } from '@/components/mocks/mockData'
import GenericModal from '@/components/molecules/GenericModal'
import NavMenuItem from '@/components/molecules/NavMenuItem'
import SocialCard from '@/components/molecules/SocialCard'
import theme from '@/theme'
import { TOOL_INTEGRATION_DATA } from '@/utils/constant'
import SearchIcon from '@Assets/icons/search_icon.svg'
import { Stack, SxProps } from '@mui/material'
import { useState } from 'react'

interface ToolIntegrationModalProps {
  open: boolean
  isIntegrated?: boolean
  onCrossIconClick?: () => void
  sx?: SxProps
}

const ToolIntegrationModal = ({
  open,
  isIntegrated,
  onCrossIconClick,
  sx,
}: ToolIntegrationModalProps) => {
  const [data, setData] = useState(SOCIAL_TOOLS)
  const [searchQuery, setSearchQuery] = useState('')
  /* istanbul ignore next */
  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchQuery(e.target.value)
    const filteredData = SOCIAL_TOOLS.filter((tool) =>
      tool.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setData(filteredData)
  }
  return (
    <GenericModal
      open={open}
      isBackIcon={false}
      title={TOOL_INTEGRATION_DATA.TITLE.toUpperCase()}
      onCloseClick={onCrossIconClick}
    >
      <Stack p={4} gap={4} sx={sx}>
        <TextField
          InputProps={{
            startAdornment: (
              <img alt="search" src={SearchIcon} width={theme.spacing(4.5)} />
            ),
          }}
          placeholder="Search"
          type="text"
          sx={{ width: '22vw' }}
          size="small"
          value={searchQuery}
          onChange={handleSearch}
        />

        <Stack direction="row" gap={4} flexWrap="wrap">
          {isIntegrated && (
            <NavMenuItem items={NAV_MENU_ITEMS_MOCKS} sx={{ width: '20vw' }} />
          )}
          {data.map((tool, index) => (
            <SocialCard
              key={tool.id}
              icon={tool.src}
              title={tool.title}
              isIntegrated={isIntegrated && index === 0}
              sx={{ width: '20vw' }}
            />
          ))}
        </Stack>
      </Stack>
    </GenericModal>
  )
}

export default ToolIntegrationModal
