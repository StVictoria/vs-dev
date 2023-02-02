import { BrowserRouter as Router } from 'react-router-dom'
import s from './App.module.sass'
import AnimatedRoutes from './AnimatedRoutes'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className={s.app}>
      <Router>
        <Sidebar />
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App
