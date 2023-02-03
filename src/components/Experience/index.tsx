import { FC } from 'react'
import { motion } from 'framer-motion'

const Experience: FC = () => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.7 }}
    >
      Experience
    </motion.div>
  )
}

export default Experience
