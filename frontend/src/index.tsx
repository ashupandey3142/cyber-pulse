import { createRoot } from 'react-dom/client'
import { App } from './App'
import FileContextProvider from './context/FileContext'

const root = document.getElementById('root')

if (root !== null) {
  createRoot(root).render(
    <FileContextProvider>
      <App />
    </FileContextProvider>
  )
}
