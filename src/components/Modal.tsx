'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import classnames from 'classnames'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  overlayClassName?: string
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className = '',
  overlayClassName = '',
}: ModalProps) {
  // handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      // prevent background scrolling
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className='fixed inset-0 z-50'>
      {/* overlay */}
      <div
        className={classnames(
          'fixed inset-0 bg-black/50 backdrop-blur-sm',
          overlayClassName
        )}
        onClick={onClose}
      />
      {/* modal content */}
      <div className='fixed inset-0 flex items-center justify-center'>
        <div
          className={classnames(
            'relative bg-modal-gradient rounded-[3.125rem] p-20 max-w-[44.5rem] w-full max-h-[92vh] overflow-y-auto',
            className
          )}
        >
          {/* close button */}
          <button
            onClick={onClose}
            className='absolute right-8 top-8 text-primary-10 hover:opacity-70 transition-opacity'
          >
            <Image
              src='/svg/close.svg'
              alt='close'
              width={36}
              height={36}
              className='w-9 h-9'
            />
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
