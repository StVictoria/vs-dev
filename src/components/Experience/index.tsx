import { FC } from 'react'
import s from './styles.module.sass'
import MotionPage from '../_common/MotionPage'
import { experience } from '../../static/experience'
import CompanyInfo from '../_common/CompanyInfo'

const Experience: FC = () => {
  const renderExperience = () =>
    experience.map((exp) => (
      <li key={exp.id} className={s.companyInfoWrapper}>
        <CompanyInfo
          year={exp.year}
          title={exp.title}
          image={exp.image}
          description={exp.description}
        />
      </li>
    ))

  return (
    <MotionPage className={s.experience}>
      <h2 className={s.title}>My way</h2>
      <p className={s.sectionDescription}>
        Here you can see a brief overview <br /> of my experience in every
        company
      </p>
      <ul className={s.timeline}>{renderExperience()}</ul>
    </MotionPage>
  )
}

export default Experience
