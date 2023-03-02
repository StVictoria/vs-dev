import { Button, TextField } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../_common/Modal'
import s from './styles.module.sass'

interface IContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: FC<IContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={s.title}>{t('contactForm')}</h2>
      <p className={s.text}>{t('contactFormDescr1')}</p>
      <p className={s.text}>{t('contactFormDescr2')} 🙂</p>
      <form className={s.form}>
        <TextField label={t('yourName')} variant='outlined' className={s.field} />
        <TextField label={t('yourEmail')} variant='outlined' className={s.field} />
        <TextField
          label={t('yourMessage')}
          multiline
          rows={3}
          maxRows={4}
          variant='outlined'
          className={s.field}
        />
        <Button fullWidth variant='contained' size='large'>
          {t('send')}
        </Button>
      </form>
    </Modal>
  )
}

export default ContactModal
