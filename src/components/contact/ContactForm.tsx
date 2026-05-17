import { useState } from 'react'
import { useContactForm } from '@/hook/useContactForm'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { loading, submit } = useContactForm()

  async function handleSubmit() {
    await submit(form)
  }
  return (
    <section className="py-36">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="mx-auto w-full max-w-2xl px-6">
          <Input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="my-2"
            placeholder="John Doe"
          />
          <Input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="my-2"
            placeholder="email@example.com"
          />
          <Textarea
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="my-2 h-50"
            placeholder="Write here..."
          />
          <div className="flex justify-between">
            <Button
              onClick={() => navigate(-1)}
              className="px-7 py-2 bg-[var(--accent)] text-white"
            >
              Back
            </Button>
            <Button
              disabled={loading}
              onClick={handleSubmit}
              className="px-7 py-2 bg-[var(--accent)] text-white"
            >
              {loading ? 'Sending...' : 'Send message'}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
