import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ISocial, socials } from '../../static/socials'
import s from './styles.module.sass'
import logo from '../../assets/logo.svg'
import clsx from 'clsx'

const Header: FC = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const header = document.getElementById('header')
    header?.classList.add(s.header_showed)
  }, [])

  const renderSocials = () =>
    socials.map((social: ISocial) => (
      <li key={social.id} className={s.header_socialIconWrapper}>
        <Link to={social.to} target='_blank'>
          <img
            className={`${s.header_socialIcon} ${social.title}`}
            src={social.icon}
            alt={social.title}
          />
        </Link>
      </li>
    ))

  return (
    <div id='header' className={s.header}>
      <Link to='/'>
        <img className={s.header_logo} src={logo} alt='VS' />
      </Link>
      <ul className={s.header_socials}>{renderSocials()}</ul>
      <button
        className={clsx(s.header_modeButton, { [s.disabled]: true })}
        // onClick={() => setIsDark(!isDark)}
        title='In development 🙃'
      >
        <div
          className={clsx(s.header_modeIcon, {
            [s.dark]: isDark,
            [s.light]: !isDark,
          })}
        />
      </button>
    </div>
  )
}

export default Header
