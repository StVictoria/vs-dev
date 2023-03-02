import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export interface IMenu {
    id: number
    to: string
    title: string
    icon: any
}

export const menu: IMenu[] = [
    { id: 1, title: 'Home', to: '/', icon: HomeIcon },
    { id: 2, title: 'Portfolio', to: '/portfolio', icon: AccountBoxIcon },
    { id: 3, title: 'Experience', to: '/experience', icon: WorkIcon },
]