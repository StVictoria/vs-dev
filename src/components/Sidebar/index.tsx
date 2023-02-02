import { FC } from 'react'
import { Link } from 'react-router-dom'
import s from './styles.module.sass'

const Sidebar: FC = () => {
  return (
    <aside className={s.sidebar}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/experience'>Experience</Link>
    </aside>
  )
}

export default Sidebar
