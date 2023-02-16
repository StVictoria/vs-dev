import { FC } from 'react'
import s from './styles.module.sass'

interface ICompanyInfoProps {
  title: string
  year: number
  image: string
  description: string[]
}

const CompanyInfo: FC<ICompanyInfoProps> = ({
  title,
  year,
  image,
  description,
}) => {
  const renderDescription = () =>
    description.map((descr: string) => (
      <li className={s.descriptionItem} key={descr}>{descr}</li>
    ))

  return (
    <div className={s.companyInfo}>
      <div className={s.year}>{year}</div>
      <img className={s.image} src={image} alt={title} />
      <ul className={s.description}>{renderDescription()}</ul>
    </div>
  )
}

export default CompanyInfo
