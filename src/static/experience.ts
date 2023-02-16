import taxcom from '../assets/images/companies/taxcom.svg'
import t1 from '../assets/images/companies/t1.svg'
import qlab from '../assets/images/companies/qlab.svg'

export interface IExperience {
    id: number
    year: number
    title: string
    image: string
    description: string[]
}

export const experience: IExperience[] = [
    { id: 1, year: 2018, title: 'TaxCom', image: taxcom, description: ['Consulting people on internal company programs', 'Solving clients problems in the shortest possible time'] },
    { id: 2, year: 2019, title: 'T1 Consulting', image: t1, description: ['Crafting projects from scratch', 'Support for existing services', 'Task decomposition and prioritization', 'Had experience of work with banking services'] },
    { id: 3, year: 2012, title: 'Qlab', image: qlab, description: ['Created ED platform to build own courses, buy other’s and watch it', 'Experience with uploading and playing large videos', 'Setting and distribution of tasks'] },
]