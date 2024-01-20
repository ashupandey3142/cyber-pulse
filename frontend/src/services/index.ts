import csvToJson from '@/utils/helper'
import { FormSignDataProps } from '@/utils/interfaces'
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:4000',
})

export const uploadFile = async (
  file: File,
  onUploadProgress?: (progress: number) => void
) => {
  // eslint-disable-next-line import/no-named-as-default-member
  const cancelSource = axios.CancelToken.source()
  const data = await csvToJson(file)
  try {
    const response = await apiClient.post('/files', data, {
      onUploadProgress: (progressEvent) => {
        if (onUploadProgress && progressEvent.total !== undefined) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100
          onUploadProgress(progress)
        }
      },
      cancelToken: cancelSource.token,
    })
    return response.data
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error('Request canceled', error.message)
    } else {
      console.error(error)
    }
  }
}

export const sendMessages = async (messages: string) => {
  try {
    const webhookURL = process.env.WEBHOOK_URL as string
    const data = {
      text: messages,
    }
    const response = await axios.post(webhookURL, JSON.stringify(data))
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createUser = async (data: FormSignDataProps) => {
  try {
    const res = await apiClient.post('/user', data)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const fetchUserDataByEmail = async (email: string) => {
  try {
    const response = await apiClient.get(`/user?email=${email}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getFileDetails = async () => {
  try {
    const response = await apiClient.get('/files')
    return response.data
  } catch (error) {
    console.error(error)
  }
}
