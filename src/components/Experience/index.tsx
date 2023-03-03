import { FC, useEffect } from 'react'
import s from './styles.module.sass'
import MotionPage from '../_common/MotionPage'
import { experience } from '../../static/experience'
import CompanyInfo from '../_common/CompanyInfo'
import { useTranslation } from 'react-i18next'

const Experience: FC = () => {
  const { t } = useTranslation()

  useEffect(() => {
    const infoWrappers = Array.from(
      document.getElementsByClassName('companyInfoWrapper')
    )
    setTimeout(() => {
      infoWrappers?.forEach((wrapper) => wrapper.classList.add(s.showArrows))
    }, 1000)
  }, [])

  const renderExperience = () =>
    experience.map((exp) => (
      <li key={exp.id} className={`${s.companyInfoWrapper} companyInfoWrapper ${exp.id}`}>
        <CompanyInfo
          year={exp.year}
          title={exp.title}
          website={exp.website}
          image={exp.image}
          description={exp.description}
        />
      </li>
    ))

  return (
    <MotionPage className={s.experience}>
      <h2 className={s.title}>{t('experience.title')}</h2>
      <p className={s.sectionDescription}>
        {t('experience.descr1')} <br /> {t('experience.descr2')}
      </p>
      <ul className={s.timeline}>{renderExperience()}</ul>
    </MotionPage>
  )
}

export default Experience
