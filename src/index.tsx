import React, { useTransition } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.sass'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { generateConsoleMessage, handleAppLoaded } from './utils/base'
import { createTheme, ThemeProvider } from '@mui/material'

window.addEventListener('load', handleAppLoaded)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6f01',
    },
  },
})

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
