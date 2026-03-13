'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function NewsletterForm() {
  const [status, setStatus] = useState('')

  async function handleSubmit(formData: FormData) {
    const payload: Record<string, string> = Object.fromEntries(formData.entries()) as Record<string, string>
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    setStatus(res.ok ? 'Thanks for subscribing!' : 'Subscription failed.')
  }

  return (
    <form action={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
      <Input
        name="email"
        type="email"
        placeholder="Email address"
        required
        className="bg-white text-black"
      />
      <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Join</Button>
      {status ? <p className="text-xs pt-2 sm:pt-0 sm:pl-2 text-muted-foreground">{status}</p> : null}
    </form>
  )
}
