'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const PICKUP_WINDOWS = [
  "8:00am–9:00am", "9:00am–10:00am", "10:00am–11:00am", "11:00am–12:00pm",
  "12:00pm–1:00pm", "1:00pm–2:00pm", "2:00pm–3:00pm"
]

export default function OrderPickupForm() {
  const [status, setStatus] = useState('')

  async function handleSubmit(formData: FormData) {
    const payload: Record<string, any> = Object.fromEntries(formData.entries())
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    setStatus(res.ok ? 'Pickup request sent!' : 'Order request failed.')
  }

  return (
    <form action={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <Input name="name" placeholder="Full name" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Input name="phone" placeholder="Phone number" required />
      <Input name="pickupDate" type="date" required />
      <select name="pickupWindow" required className="w-full rounded-md border bg-background p-2 text-sm text-foreground">
        <option value="" disabled>Select pickup window…</option>
        {PICKUP_WINDOWS.map((w) => (
          <option key={w} value={w}>{w}</option>
        ))}
      </select>
      <Input name="items" placeholder="Items (e.g., 2 Country Loaves, 4 Croissants)" className="md:col-span-2" required />
      <Input name="notes" placeholder="Notes (slicing, allergies)" className="md:col-span-2" />
      <Button type="submit" className="md:col-span-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">Request Pickup</Button>
      {status ? <p className="md:col-span-2 text-sm text-muted-foreground">{status}</p> : null}
    </form>
  )
}
