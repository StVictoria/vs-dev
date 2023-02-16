import { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../Home'
import Portfolio from '../../Portfolio'
import Experience from '../../Experience'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes: FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
