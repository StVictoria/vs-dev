import js from '../assets/images/js.png'
import antd from '../assets/images/antd.png'
import sc from '../assets/images/sc.png'
import mui from '../assets/images/mui.png'
import cssModules from '../assets/images/css-modules.png'
import react from '../assets/images/react.png'
import preact from '../assets/images/preact.png'
import html from '../assets/images/html.png'
import ts from '../assets/images/ts.png'
import next from '../assets/images/nextjs.png'
import jquery from '../assets/images/jquery.png'
import css from '../assets/images/css.png'
import bem from '../assets/images/bem.png'
import effector from '../assets/images/effector.png'
import redux from '../assets/images/redux.png'
import ethersjs from '../assets/images/ethers.png'
import nodejs from '../assets/images/nodejs.png'
import npm from '../assets/images/npm.png'
import git from '../assets/images/git.png'
import figma from '../assets/images/figma.png'

export interface ITechnology {
    id: number
    name: string
    img: string
    color: string
    to: string
}

export const technologies: ITechnology[] = [
    { id: 1, name: 'JS', img: js, color: 'rgba(240,219,79,0.24)', to: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/' },
    { id: 2, name: 'AntD', img: antd, color: 'rgba(17,131,255,0.24)', to: 'https://ant.design/' },
    { id: 3, name: 'HTML', img: html, color: 'rgba(252,73,11,0.24)', to: 'https://html.spec.whatwg.org/multipage/' },
    { id: 4, name: 'Styled Components', img: sc, color: 'rgba(250,195,53,0.24)', to: 'https://styled-components.com/' },
    { id: 5, name: 'Material UI', img: mui, color: 'rgba(0,129,203,0.24)', to: 'https://mui.com/' },
    { id: 6, name: 'CSS Modules', img: cssModules, color: 'rgba(0,0,0,0.15)', to: 'https://github.com/css-modules/css-modules' },
    { id: 7, name: 'React', img: react, color: 'rgba(97,218,251,0.24)', to: 'https://reactjs.org/' },
    { id: 8, name: 'Preact', img: preact, color: 'rgba(103,58,184,0.24)', to: 'https://preactjs.com/' },
    { id: 9, name: 'GIT', img: git, color: 'rgba(240,80,51,0.24)', to: 'https://git-scm.com/' },
    { id: 10, name: 'TS', img: ts, color: 'rgba(49,120,198,0.24)', to: 'https://www.typescriptlang.org/' },
    { id: 11, name: 'NEXT.js', img: next, color: 'rgba(0,0,0,0.15)', to: 'https://nextjs.org/' },
    { id: 12, name: 'jQuery', img: jquery, color: 'rgba(33,96,155,0.24)', to: 'https://jquery.com/' },
    { id: 13, name: 'Figma', img: figma, color: 'rgba(255,114,98,0.24)', to: 'https://www.figma.com/' },
    { id: 14, name: 'CSS', img: css, color: 'rgba(28,136,199,0.24)', to: '	w3.org/Style/CSS/' },
    { id: 15, name: 'BEM', img: bem, color: 'rgba(0,0,0,0.15)', to: 'https://bem.info/methodology/' },
    { id: 16, name: 'NPM', img: npm, color: 'rgba(203,56,55,0.24)', to: 'https://www.npmjs.com/' },
    { id: 17, name: 'Redux', img: redux, color: 'rgba(118,74,188,0.24)', to: 'https://redux.js.org/' },
    { id: 18, name: 'Node.js', img: nodejs, color: 'rgba(65,144,58,0.24)', to: 'https://nodejs.org/en/' },
    { id: 19, name: 'Effector', img: effector, color: 'rgba(254,100,0,0.24)', to: 'https://effector.dev/' },
    { id: 20, name: 'Ethers.js', img: ethersjs, color: 'rgba(36,51,155,0.24)', to: 'https://docs.ethers.org/v5/' },
]