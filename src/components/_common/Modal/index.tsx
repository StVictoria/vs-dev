import { Box, IconButton, Modal as MuiModal } from '@mui/material'
import { FC } from 'react'
import s from './styles.module.sass'
import CloseIcon from '@mui/icons-material/Close'

interface IModalProps {
  children: any
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<IModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box className={s.modal}>
        {children}
        <IconButton
          aria-label='close'
          size='large'
          className={s.closeButton}
          onClick={onClose}
        >
          <CloseIcon className={s.closeIcon} />
        </IconButton>
      </Box>
    </MuiModal>
  )
}

export default Modal
