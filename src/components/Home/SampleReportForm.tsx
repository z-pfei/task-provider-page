'use client'

import { useState } from 'react'
import Modal from '@/components/Modal'
import Button from '@/components/Button'

interface SampleReportFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function SampleReportForm({
  isOpen,
  onClose,
}: SampleReportFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle form submission
    console.log('Form submitted:', formData)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className='text-primary-4 text-[2.5rem] font-normal mb-9'>
          Get free sample report & white paper
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='email'
              placeholder='E-mail Address'
              className='w-full p-6 border border-[#101010] rounded-full bg-[#F4EFE7] text-[#101010] placeholder:text-gray-500'
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>
          <div className='relative mt-4 mb-9'>
            <div className='absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2'>
              <img
                src='/svg/us-flag.svg'
                alt='US flag'
                className='w-6 h-6 object-cover'
              />
              <span className='text-dark-1'>+1</span>
            </div>
            <input
              type='tel'
              placeholder='Phone Number (Optional)'
              className='w-full p-6 pl-[6.5rem] border border-[#101010] rounded-full bg-[#F4EFE7] text-[#101010] placeholder:text-gray-500'
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </div>
          <Button
            type='submit'
            className='w-full justify-center !bg-modal-button text-white text-2xl !py-4 !leading-[1.875rem]'
          >
            Send me PDFs
          </Button>
          <p className='text-base text-primary-10 mt-4'>
            You consent to receive communications from Generation Lab. You can
            unsubscribe anytime.
          </p>
        </form>
      </div>
    </Modal>
  )
}
