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

const render = () => {
  //   console.delayLog = function(time, message) {
  //     var style =
  //        "color: rgb(249, 162, 34);" +
  //        "font-size: 60px;" +
  //        "font-weight: bold;" +
  //        "text-shadow: 1px 1px 5px rgb(249, 162, 34);" +
  //        "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
  //        setTimeout(function() {
  //          console.log(message, style);
  //        }, delay);
  //  }
  // console.delayLog(1000, '%cDelayed Log')

  const time = new Date().getHours()
  const wishMessage =
    time > 5 && time < 11
      ? 'Good morning ☀️'
      : time > 11 && time < 16
      ? 'Have a nice day 🙂'
      : time > 16 && time < 22
      ? 'Good evening 🌓'
      : 'Good night 🌙'
  let msg = `%c Wow, who do I see 👀 \n ${wishMessage}`
  let styles = [
    'font-size: 2vw',
    'font-family: monospace',
    'background: white',
    'display: inline-block',
    'color: black',
    'padding: 1vw 1vw',
  ].join(';')
  console.log(msg, styles)

  return root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

render()

reportWebVitals()
