import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.sass'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { generateConsoleMessage, handleAppLoaded } from './utils/base'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'

window.addEventListener('load', handleAppLoaded)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const renderer = () => {
  generateConsoleMessage(true)

  return root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

renderer()

reportWebVitals()
