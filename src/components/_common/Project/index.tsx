import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ITech } from '../../../static/projects'
import github from '../../../assets/github.svg'
import s from './styles.module.sass'

interface IProjectProps {
  img: string
  title: string
  techs: ITech[]
  githubLink: string
}

const Project: FC<IProjectProps> = ({ img, title, techs, githubLink }) => {
  const renderProjectTechs = (techs: ITech[]) =>
    techs.map((tech: ITech) => (
      <Link to={tech.to} className={s.tech} key={tech.id}>
        <img src={tech.icon} alt={tech.title} />
      </Link>
    ))

  return (
    <>
      <img className={s.image} src={img} alt={title} />
      <div className={s.links}>
        <div className={s.techs}>{renderProjectTechs(techs)}</div>
        <Link className={s.gitLink} to={githubLink}>
          <img src={github} alt='Github' />
        </Link>
      </div>
    </>
  )
}

export default Project
