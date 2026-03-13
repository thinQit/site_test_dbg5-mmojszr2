"use client";

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

interface ChefStoryProps {
  name?: string
  bio?: string
  imageSrc?: string
  values?: string[]
}

export default function ChefStory({
  name = 'Chef Elena Marquez',
  bio = 'With 18 years of baking experience, Chef Elena leads Sunrise Bakery with a devotion to long fermentation, local grains, and heartfelt hospitality.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576912/site-images/corporate/10384120.jpg',
  values = ['Wild fermentation daily', 'Locally milled heritage flour', 'Zero-waste kitchen practices'],
}: Partial<ChefStoryProps>) {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
      <Image src={imageSrc} alt={name} width={800} height={600} className="rounded-2xl object-cover shadow-md" />
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#DDA15E]">Chef Story</p>
        <h3 className="mt-3 font-serif text-4xl">{name}</h3>
        <p className="mt-4 text-muted-foreground">{bio}</p>
        <ul className="mt-6 space-y-3">
          {values.map((value) => (
            <li key={value} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#606C38]" />
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
