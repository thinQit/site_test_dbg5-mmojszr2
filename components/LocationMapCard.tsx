"use client";

import { Button } from '@/components/ui/button'
import { MapPin, Clock, Phone } from 'lucide-react'

interface LocationMapCardProps {
  mapSrc?: string
}

export default function LocationMapCard({
  mapSrc = 'https://www.google.com/maps?q=Portland+OR&output=embed',
}: Partial<LocationMapCardProps>) {
  return (
    <section id="location" className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
      <iframe src={mapSrc} className="h-[350px] w-full rounded-xl border" loading="lazy" />
      <div className="rounded-xl border bg-card p-6">
        <h3 className="font-serif text-3xl">Visit Sunrise Bakery</h3>
        <p className="mt-4 flex gap-2 text-sm"><MapPin className="h-4 w-4" />214 Olive Lane, Portland, OR 97205</p>
        <p className="mt-2 flex gap-2 text-sm"><Clock className="h-4 w-4" />Mon–Sun: 7:00 AM – 9:00 PM</p>
        <p className="mt-2 flex gap-2 text-sm"><Phone className="h-4 w-4" />(503) 555-0188</p>
        <p className="mt-4 text-sm text-muted-foreground">Street parking after 6 PM and nearby public garage on Alder St.</p>
        <Button className="mt-6 bg-[#606C38] hover:bg-[#4f592f]">Get Directions</Button>
      </div>
    </section>
  )
}
