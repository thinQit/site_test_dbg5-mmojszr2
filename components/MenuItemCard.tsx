"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface MenuItemCardProps {
  name?: string
  description?: string
  price?: string
  className?: string
}

export default function MenuItemCard({
  name = 'Country Sourdough',
  description = 'Naturally leavened loaf with crackling crust and airy crumb.',
  price = '$9',
  className = '',
}: Partial<MenuItemCardProps>) {
  return (
    <Card className={cn('rounded-xl border p-5 transition hover:-translate-y-1 hover:shadow-lg', className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl font-semibold">{name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <p className="font-semibold text-[#722F37]">{price}</p>
      </div>
    </Card>
  )
}
