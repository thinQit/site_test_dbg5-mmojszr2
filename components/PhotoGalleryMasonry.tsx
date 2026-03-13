'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PhotoItem {
  src: string
  caption: string
}

interface PhotoGalleryMasonryProps {
  photos?: PhotoItem[]
}

export default function PhotoGalleryMasonry({
  photos = [
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/11236793.jpg', caption: 'Morning loaves cooling on racks' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577092/site-images/restaurant/12387876.jpg', caption: 'Golden crust, open crumb' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577075/site-images/restaurant/11526866.jpg', caption: 'Stone-oven bake in progress' },
  ],
}: Partial<PhotoGalleryMasonryProps>) {
  const [active, setActive] = useState<PhotoItem | null>(null)

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28" id="gallery">
      <div className="columns-1 gap-4 md:columns-3">
        {photos.map((photo) => (
          <button key={photo.src} className="mb-4 w-full overflow-hidden rounded-xl" onClick={() => setActive(photo)}>
            <Image src={photo.src} alt={photo.caption} width={1200} height={800} unoptimized className="h-auto w-full object-cover transition hover:scale-105" />
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setActive(null)}>
          <div className="max-w-4xl">
            <Image src={active.src} alt={active.caption} width={1200} height={800} unoptimized className="rounded-xl" />
            <p className="mt-3 text-center text-sm text-white">{active.caption}</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
