import { BrowserRouter as Router } from 'react-router-dom'
import s from './App.module.sass'
import AnimatedRoutes from './_base/AnimatedRoutes'
import Menu from './_base/Menu'
import Header from './_base/Header'

function App() {
  return (
    <div className={s.app}>
      <Router>
        <Header />
        <AnimatedRoutes />
        <Menu />
      </Router>
    </div>
  )
}

export default App
