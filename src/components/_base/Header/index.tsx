import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ISocial, socials } from '../../../static/socials'
import s from './styles.module.sass'
import logo from '../../../assets/icons/logo.svg'
import i18next from 'i18next'
import enImg from '../../../assets/images/lang/en.png'
import ruImg from '../../../assets/images/lang/ru.png'

const Header: FC = () => {
  // const [isDark, setIsDark] = useState<boolean>(false)
  const [isEnLang, setIsEnLang] = useState<boolean>(true)

  useEffect(() => {
    const header = document.getElementById('header')
    header?.classList.add(s.showed)
  }, [])

  const handleLangChange = (isEn: boolean) => {
    setIsEnLang(isEn)
    i18next.changeLanguage(isEn ? 'en' : 'ru')
  }

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
      {/* <Tooltip title='In development 🙃'>
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
      </Tooltip> */}
      <button onClick={() => handleLangChange(!isEnLang)}>
        <img
          src={isEnLang ? enImg : ruImg}
          alt={isEnLang ? 'EN' : 'RU'}
          className={s.langImg}
        />
      </button>
    </div>
  )
}

export default Header
