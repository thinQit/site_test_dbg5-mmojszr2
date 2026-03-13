"use client";

import { Button } from '@/components/ui/button'

interface ReservationCTABandProps {
  title?: string
  description?: string
  buttonText?: string
}

export default function ReservationCTABand({
  title = 'Reserve Your Table for Fresh-Baked Evenings',
  description = 'Join us for candlelit dinners, seasonal menus, and warm sourdough straight from the stone oven.',
  buttonText = 'Book Reservation',
}: Partial<ReservationCTABandProps>) {
  return (
    <section className="bg-[#722F37] py-16 text-[#FEFAE0]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <h3 className="font-serif text-3xl">{title}</h3>
          <p className="mt-2 text-[#f6efcc]">{description}</p>
        </div>
        <Button className="bg-[#DDA15E] text-black hover:bg-[#c78f53]">{buttonText}</Button>
      </div>
    </section>
  )
}
