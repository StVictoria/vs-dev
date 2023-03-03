import taxcom from '../assets/images/companies/taxcom.svg'
import t1 from '../assets/images/companies/t1.svg'
import qlab from '../assets/images/companies/qlab.svg'

export interface IExperience {
    id: number
    year: number
    title: string
    website: string
    image: string
    description: string[]
}

export const experience: IExperience[] = [
    { id: 1, year: 2018, title: 'TaxCom', website: 'https://taxcom.ru/', image: taxcom, description: ['taxcom.descr1', 'taxcom.descr2', 'taxcom.descr3'] },
    { id: 2, year: 2019, title: 'T1 Consulting', website: 'https://www.t1-consulting.ru/', image: t1, description: ['t1.descr1', 't1.descr2', 't1.descr3', 't1.descr4'] },
    { id: 3, year: 2022, title: 'Qlab', website: 'https://qlab.group/', image: qlab, description: ['qlab.descr1', 'qlab.descr2', 'qlab.descr3', 'qlab.descr4'] },
]