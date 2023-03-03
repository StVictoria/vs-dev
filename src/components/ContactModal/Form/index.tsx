import { Button, CircularProgress, TextField } from '@mui/material'
import { ChangeEvent, FC, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  PUBLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
} from '../../../constants/emailService'
import emailjs from '@emailjs/browser'
import { CONTACT_FIELDS } from '../../../constants/CONTACT_FIELDS'
import s from './styles.module.sass'

type FormValues = {
  name: string
  email: string
  message: string
}

interface IFormProps {
  error: string
  setError: (error: string) => void
  setIsSent: (isSent: boolean) => void
}

const Form: FC<IFormProps> = ({ setIsSent, error, setError }) => {
  const [isSending, setIsSending] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>()

  const form = useRef<HTMLFormElement>(null)
  const { t } = useTranslation()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValue(
      name as keyof FormValues,
      value.trimStart().replace(/  +/g, ' ') as string
    )
  }

  const onSubmit = async () => {
    if (form.current) {
      setIsSending(true)
      try {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          form.current,
          PUBLIC_KEY
        )
        setIsSent(true)
        reset()
      } catch (error: any) {
        setError(error.text)
      } finally {
        setIsSending(false)
      }
    }
  }

  const renderFieldError = (message: string) => {
    return <p className={s.fieldError}>{message}</p>
  }

  return (
    <form ref={form} className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.fieldWrapper}>
        <TextField
          label={t('home.contactForm.nameTitle')}
          {...register(CONTACT_FIELDS.NAME, {
            required: `${t('home.contactForm.fillTheField')}. ${t(
              'home.contactForm.minLength'
            )} 2`,
            minLength: 2,
            onChange: (e) => handleChange(e),
          })}
          error={!!errors.name}
          variant='outlined'
          className={s.field}
        />
        {errors.name?.message && renderFieldError(errors.name?.message)}
      </div>

      <div className={s.fieldWrapper}>
        <TextField
          label={t('home.contactForm.emailTitle')}
          {...register(CONTACT_FIELDS.EMAIL, {
            required: t('home.contactForm.enterCorrectEmail') || '',
            pattern: /[a-z0-9-]+@[a-z0-9-]+\.[a-z]{2,20}$/,
            onChange: (e) => handleChange(e),
          })}
          error={!!errors.email}
          variant='outlined'
          className={s.field}
        />
        {errors.email?.message && renderFieldError(errors.email?.message)}
      </div>

      <div className={s.fieldWrapper}>
        <TextField
          label={t('home.contactForm.messageTitle')}
          {...register(CONTACT_FIELDS.MESSAGE, {
            required: t('home.contactForm.fillTheField') || '',
            onChange: (e) => handleChange(e),
          })}
          error={!!errors.message}
          multiline
          rows={3}
          variant='outlined'
          className={s.field}
        />
        {errors.message?.message && renderFieldError(errors.message?.message)}
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
        <p className={s.error}>{t('home.contactForm.sendFormError')} :(</p>
      )}
    </form>
  )
}

export default Form
