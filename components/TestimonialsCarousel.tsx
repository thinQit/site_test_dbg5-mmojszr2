'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Testimonial {
  quote: string
  author: string
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
}

export default function TestimonialsCarousel({
  testimonials = [
    { quote: 'Best sourdough in the city—crispy crust, deeply flavorful crumb.', author: 'Maya R.' },
    { quote: 'Our anniversary dinner here was unforgettable. Warm service and amazing bread.', author: 'Daniel K.' },
    { quote: 'I come every Sunday for the olive loaf and espresso. Always perfect.', author: 'Leah T.' },
  ],
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [paused, testimonials.length])

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-6 flex items-center justify-center gap-1 text-[#DDA15E]">
          {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-5 w-5 fill-current" />)}
          <span className="ml-2 text-sm text-foreground">4.9 average from 420+ guests</span>
        </div>
        <Card className="p-8 text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <p className="font-serif text-2xl">“{testimonials[index]?.quote}”</p>
          <p className="mt-4 text-sm text-muted-foreground">— {testimonials[index]?.author}</p>
        </Card>
      </div>
    </section>
  )
}
