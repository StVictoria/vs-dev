import githubIcon from '../assets/icons/github.svg'
import telegramIcon from '../assets/icons/telegram.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import facebookIcon from '../assets/icons/facebook.svg'

export interface ISocial {
    id: number
    title: string
    icon: string
    to: string
}

export const socials: ISocial[] = [
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
    {
        id: 3,
        title: 'telegram',
        icon: telegramIcon,
        to: 'https://telegram.me/user_vic',
    },
]

export const socials_modal: ISocial[] = [
    {
        id: 1,
        title: 'linkedIn',
        icon: linkedinIcon,
        to: 'https://www.linkedin.com/in/viktoriia-stepnova-23b41a1ba/',
    },
    {
        id: 2,
        title: 'facebook',
        icon: facebookIcon,
        to: 'https://www.facebook.com/profile.php?id=100077507053270',
    },
    {
        id: 3,
        title: 'telegram',
        icon: telegramIcon,
        to: 'https://telegram.me/user_vic',
    },
]