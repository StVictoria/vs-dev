import { Button } from '@mui/material'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../_common/Modal'
import s from './styles.module.sass'
import { ISocial, socials_modal } from '../../static/socials'
import { Link } from 'react-router-dom'
import Form from './Form'

interface IContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: FC<IContactModalProps> = ({ isOpen, onClose }) => {
  const [isSent, setIsSent] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const { t } = useTranslation()

  const handleClose = () => {
    setError('')
    setIsSent(false)
    onClose()
  }

  const renderSocials = () =>
    socials_modal.map((social: ISocial) => (
      <li key={social.id} className={s.socialIconWrapper}>
        <Link to={social.to} target='_blank'>
          <img
            className={`${s.socialIcon} ${social.title}`}
            src={social.icon}
            alt={social.title}
          />
        </Link>
      </li>
    ))

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {!isSent ? (
        <>
          <h2 className={s.title}>{t('home.contactForm.title')}</h2>
          <p className={s.text}>{t('home.contactForm.descr1')}</p>
          <p className={s.text}>{t('home.contactForm.descr2')} 🙂</p>
          <Form error={error} setError={setError} setIsSent={setIsSent} />
        </>
      ) : (
        <div className={s.successBlock}>
          <h2 className={s.title}>
            <p className={s.successCheck}>✔️</p>{' '}
            {t('home.contactForm.successTitle')}!
          </h2>
          <p className={s.text}>{t('home.contactForm.writeMeInSocials')}</p>
          <div className={s.socials}>{renderSocials()}</div>
          <Button
            fullWidth
            variant='contained'
            className={s.okButton}
            onClick={handleClose}
          >
            {t('home.contactForm.successSubmitTitle')}
          </Button>
        </div>
      )}
    </Modal>
  )
}

export default ContactModal
