import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from './styles.module.sass'
import githubIcon from '../../assets/github.svg'
import gmailIcon from '../../assets/gmail.svg'
import facebookIcon from '../../assets/facebook.svg'
import linkedinIcon from '../../assets/linkedin.svg'

const socials = [
  {
    id: 1,
    title: 'linkedIn',
    icon: linkedinIcon,
    to: 'https://www.linkedin.com/in/viktoriia-stepnova-23b41a1ba/',
  },
  {
    id: 2,
    title: 'github',
    icon: githubIcon,
    to: 'https://github.com/StVictoria',
  },
  //   { id: 3, title: 'gmail', icon: gmailIcon, to: 'mailto:vvs2019j@gmail.com', isMail: true },
  {
    id: 3,
    title: 'facebook',
    icon: facebookIcon,
    to: 'https://web.facebook.com/profile.php?id=100077507053270',
  },
]

const Socials: FC = () => {
  useEffect(() => {
    const socials = document.getElementById('socials')
    socials?.classList.add(s.socials_showed)
  }, [])

  const renderSocials = () =>
    socials.map((social) => (
      <li key={social.id} className={s.social_iconWrapper}>
        <Link to={social.to}>
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
