import { FC, useEffect } from 'react'
import s from './styles.module.sass'
import { ITechnology, technologies } from '../../static/technologies'
import { Link } from 'react-router-dom'
import { IProject, projects } from '../../static/projects'
import Project from '../_common/Project'
import MotionPage from '../_common/MotionPage'
import { useTranslation } from 'react-i18next'

const Portfolio: FC = () => {
  const { t } = useTranslation()

  useEffect(() => {
    const techsTrack = document.getElementById('techs_track')
    if (techsTrack) {
      setTimeout(() => {
        techsTrack.classList.add(s.animated)
      }, 900)
    }
  }, [])

  const renderTechnologies = () =>
    technologies.map((tech: ITechnology) => (
      <li
        key={tech.id}
        className={s.tech}
        style={{ backgroundColor: tech.color }}
      >
        <Link to={tech.to} className={s.techLink} target='_blank'>
          <img src={tech.img} alt={tech.name} />
        </Link>
      </li>
    ))

  const renderProjects = () =>
    projects.map((project: IProject) => (
      <li className={s.project} key={project.id}>
        <Project
          img={project.img}
          title={project.title}
          techs={project.techs}
          githubLink={project.githubLink}
        />
      </li>
    ))

  return (
    <MotionPage className={s.portfolio}>
      <section className={s.block}>
        <h2>{t('aboutMe')}</h2>
        <p className={s.aboutMeDescr}>
          {t('introduction1')} <br />
          {t('introduction2')} <br />
          {t('introduction3')} 🔥
        </p>
      </section>
      <section className={s.block}>
        <h2>{t('techsIUse')}</h2>
        <div className={s.techsSlider}>
          <ul id='techs_track' className={s.techsTrack}>
            {renderTechnologies()}
          </ul>
        </div>
      </section>
      <section className={s.block}>
        <h2>{t('recentProjects')}</h2>
        <ul className={s.projects}>{renderProjects()}</ul>
      </section>
    </MotionPage>
  )
}

export default Portfolio
