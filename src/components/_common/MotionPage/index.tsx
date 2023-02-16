import { FC, ReactElement } from 'react'
import { motion } from 'framer-motion'

interface IMotionPageProps {
  children: ReactElement[] | ReactElement
  className?: string
}

const MotionPage: FC<IMotionPageProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.7 }}
      className={`${className} container`}
    >
      {children}
    </motion.div>
  )
}

export default MotionPage
