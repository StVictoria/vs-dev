import { BrowserRouter as Router } from 'react-router-dom'
import s from './App.module.sass'
import AnimatedRoutes from './_base/AnimatedRoutes'
import Menu from './_base/Menu'
import Header from './_base/Header'
import { Suspense } from 'react'
import '../i18n.js'

function App() {
  return (
    <div className={s.app}>
      <Suspense fallback={null}>
        <Router>
          <Header />
          <AnimatedRoutes />
          <Menu />
        </Router>
      </Suspense>
    </div>
  )
}

export default App
