'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface MenuTabsProps {
  tabs?: string[]
  onChange?: (tab: string) => void
  className?: string
}

export default function MenuTabs({
  tabs = ['Sourdough Loaves', 'Breakfast', 'Lunch', 'Pastries'],
  onChange,
  className = '',
}: Partial<MenuTabsProps>) {
  const [active, setActive] = useState(tabs[0] || '')

  return (
    <div role="tablist" aria-label="Menu categories" className={cn('flex flex-wrap gap-2', className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={active === tab}
          onClick={() => {
            setActive(tab)
            onChange?.(tab)
          }}
          className={cn(
            'rounded-lg px-4 py-2 text-sm font-medium transition',
            active === tab ? 'bg-[#722F37] text-[#FEFAE0]' : 'bg-muted text-foreground hover:bg-[#DDA15E]/20'
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
