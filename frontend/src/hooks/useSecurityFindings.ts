import { getFileDetails } from '@/services'
import { COMPLETED, FAILED_PHISHING_TEST, MONTH } from '@/utils/constant'
import { transformIntoSecurityFindingData } from '@/utils/function'
import { IRowData } from '@/utils/interfaces'
import { useEffect, useState } from 'react'

const useSecurityFindings = () => {
  const [securityFindingData, setSecurityFindingData] = useState<IRowData[]>([])
  const [mfaValue, setMfaValue] = useState<number>(0)
  const [failedPhishing, setFailedPhishing] = useState<number>(0)
  const [overdueTrainingData, setOverdueTrainingData] = useState<number>(0)
  const [graphLabels, setGraphLabels] = useState<string[]>([])

  const generateMonthLabels = () => {
    const today = new Date()
    const currentMonth = today.getMonth()

    const labels = []

    for (let i = 6; i >= 1; i--) {
      const monthIndex = (currentMonth - i + 12) % 12

      labels.push(MONTH[monthIndex - 1])
    }
    setGraphLabels(labels)
  }
  useEffect(() => {
    const fetchData = async () => {
      const fileData = await getFileDetails()
      generateMonthLabels()
      const newData = transformIntoSecurityFindingData(fileData[0])
      newData.forEach((d) => {
        if (d.mfaEnabled) {
          setMfaValue((prevVal) => prevVal + 1)
        }

        if (d.groups !== undefined) {
          if (d.groups.includes(FAILED_PHISHING_TEST)) {
            setFailedPhishing((prevVal) => prevVal + 1)
          }

          const groupsData = d.groups.split(',')
          groupsData.forEach((gd) => {
            if (gd.includes(COMPLETED)) {
              setOverdueTrainingData((val) => val + 1)
            }
          })
        }
      })
      setSecurityFindingData(newData)
    }

    fetchData()
  })
  return {
    securityFindingData,
    mfaValue,
    graphLabels,
    failedPhishing,
    overdueTrainingData,
  }
}

export default useSecurityFindings
