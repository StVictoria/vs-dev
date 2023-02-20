import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PublicIcon from '@mui/icons-material/Public';
import HelpOutline from '@mui/icons-material/HelpOutline';
import SurfingIcon from '@mui/icons-material/Surfing';

export interface IFactAboutMe {
    id: number
    icon: any
    title: string
    descr: string
}

export const factsAboutMe: IFactAboutMe[] = [
    { id: 1, icon: WorkOutlineIcon, title: 'developer', descr: 'developerDescr' },
    { id: 2, icon: HelpOutline, title: 'explorer', descr: 'explorerDescr' },
    { id: 3, icon: PublicIcon, title: 'traveller', descr: 'travellerDescr' },
    { id: 4, icon: SurfingIcon, title: 'sportsman', descr: 'sportsmanDescr' },
]