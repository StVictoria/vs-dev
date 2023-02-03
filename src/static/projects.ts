import lasles from '../assets/images/sites/lasles.PNG'
import enver from '../assets/images/sites/enver.PNG'
import qubly from '../assets/images/sites/qubly.PNG'
import selfschool from '../assets/images/sites/selfschool.PNG'

export interface ITech {
    id: number
    title: string
    icon: string
}

export interface IProject {
    id: number
    title: string
    img: string
    techs: ITech[]
}

export const projects: IProject[] = [
    { id: 1, title: 'Lasles', img: lasles, techs: [{ id: 1, title: '', icon: '' }] },
    { id: 1, title: 'Enver', img: enver, techs: [{ id: 1, title: '', icon: '' }] },
    { id: 1, title: 'Qubly', img: qubly, techs: [{ id: 1, title: '', icon: '' }] },
    { id: 1, title: 'Selfschool', img: selfschool, techs: [{ id: 1, title: '', icon: '' }] },
    { id: 1, title: '', img: '', techs: [{ id: 1, title: '', icon: '' }] },
    { id: 1, title: '', img: '', techs: [{ id: 1, title: '', icon: '' }] },
]