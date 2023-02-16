import { FC } from 'react'
import s from './styles.module.sass'
import MotionPage from '../_common/MotionPage'

const Experience: FC = () => {
  return (
    <MotionPage className={s.experience}>
      <div className={s.timeline}>My way</div>
    </MotionPage>
  )
}

export default Experience
