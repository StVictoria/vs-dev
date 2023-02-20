import lasles from '../assets/images/sites/lasles.PNG'
import enver from '../assets/images/sites/enver.PNG'
import qubly from '../assets/images/sites/qubly.PNG'
import selfschool from '../assets/images/sites/selfschool.png'
import cryptoLotto from '../assets/images/sites/crypto-lotto.PNG'
import portfolio from '../assets/images/sites/portfolio.PNG'
import preact from '../assets/images/preact.png'
import sass from '../assets/images/sass.png'
import next from '../assets/images/nextjs.png'
import ts from '../assets/images/ts.png'
import effector from '../assets/images/effector.png'
import ethers from '../assets/images/ethers.png'
import react from '../assets/images/react.png'
import mui from '../assets/images/mui.png'

export interface ITech {
    id: number
    title: string
    icon: string
    to: string
}

export interface IProject {
    id: number
    title: string
    img: string
    githubLink: string
    techs: ITech[]
}

export const projects: IProject[] = [
    { id: 1, title: 'Lasles', img: lasles, githubLink: 'https://github.com/StVictoria/laslesVPN', techs: [{ id: 1, title: 'Preact', icon: preact, to: '/' }, { id: 2, title: 'SCSS', icon: sass, to: '/' }] },
    { id: 2, title: 'Enver', img: enver, githubLink: 'https://github.com/StVictoria/enver', techs: [{ id: 1, title: 'Next.js', icon: next, to: '/' }, { id: 2, title: 'TypeScript', icon: ts, to: '/' }, { id: 3, title: 'SASS', icon: sass, to: '/' }] },
    { id: 3, title: 'Qubly', img: qubly, githubLink: 'https://github.com/StVictoria/qubly', techs: [{ id: 1, title: 'Next.js', icon: next, to: '/' }, { id: 2, title: 'TypeScript', icon: ts, to: '/' }, { id: 3, title: 'SASS', icon: sass, to: '/' }] },
    { id: 4, title: 'Selfschool', img: selfschool, githubLink: 'https://github.com/parta-dev/next_frontend', techs: [{ id: 1, title: 'Next.js', icon: next, to: '/' }, { id: 2, title: 'TypeScript', icon: ts, to: '/' }, { id: 3, title: 'Effector', icon: effector, to: '/' }, { id: 4, title: 'SASS', icon: sass, to: '/' }] },
    { id: 5, title: 'CRYPTO LOTTO', img: cryptoLotto, githubLink: 'http://primolennyy.fvds.ru/crypto-loto/loto-frontend', techs: [{ id: 1, title: 'Next.js', icon: next, to: '/' }, { id: 2, title: 'TypeScript', icon: ts, to: '/' }, { id: 3, title: 'SASS', icon: sass, to: '/' }, { id: 4, title: 'Ethers', icon: ethers, to: '/' }] },
    { id: 6, title: 'Viktoriia | Frontend developer', img: portfolio, githubLink: 'https://github.com/StVictoria/portfolio_new', techs: [{ id: 1, title: 'React', icon: react, to: '/' }, { id: 2, title: 'SASS', icon: sass, to: '/' }, { id: 3, title: 'MUI', icon: mui, to: '/' }] },
]