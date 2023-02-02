import { FC } from 'react'
import { motion } from 'framer-motion'
import s from './styles.module.sass'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.7 }}
      className={s.home}
    >
      <div className={s.home_left}>
        <p>
          Hi, I'm{' '}
          <Link to='https://github.com/StVictoria' className={s.home_myName}>
            Viktoriia
          </Link>
        </p>
        <p>Frontend developer</p>
        <p className={s.home_year}>Since 2019</p>
      </div>
      <div className={s.home_right}>
        <div className={s.home_avatarWrapper}>
          <div className={s.home_avatar} />
          <div className={s.home_laptop}>
            <div className={s.home_laptopCircle} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
