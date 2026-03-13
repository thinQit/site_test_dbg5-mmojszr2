'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const TIMES = [
  "8:00am", "8:30am", "9:00am", "9:30am",
  "10:00am", "10:30am", "11:00am", "11:30am",
  "12:00pm", "12:30pm", "1:00pm", "1:30pm"
]

const PARTY_SIZES = [1, 2, 3, 4, 5, 6]

export default function ReservationForm() {
  const [status, setStatus] = useState('')

  async function handleSubmit(formData: FormData) {
    const payload: Record<string, any> = Object.fromEntries(formData.entries())
    payload.partySize = Number(payload.partySize)
    const res = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    setStatus(res.ok ? 'Reservation request submitted!' : 'Unable to submit request.')
  }

  return (
    <form action={handleSubmit} className="grid gap-4 md:grid-cols-2" id="reservations">
      <Input name="name" placeholder="Full name" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Input name="phone" placeholder="Phone" required />
      <Input name="date" type="date" required />
      <select name="time" required className="w-full rounded-md border bg-background p-2 text-sm text-foreground">
        <option value="" disabled>Select time…</option>
        {TIMES.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <select name="partySize" required className="w-full rounded-md border bg-background p-2 text-sm text-foreground">
        <option value="" disabled>Party size…</option>
        {PARTY_SIZES.map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <Input name="notes" placeholder="Notes (allergies, occasion)" className="md:col-span-2" />
      <Button type="submit" className="md:col-span-2 bg-accent text-accent-foreground hover:bg-accent/90">Request Reservation</Button>
      {status ? <p className="md:col-span-2 text-sm text-muted-foreground">{status}</p> : null}
    </form>
  )
}
