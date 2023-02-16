import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ITech } from '../../static/projects'
import github from '../../assets/github.svg'
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
      <Link to={tech.to} className={s.project_tech} key={tech.id}>
        <img src={tech.icon} alt={tech.title} />
      </Link>
    ))

  return (
    <>
      <img className={s.project_img} src={img} alt={title} />
      <div className={s.project_links}>
        <div className={s.project_techs}>
          {renderProjectTechs(techs)}
        </div>
        <Link className={s.project_gitLink} to={githubLink}>
          <img src={github} alt='Github' />
        </Link>
      </div>
    </>
  )
}

export default Project
