import { BrowserRouter as Router } from 'react-router-dom'
import s from './App.module.sass'
import AnimatedRoutes from './AnimatedRoutes'
import Socials from './Socials'
import Menu from './Menu'

function App() {
  return (
    <div className={s.app}>
      <Router>
        <Socials />
        <AnimatedRoutes />
        <Menu />
      </Router>
    </div>
  )
}

export default App
