import { FC } from 'react'
import { motion } from 'framer-motion'

const Experience: FC = () => {
  return (
    <motion.div
      initial={{ x: '200%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.4 }}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16vw',
      }}
    >
      Experience
    </motion.div>
  )
}

export default Experience
