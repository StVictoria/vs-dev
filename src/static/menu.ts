import HomeIcon from '@mui/icons-material/Home'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import WorkIcon from '@mui/icons-material/Work'

export interface IMenu {
    id: number
    to: string
    title: string
    icon: any
}

export const menu: IMenu[] = [
    { id: 1, title: 'Home', to: '/', icon: HomeIcon },
    // { id: 2, title: 'Skills', to: '/skills', icon: HomeIcon },
    { id: 3, title: 'Portfolio', to: '/portfolio', icon: AutoAwesomeMosaicIcon },
    { id: 4, title: 'Experience', to: '/experience', icon: WorkIcon },
]