import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { handleAppLoaded } from './utils/base'

window.addEventListener('load', handleAppLoaded)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
