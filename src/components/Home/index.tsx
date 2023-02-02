import { FC } from 'react'
import { motion } from 'framer-motion'

const Home: FC = () => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16vw',
      }}
    >
      Home
    </motion.div>
  )
}

export default Home
