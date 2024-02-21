import { createRoot } from 'react-dom/client'
import { App } from './App'
import FileContextProvider from './context/FileContext'
import './index.css'

const root = document.getElementById('root')

if (root !== null) {
  createRoot(root).render(
    <FileContextProvider>
      <App />
    </FileContextProvider>
  )
}
