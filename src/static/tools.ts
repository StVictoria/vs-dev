import { TOOL_LINKS } from './../constants/TOOL_LINKS';
import js from '../assets/images/techs/js.png'
import antd from '../assets/images/techs/antd.png'
import sc from '../assets/images/techs/sc.png'
import mui from '../assets/images/techs/mui.png'
import cssModules from '../assets/images/techs/css-modules.png'
import react from '../assets/images/techs/react.png'
import preact from '../assets/images/techs/preact.png'
import html from '../assets/images/techs/html.png'
import ts from '../assets/images/techs/ts.png'
import next from '../assets/images/techs/nextjs.png'
import jquery from '../assets/images/techs/jquery.png'
import css from '../assets/images/techs/css.png'
import bem from '../assets/images/techs/bem.png'
import effector from '../assets/images/techs/effector.png'
import redux from '../assets/images/techs/redux.png'
import ethersjs from '../assets/images/techs/ethers.png'
import nodejs from '../assets/images/techs/nodejs.png'
import npm from '../assets/images/techs/npm.png'
import git from '../assets/images/techs/git.png'
import figma from '../assets/images/techs/figma.png'
import sass from '../assets/images/techs/sass.png'

export interface ITool {
    id: number
    name: string
    img: string
    color: string
    to: string
}

export const tools: ITool[] = [
    { id: 1, name: 'JS', img: js, color: 'rgba(240,219,79,0.24)', to: TOOL_LINKS.JS },
    { id: 2, name: 'AntD', img: antd, color: 'rgba(17,131,255,0.24)', to: TOOL_LINKS.ANTD },
    { id: 3, name: 'HTML', img: html, color: 'rgba(252,73,11,0.24)', to: TOOL_LINKS.HTML },
    { id: 4, name: 'Styled Components', img: sc, color: 'rgba(250,195,53,0.24)', to: TOOL_LINKS.SC },
    { id: 5, name: 'Material UI', img: mui, color: 'rgba(0,129,203,0.24)', to: TOOL_LINKS.MUI },
    { id: 6, name: 'CSS Modules', img: cssModules, color: 'rgba(0,0,0,0.15)', to: TOOL_LINKS.CSS_MODULES },
    { id: 7, name: 'React', img: react, color: 'rgba(97,218,251,0.24)', to: TOOL_LINKS.REACT },
    { id: 8, name: 'Preact', img: preact, color: 'rgba(103,58,184,0.24)', to: TOOL_LINKS.PREACT },
    { id: 9, name: 'GIT', img: git, color: 'rgba(240,80,51,0.24)', to: TOOL_LINKS.GIT },
    { id: 10, name: 'TS', img: ts, color: 'rgba(49,120,198,0.24)', to: TOOL_LINKS.TS },
    { id: 11, name: 'NEXT.js', img: next, color: 'rgba(0,0,0,0.15)', to: TOOL_LINKS.NEXT },
    { id: 12, name: 'jQuery', img: jquery, color: 'rgba(33,96,155,0.24)', to: TOOL_LINKS.JQUERY },
    { id: 13, name: 'Figma', img: figma, color: 'rgba(255,114,98,0.24)', to: TOOL_LINKS.FIGMA },
    { id: 14, name: 'CSS', img: css, color: 'rgba(28,136,199,0.24)', to: TOOL_LINKS.CSS },
    { id: 15, name: 'BEM', img: bem, color: 'rgba(0,0,0,0.15)', to: TOOL_LINKS.BEM },
    { id: 16, name: 'NPM', img: npm, color: 'rgba(203,56,55,0.24)', to: TOOL_LINKS.NPM },
    { id: 17, name: 'Redux', img: redux, color: 'rgba(118,74,188,0.24)', to: TOOL_LINKS.REDUX },
    { id: 18, name: 'Node.js', img: nodejs, color: 'rgba(65,144,58,0.24)', to: TOOL_LINKS.NODE },
    { id: 19, name: 'Effector', img: effector, color: 'rgba(254,100,0,0.24)', to: TOOL_LINKS.EFFECTOR },
    { id: 20, name: 'Ethers.js', img: ethersjs, color: 'rgba(36,51,155,0.24)', to: TOOL_LINKS.ETHERS },
    { id: 21, name: 'SASS', img: sass, color: 'rgba(208,100,155,0.24)', to: TOOL_LINKS.SASS },
]