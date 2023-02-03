import { FC } from 'react'
import { motion } from 'framer-motion'
import { factsAboutMe, IFactAboutMe } from '../../static/factsAboutMe'
import s from './styles.module.sass'
import { ITechnology, technologies } from '../../static/technologies'
import { Link } from 'react-router-dom'

const Portfolio: FC = () => {
  const renderFactsAboutMe = () =>
    factsAboutMe.map((fact: IFactAboutMe) => (
      <li className={s.portfolio_fact} key={fact.id}>
        <fact.icon className={s.portfolio_factIcon} />
        <p>{fact.title}</p>
        <p className={s.portfolio_factDecr}>{fact.descr}</p>
      </li>
    ))

  const renderTechnologies = () =>
    technologies.map((tech: ITechnology) => (
      <li
        key={tech.id}
        className={s.portfolio_tech}
        style={{ backgroundColor: tech.color }}
      >
        <Link to={tech.to} className={s.portfolio_techLink} target='_blank'>
          <img src={tech.img} alt={tech.name} />
        </Link>
      </li>
    ))

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.7 }}
      className={s.portfolio}
    >
      <section className={s.portfolio_block}>
        <h2>About me</h2>
        <ul className={s.portfolio_facts}>{renderFactsAboutMe()}</ul>
      </section>
      <section className={s.portfolio_block}>
        <h2>Technologies I use</h2>
        <div className={s.portfolio_techSliderWrapper}>
          <ul className={s.portfolio_techs}>
            {renderTechnologies()}
            {renderTechnologies()}
          </ul>
        </div>
      </section>
      {/* <section className={s.portfolio_block}>
        <h2>Portfolio</h2>
      </section> */}
    </motion.div>
  )
}

export default Portfolio
