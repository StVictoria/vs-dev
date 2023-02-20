import { FC } from 'react'
import s from './styles.module.sass'
import { Link } from 'react-router-dom'
import MotionPage from '../_common/MotionPage'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <MotionPage className={s.home}>
      <div className={s.leftSide}>
        <p className={s.greeting}>
          {t('greeting')}{' '}
          <Link
            to='https://github.com/StVictoria'
            className={s.myName}
            target='_blank'
          >
            Viktoriia
          </Link>
        </p>
        <h1 className={s.ocupation}>Frontend developer</h1>
        <p className={s.year}>Since 2019</p>
      </div>
      <div className={s.rightSide}>
        <div className={s.avatar}>
          <div className={s.avatarWink} />
          <div className={s.laptop}>
            <div className={s.laptopCircle} />
          </div>
        </div>
      </div>
    </MotionPage>
  )
}

export default Home
