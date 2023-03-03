import { FC, useState } from 'react'
import s from './styles.module.sass'
import { Link } from 'react-router-dom'
import MotionPage from '../_common/MotionPage'
import { useTranslation } from 'react-i18next'
import cvEng from '../../assets/files/cvEng.pdf'
import cvRus from '../../assets/files/cvRus.pdf'
import { Button } from '@mui/material'
import ContactModal from '../ContactModal'

const Home: FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false)

  const { t, i18n } = useTranslation()

  return (
    <MotionPage className={s.home}>
      <div className={s.leftSide}>
        <p className={s.greeting}>
          {t('home.greeting')}&nbsp;
          <Link
            to='https://github.com/StVictoria'
            className={s.myName}
            target='_blank'
          >
            {t('home.viktoriia')}
          </Link>
        </p>
        <h1 className={s.ocupation}> {t('home.frontendDev')}</h1>
        <div className={s.contactBlock}>
          <p className={s.contactText}>{t('home.feelFreeTo')}</p>{' '}
          <Button
            className={s.contactButton}
            variant='contained'
            onClick={() => setIsContactModalOpen(true)}
          >
            {t('home.contactMe')}
          </Button>
        </div>
      </div>
      <div className={s.rightSide}>
        <a
          href={i18n.language === 'en' ? cvEng : cvRus}
          download={t('home.myNameCV')}
        >
          <div className={s.avatar}>
            <div className={s.avatarWink} />
            <div className={s.laptop}>
              <div className={s.laptopCircle} />
            </div>
            <p className={s.donwloadCVText}>{t('home.clickToDownloadCV')}</p>
          </div>
        </a>
      </div>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </MotionPage>
  )
}

export default Home
