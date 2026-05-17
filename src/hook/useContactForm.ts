import { useState } from 'react'
import { toast } from 'sonner'

import { sendContactMessage } from '@/api/contact'
import { isValidEmail } from '@/utils/validators'

export function useContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function submit(data: {
    name: string
    email: string
    message: string
  }) {
    setSuccess(false)
    if (!data.name.trim()) {
      toast.warning('Name is required')
      return
    }

    if (!isValidEmail(data.email)) {
      toast.warning('Invalid email address')
      return
    }

    if (data.message.trim().length < 10) {
      toast.warning('Message is too short')
      return
    }

    if (data.message.length > 3000) {
      toast.warning('Message is too long')
      return
    }

    try {
      setLoading(true)
      await sendContactMessage(data)
      setSuccess(true)
    } catch {
      toast.error('Failed to send message')
    } finally {
      toast.success('Message sent successfully')
      setLoading(false)
    }
  }

  return {
    loading,
    success,
    submit,
  }
}
