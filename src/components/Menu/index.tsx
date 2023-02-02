import { IconButton } from '@mui/material'
import { FC, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IMenu, menu } from '../../static/menu'
import s from './styles.module.sass'

const Menu: FC = () => {
  const location = useLocation()

  useEffect(() => {
    const menu = document.getElementById('menu')
    menu?.classList.add(s.menu_showed)
  }, [])

  const renderMenu = () =>
    menu.map((link: IMenu) => (
      <Link to={link.to} key={link.id}>
        <IconButton aria-label='home' size='large'>
          <link.icon
            fontSize='inherit'
            color={location.pathname === link.to ? 'primary' : 'default'}
          />
        </IconButton>
      </Link>
    ))

  return (
    // <div className={s.sidebar_wrapper}>
    <aside id='menu' className={s.menu}>
      {renderMenu()}
    </aside>
    // </div>
  )
}

export default Menu
