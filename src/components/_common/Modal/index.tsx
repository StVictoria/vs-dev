import { Box, IconButton, Modal as MuiModal, Typography } from '@mui/material'
import clsx from 'clsx'
import { FC, useEffect } from 'react'
import s from './styles.module.sass'
import CloseIcon from '@mui/icons-material/Close'

interface IModalProps {
  children: any
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<IModalProps> = ({ children, isOpen, onClose }) => {
  //   const changeBodyOverflow = (isHidden: boolean) => {
  //     const body = document.getElementsByTagName('body')[0]
  //     if (isHidden) {
  //       body.style.overflow = 'hidden'
  //     } else {
  //       body.style.overflow = 'auto'
  //     }
  //   }

  //   useEffect(() => {
  //     changeBodyOverflow(isOpen)
  //   }, [isOpen])

  const handleModalClose = () => {
    // changeBodyOverflow(false)
    onClose()
  }

  return (
    <MuiModal
      open={isOpen}
      onClose={handleModalClose}
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
          onClick={handleModalClose}
        >
          <CloseIcon className={s.closeIcon} />
        </IconButton>
      </Box>
    </MuiModal>
  )
}

export default Modal
