import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ISocial, socials } from '../../../static/socials'
import s from './styles.module.sass'
import logo from '../../../assets/logo.svg'
import clsx from 'clsx'
import { Tooltip } from '@mui/material'

const Header: FC = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const header = document.getElementById('header')
    header?.classList.add(s.showed)
  }, [])

  const renderSocials = () =>
    socials.map((social: ISocial) => (
      <li key={social.id} className={s.socialIconWrapper}>
        <Link to={social.to} target='_blank'>
          <img
            className={`${s.socialIcon} ${social.title}`}
            src={social.icon}
            alt={social.title}
          />
        </Link>
      </li>
    ))

  return (
    <div id='header' className={s.header}>
      <Link to='/'>
        <img className={s.logo} src={logo} alt='VS' />
      </Link>
      <ul className={s.socials}>{renderSocials()}</ul>
      <Tooltip title='In development 🙃'>
        <button
          className={clsx(s.modeButton, { [s.disabled]: true })}
          // onClick={() => setIsDark(!isDark)}
        >
          <div
            className={clsx(s.modeIcon, {
              [s.dark]: isDark,
              [s.light]: !isDark,
            })}
          />
        </button>
      </Tooltip>
    </div>
  )
}

export default Header
