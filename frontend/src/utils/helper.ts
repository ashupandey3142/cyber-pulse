import { parse } from 'papaparse'

const csvToJson = async (file: File) => {
  return new Promise((resolve, reject) => {
    parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        resolve(results.data)
      },
      error: (error) => {
        console.error('Error parsing CSV:', error)
        reject(error)
      },
    })
  })
}

export default csvToJson
