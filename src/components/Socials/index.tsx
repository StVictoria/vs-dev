import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ISocial, socials } from '../../static/socials'
import s from './styles.module.sass'

const Socials: FC = () => {
  useEffect(() => {
    const socials = document.getElementById('socials')
    socials?.classList.add(s.socials_showed)
  }, [])

  const renderSocials = () =>
    socials.map((social: ISocial) => (
      <li key={social.id} className={s.social_iconWrapper}>
        <Link to={social.to} target='_blank'>
          <img
            className={`${s.socials_icon} ${social.title}`}
            src={social.icon}
            alt={social.title}
          />
        </Link>
      </li>
    ))

  return (
    <ul id='socials' className={s.socials}>
      {renderSocials()}
    </ul>
  )
}

export default Socials
