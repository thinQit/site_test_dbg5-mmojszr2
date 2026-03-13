'use client'

import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'
import { Instagram } from 'lucide-react'

type FooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

interface FooterProps {
  brand: string
  description: string
  columns: FooterColumn[]
  copyright: string
  className?: string
}

export default function Footer({
  brand,
  description,
  columns,
  copyright,
  className = ''
}: FooterProps) {
  return (
    <footer className={`border-t bg-background text-foreground ${className}`} id="footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-serif text-2xl">{brand}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        </div>
        {columns.slice(0, 3).map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 font-serif text-lg text-accent">{col.title}</h4>
            <ul className="space-y-1">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-accent transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="md:col-span-1 mt-6 md:mt-0">
          <h4 className="mb-3 font-serif text-lg text-accent">Newsletter</h4>
          <NewsletterForm />
          <div className="mt-4 flex gap-3">
            <Link
              href="https://instagram.com/"
              target="_blank"
              rel="noopener"
              className="rounded-md border border-accent/50 p-2 hover:bg-accent/10 text-accent"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            {/* Add other social links here if desired */}
          </div>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
        {copyright}
      </div>
    </footer>
  )
}
