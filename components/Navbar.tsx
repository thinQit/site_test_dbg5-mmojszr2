'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  logo: string
  navItems: NavItem[]
  ctaLabel: string
  ctaHref: string
  className?: string
}

export default function Navbar({
  logo = 'Sunrise Bakery',
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'About', href: '/about' },
    { label: 'Location', href: '/location' },
    { label: 'Catering', href: '/catering' },
    { label: 'Contact', href: '/contact' }
  ],
  ctaLabel = 'Reserve a Table',
  ctaHref = '/reservations',
  className = ''
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 border-b bg-background/90 backdrop-blur', className)}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="font-serif text-2xl font-bold text-primary">
          {logo}
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-accent text-accent-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 ml-3"
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {/* Mobile menu sheet/panel */}
        {open && (
          <div
            className="md:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur flex flex-col"
            style={{ animation: 'fadeIn .3s' }}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <Link href="/" onClick={() => setOpen(false)} className="font-serif text-2xl font-bold text-primary">
                {logo}
              </Link>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-lg"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col gap-2 px-4 py-6 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium py-3 rounded-lg px-3 text-foreground hover:text-accent hover:bg-accent/10 transition"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg text-base font-medium hover:bg-accent/90"
              >
                <Link href={ctaHref} onClick={() => setOpen(false)}>{ctaLabel}</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
      `}</style>
    </header>
  )
}
