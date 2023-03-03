import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import s from './styles.module.sass'

interface ICompanyInfoProps {
  title: string
  website: string
  year: number
  image: string
  description: string[]
}

const CompanyInfo: FC<ICompanyInfoProps> = ({
  title,
  website,
  year,
  image,
  description,
}) => {
  const { t } = useTranslation()

  const renderDescription = () =>
    description.map((descr: string) => (
      <li className={s.descriptionItem} key={descr}>
        {t(`experience.${descr}`)}
      </li>
    ))

  return (
    <div className={s.companyInfo}>
      <div className={s.year}>{year}</div>
      <Link to={website} target='_blank'>
        <img className={s.image} src={image} alt={title} />
      </Link>
      <ul className={s.description}>{renderDescription()}</ul>
    </div>
  )
}

export default CompanyInfo
