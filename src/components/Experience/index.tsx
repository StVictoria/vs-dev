import { FC } from 'react'
import { motion } from 'framer-motion'
import s from './styles.module.sass'

const Experience: FC = () => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.7 }}
      className={s.experience}
    >
      <div className={s.experience_timeline}>My way</div>
    </motion.div>
  )
}

export default Experience
