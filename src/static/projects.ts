import lasles from '../assets/images/sites/lasles.PNG'
import enver from '../assets/images/sites/enver.PNG'
import qubly from '../assets/images/sites/qubly.PNG'
import selfschool from '../assets/images/sites/selfschool.png'
import cryptoLotto from '../assets/images/sites/crypto-lotto.PNG'
import preact from '../assets/images/preact.png'
import sass from '../assets/images/sass.png'
import next from '../assets/images/nextjs.png'
import ts from '../assets/images/ts.png'
import effector from '../assets/images/effector.png'
import ethers from '../assets/images/ethers.png'

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
    { id: 1, title: 'Lasles', img: lasles, githubLink: '/', techs: [{ id: 1, title: 'Preact', icon: preact, to: '/' }, { id: 2, title: 'SCSS', icon: sass, to: '/' }] },
    { id: 2, title: 'Enver', img: enver, githubLink: '/', techs: [{ id: 1, title: 'Next.js', icon: next, to: '/' }, { id: 2, title: 'TypeScript', icon: ts, to: '/' }, { id: 3, title: 'SASS', icon: sass, to: '/' }] },
    { id: 3, title: 'Qubly', img: qubly, githubLink: '/', techs: [{ id: 1, title: 'Next.js', icon: next, to: '/' }, { id: 2, title: 'TypeScript', icon: ts, to: '/' }, { id: 3, title: 'Effector', icon: effector, to: '/' }, { id: 4, title: 'SASS', icon: sass, to: '/' }] },
    { id: 4, title: 'Selfschool', img: selfschool, githubLink: '/', techs: [{ id: 1, title: 'Next.js', icon: next, to: '/' }, { id: 2, title: 'TypeScript', icon: ts, to: '/' }, { id: 3, title: 'SASS', icon: sass, to: '/' }] },
    { id: 5, title: 'CRYPTO LOTTO', img: cryptoLotto, githubLink: '/', techs: [{ id: 1, title: 'Next.js', icon: next, to: '/' }, { id: 2, title: 'TypeScript', icon: ts, to: '/' }, { id: 3, title: 'SASS', icon: sass, to: '/' }, { id: 3, title: 'Ethers', icon: ethers, to: '/' }] },
    // { id: 1, title: '', img: '', githubLink: '/', techs: [{ id: 1, title: '', icon: '', to: '/' }] },
]