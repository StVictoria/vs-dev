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
    { id: 1, icon: WorkOutlineIcon, title: 'Developer', descr: 'Engaged from 2019' },
    { id: 2, icon: HelpOutline, title: 'Explorer', descr: 'Nowadays - Blockchain' },
    { id: 3, icon: PublicIcon, title: 'Traveller', descr: ' Current - Thailand' },
    { id: 4, icon: SurfingIcon, title: 'Sportsman', descr: 'Everything that I just can try and be passionate about' },
]