import { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Experience from '../Experience'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes: FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
