import { Button, CircularProgress, TextField } from '@mui/material'
import { ChangeEvent, FC, useRef, useState } from 'react'
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
import { CONTACT_FIELDS } from '../../constants/CONTACT_FIELDS'

interface IContactModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormData = {
  name: string
  email: string
  message: string
}

type contactFieldType =
  | CONTACT_FIELDS.NAME
  | CONTACT_FIELDS.EMAIL
  | CONTACT_FIELDS.MESSAGE

const ContactModal: FC<IContactModalProps> = ({ isOpen, onClose }) => {
  const [isSending, setIsSending] = useState<boolean>(false)
  const [isSent, setIsSent] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const { t } = useTranslation()
  const form = useRef<HTMLFormElement>(null)

  const handleClose = () => {
    setError('')
    setIsSent(false)
    onClose()
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: contactFieldType
  ) => {
    const value = e.target.value
    return setValue(field, value.trimStart().replace(/  +/g, ' '))
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

  const renderFieldError = (message: string) => {
    return <p className={s.fieldError}>{message}</p>
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {!isSent ? (
        <>
          <h2 className={s.title}>{t('home.contactForm.title')}</h2>
          <p className={s.text}>{t('home.contactForm.descr1')}</p>
          <p className={s.text}>{t('home.contactForm.descr2')} 🙂</p>
          <form ref={form} className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.fieldWrapper}>
              <TextField
                label={t('home.contactForm.nameTitle')}
                {...register('name', {
                  required: `${t('home.contactForm.fillTheField')}. ${t(
                    'home.contactForm.minLength'
                  )} 2`,
                  minLength: 2,
                })}
                error={!!errors.name}
                variant='outlined'
                className={s.field}
                onChange={(e) => handleChange(e, CONTACT_FIELDS.NAME)}
              />
              {errors.name?.message && renderFieldError(errors.name?.message)}
            </div>

            <div className={s.fieldWrapper}>
              <TextField
                label={t('home.contactForm.emailTitle')}
                {...register('email', {
                  required: t('home.contactForm.enterCorrectEmail') || '',
                  pattern: /[a-z0-9-]+@[a-z0-9-]+\.[a-z]{2,20}$/,
                })}
                error={!!errors.email}
                variant='outlined'
                className={s.field}
                onChange={(e) => handleChange(e, CONTACT_FIELDS.EMAIL)}
              />
              {errors.email?.message && renderFieldError(errors.email?.message)}
            </div>

            <div className={s.fieldWrapper}>
              <TextField
                label={t('home.contactForm.messageTitle')}
                {...register('message', {
                  required: t('home.contactForm.fillTheField') || '',
                })}
                error={!!errors.message}
                multiline
                rows={3}
                variant='outlined'
                className={s.field}
                onChange={(e) => handleChange(e, CONTACT_FIELDS.MESSAGE)}
              />
              {errors.message?.message &&
                renderFieldError(errors.message?.message)}
            </div>

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
                t('home.contactForm.submitTitle')
              )}
            </Button>
            {error && (
              <p className={s.error}>
                {t('home.contactForm.sendFormError')} :(
              </p>
            )}
          </form>
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
