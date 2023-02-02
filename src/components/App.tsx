import { BrowserRouter as Router } from 'react-router-dom'
import s from './App.module.sass'
import AnimatedRoutes from './AnimatedRoutes'
import Sidebar from './Sidebar'
import Socials from './Socials'

function App() {
  return (
    <div className={s.app}>
      <Router>
        <Socials />
        <AnimatedRoutes />
        <Sidebar />
      </Router>
    </div>
  )
}

export default App
