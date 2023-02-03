import HomeIcon from '@mui/icons-material/Home'
// import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
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
    { id: 3, title: 'Portfolio', to: '/portfolio', icon: AccountBoxIcon },
    { id: 4, title: 'Experience', to: '/experience', icon: WorkIcon },
]