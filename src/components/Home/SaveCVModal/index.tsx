import { Button } from '@mui/material'
import { FC } from 'react'
import Modal from '../../_common/Modal'
import cvEng from '../../../assets/files/cvEng.pdf'
import cvRus from '../../../assets/files/cvRus.pdf'
import { useTranslation } from 'react-i18next'
import s from './styles.module.sass'

interface ISaveCVModalProps {
  isOpen: boolean
  onClose: () => void
}

const SaveCVModal: FC<ISaveCVModalProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.saveCVModal}>
        <h2 className={s.title}>{t('home.saveCVModal.title')}</h2>
        <div className={s.actions}>
          <Button fullWidth variant='contained' onClick={onClose}>
            <a
              href={i18n.language === 'en' ? cvEng : cvRus}
              download={t('home.myNameCV')}
            >
              {t('home.saveCVModal.confirm')}
            </a>
          </Button>
          <Button
            fullWidth
            size='small'
            className={s.cancelButton}
            onClick={onClose}
          >
            {t('home.saveCVModal.cancel')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default SaveCVModal
