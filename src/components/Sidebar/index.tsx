import { IconButton } from '@mui/material'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from './styles.module.sass'
import HomeIcon from '@mui/icons-material/Home'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import WorkIcon from '@mui/icons-material/Work'

const Sidebar: FC = () => {
  useEffect(() => {
    const sidebar = document.getElementById('sidebar')
    sidebar?.classList.add(s.sidebar_showed)
  }, [])

  return (
    // <div className={s.sidebar_wrapper}>
    <aside id='sidebar' className={s.sidebar}>
      <Link to='/'>
        <IconButton aria-label='home' size='large'>
          <HomeIcon fontSize='inherit' />
        </IconButton>
      </Link>
      <Link to='/about'>
        <IconButton aria-label='home' size='large'>
          <AutoAwesomeMosaicIcon fontSize='inherit' />
        </IconButton>
      </Link>
      <Link to='/experience'>
        <IconButton aria-label='home' size='large'>
          <WorkIcon fontSize='inherit' />
        </IconButton>
      </Link>
    </aside>
    // </div>
  )
}

export default Sidebar
