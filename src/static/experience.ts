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
    { id: 1, year: 2018, title: 'TaxCom', image: taxcom, description: ['taxComDescr1', 'taxComDescr2', 'taxComDescr3'] },
    { id: 2, year: 2019, title: 'T1 Consulting', image: t1, description: ['t1ConsultingDescr1', 't1ConsultingDescr2', 't1ConsultingDescr3', 't1ConsultingDescr4'] },
    { id: 3, year: 2022, title: 'Qlab', image: qlab, description: ['qlabDescr1', 'qlabDescr2', 'qlabDescr3'] },
]