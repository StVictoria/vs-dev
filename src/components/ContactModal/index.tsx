import { Button, CircularProgress, TextField } from '@mui/material'
import { FC, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../_common/Modal'
import s from './styles.module.sass'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import {
  PUBLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
} from '../../constants/emailService'
import { ISocial, socials_modal } from '../../static/socials'
import { Link } from 'react-router-dom'

interface IContactModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormData = {
  name: string
  email: string
  message: string
}

const ContactModal: FC<IContactModalProps> = ({ isOpen, onClose }) => {
  const [isSending, setIsSending] = useState<boolean>(false)
  const [isSent, setIsSent] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const { t } = useTranslation()
  const form = useRef<HTMLFormElement>(null)

  const handleClose = () => {
    setError('')
    setIsSent(false)
    onClose()
  }

  const onSubmit = () => {
    if (form.current) {
      setIsSending(true)
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          (result: any) => {
            setIsSent(true)
            reset()
          },
          (error: any) => {
            setError(error.text)
          }
        )
        .finally(() => {
          setIsSending(false)
        })
    }
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
      {isSent ? (
        <>
          <h2 className={s.title}>{t('contactForm')}</h2>
          <p className={s.text}>{t('contactFormDescr1')}</p>
          <p className={s.text}>{t('contactFormDescr2')} 🙂</p>
          <form ref={form} className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label={t('yourName')}
              {...register('name', { required: true })}
              error={!!errors.name}
              variant='outlined'
              className={s.field}
            />
            <TextField
              label={t('yourEmail')}
              {...register('email', { required: true })}
              error={!!errors.email}
              variant='outlined'
              className={s.field}
            />
            <TextField
              label={t('yourMessage')}
              {...register('message', { required: true })}
              error={!!errors.message}
              multiline
              rows={3}
              variant='outlined'
              className={s.field}
            />
            <Button
              fullWidth
              type='submit'
              disabled={isSending}
              variant='contained'
              size='large'
            >
              {isSending ? (
                <CircularProgress color='inherit' size={20} />
              ) : (
                t('send')
              )}
            </Button>
            {error && <p className={s.error}>{t('oopsError')} :(</p>}
          </form>
        </>
      ) : (
        <div className={s.successBlock}>
          <h2 className={s.title}>✔️ {t('successfullySent')}!</h2>
          <p className={s.text}>
            {t('writeMeInSocials')}
          </p>
          <div className={s.socials}>{renderSocials()}</div>
          <Button fullWidth variant='contained' onClick={handleClose}>
            {t('great')}
          </Button>
        </div>
      )}
    </Modal>
  )
}

export default ContactModal
