import { BrowserRouter as Router } from 'react-router-dom'
import s from './App.module.sass'
import AnimatedRoutes from './AnimatedRoutes'
import Menu from './Menu'
import Header from './Header'

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
