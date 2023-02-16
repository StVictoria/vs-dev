import { FC, useEffect } from 'react'
import { motion } from 'framer-motion'
import { factsAboutMe, IFactAboutMe } from '../../static/factsAboutMe'
import s from './styles.module.sass'
import { ITechnology, technologies } from '../../static/technologies'
import { Link } from 'react-router-dom'
import { IProject, projects } from '../../static/projects'
import Project from '../_common/Project'
import MotionPage from '../_common/MotionPage'

const Portfolio: FC = () => {
  useEffect(() => {
    const techsTrack = document.getElementById('techs_track')
    if (techsTrack) {
      setTimeout(() => {
        techsTrack.classList.add(s.animated)
      }, 900)
    }
  }, [])

  const renderFactsAboutMe = () =>
    factsAboutMe.map((fact: IFactAboutMe) => (
      <li className={s.fact} key={fact.id}>
        <fact.icon className={s.factIcon} />
        <p>{fact.title}</p>
        <p className={s.factDecr}>{fact.descr}</p>
      </li>
    ))

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
        <h2>About me</h2>
        <ul className={s.facts}>{renderFactsAboutMe()}</ul>
      </section>
      <section className={s.block}>
        <h2>Technologies I use</h2>
        <div className={s.techsSlider}>
          <ul id='techs_track' className={s.techsTrack}>
            {renderTechnologies()}
            {renderTechnologies()}
          </ul>
        </div>
      </section>
      <section className={s.block}>
        <h2>Recent projects</h2>
        <ul className={s.projects}>{renderProjects()}</ul>
      </section>
    </MotionPage>
  )
}

export default Portfolio
