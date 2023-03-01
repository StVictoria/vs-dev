import { FC } from 'react'
import s from './styles.module.sass'
import MotionPage from '../_common/MotionPage'
import { experience } from '../../static/experience'
import CompanyInfo from '../_common/CompanyInfo'
import { useTranslation } from 'react-i18next'

const Experience: FC = () => {
  const { t } = useTranslation()

  const renderExperience = () =>
    experience.map((exp) => (
      <li key={exp.id} className={s.companyInfoWrapper}>
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
      <h2 className={s.title}>{t('myWay')}</h2>
      <p className={s.sectionDescription}>
        {t('myWayDescrLine1')} <br /> {t('myWayDescrLine2')}
      </p>
      <ul className={s.timeline}>{renderExperience()}</ul>
    </MotionPage>
  )
}

export default Experience
