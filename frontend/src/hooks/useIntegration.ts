import { SlackActionId } from '@/utils/interfaces'
import { useEffect, useState } from 'react'

const useIntegration = () => {
  const [showSlackInput, setShowSlackInput] = useState<boolean>(false)
  const [showBaseUrl, setShowBaseUrl] = useState<boolean>(false)
  const [showClientId, setShowClientId] = useState<boolean>(false)
  const [showClientSecret, setShowClientSecret] = useState<boolean>(false)
  const [slackActionId, setSlackActionId] = useState<SlackActionId>({
    baseUrl: '',
    clientId: '',
    clientSecret: '',
  })
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    if (
      slackActionId.baseUrl &&
      slackActionId.clientId &&
      slackActionId.clientSecret
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [
    slackActionId.baseUrl,
    slackActionId.clientId,
    slackActionId.clientSecret,
  ])

  return {
    showSlackInput,
    setShowSlackInput,
    showBaseUrl,
    setShowBaseUrl,
    showClientId,
    setShowClientId,
    showClientSecret,
    setShowClientSecret,
    slackActionId,
    setSlackActionId,
    disabled,
    setDisabled,
  }
}

export default useIntegration
