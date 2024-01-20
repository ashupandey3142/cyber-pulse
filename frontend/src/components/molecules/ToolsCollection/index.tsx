import { SECURITY_TOOLS } from '@/components/mocks/mockData'
import theme from '@/theme'
import { GOOGLE } from '@/utils/constant'
import GoogleIcon from '@Assets/icons/Switch.svg'
import { Stack, SxProps, styled } from '@mui/material'
import ActiveToolCard from '../ActiveToolCard'
import InfoHeader from '../InfoHeader'
import ToolCard from '../ToolCard'

interface ToolsCollectionProps {
  onToolClick?: () => void
  isConfigured?: boolean
  onConfigureClick?: () => void
  sx?: SxProps
}

const OuterStack = styled(Stack)({
  gap: theme.spacing(6),
})

const InnerStack = styled(Stack)({
  flexDirection: 'row',
  gap: theme.spacing(4),
  flexWrap: 'wrap',
})

const ToolsCollection = ({
  onToolClick,
  isConfigured,
  onConfigureClick,
  sx,
}: ToolsCollectionProps) => {
  return (
    <OuterStack sx={sx}>
      {!isConfigured && <InfoHeader />}
      <InnerStack>
        {SECURITY_TOOLS.map((tool, index) =>
          isConfigured && index === 0 ? (
            <ActiveToolCard
              key={tool.id}
              src={GoogleIcon}
              alt={'google-icon'}
              intgrationLabel={GOOGLE}
              handleConfigureClick={onConfigureClick}
            />
          ) : (
            <ToolCard
              key={tool.id}
              icon={tool.src}
              title={tool.title}
              {...(index === 0 && { onClick: onToolClick })}
              sx={{ width: theme.spacing(70) }}
            />
          )
        )}
      </InnerStack>
    </OuterStack>
  )
}

export default ToolsCollection
