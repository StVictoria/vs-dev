import githubIcon from '../assets/github.svg'
import facebookIcon from '../assets/facebook.svg'
import linkedinIcon from '../assets/linkedin.svg'

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
        title: 'facebook',
        icon: facebookIcon,
        to: 'https://web.facebook.com/profile.php?id=100077507053270',
    },
]