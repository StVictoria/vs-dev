import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.sass'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { handleAppLoaded } from './utils/base'
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

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
