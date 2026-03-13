"use client";

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow = '',
  title = 'Section Title',
  subtitle = '',
  centered = true,
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('space-y-4', centered && 'text-center', className)}>
      {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-[#DDA15E]">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl font-bold md:text-5xl">{title}</h2>
      <div className={cn('h-1 w-16 rounded-full bg-[#DDA15E]', centered && 'mx-auto')} />
      {subtitle ? <p className={cn('text-muted-foreground', centered && 'mx-auto max-w-2xl')}>{subtitle}</p> : null}
    </div>
  )
}
