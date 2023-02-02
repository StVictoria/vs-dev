import { BrowserRouter as Router, Link } from 'react-router-dom'
import s from './App.module.sass'
import AnimatedRoutes from './AnimatedRoutes'

function App() {
  return (
    <div className={s.app}>
      <Router>
        <aside className={s.sidebar}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/experience'>Experience</Link>
        </aside>
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App
