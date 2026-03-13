'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const TOPICS = [
  'General question',
  'Allergens',
  'Catering',
  'Press',
  'Feedback'
]

export default function ContactForm() {
  const [status, setStatus] = useState('')

  async function handleSubmit(formData: FormData) {
    const payload: Record<string, string> = Object.fromEntries(formData.entries()) as Record<string, string>
    // For compatibility with backend schema
    if (payload.subject) {
      payload.topic = payload.subject
      delete payload.subject
    }
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    setStatus(res.ok ? 'Message sent!' : 'Something went wrong.')
  }

  return (
    <form action={handleSubmit} className="space-y-4" id="contact">
      <Input name="name" placeholder="Your name" required />
      <Input name="email" type="email" placeholder="Your email" required />
      <select name="topic" required className="w-full rounded-md border bg-background p-3 text-sm text-foreground">
        <option value="" disabled>Select a topic…</option>
        {TOPICS.map((topic) => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
      <textarea name="message" placeholder="How can we help?" required className="min-h-[120px] w-full rounded-md border bg-background p-3 text-sm" />
      <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
      {status ? <p className="text-sm text-muted-foreground">{status}</p> : null}
    </form>
  )
}
