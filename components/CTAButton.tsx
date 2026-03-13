"use client";

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  label?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({
  label = 'Get Started',
  variant = 'primary',
  className = '',
}: Partial<CTAButtonProps>) {
  return (
    <Button
      className={cn(
        'rounded-lg px-6 py-3 font-medium ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#DDA15E]',
        variant === 'primary' ? 'bg-[#DDA15E] text-black hover:bg-[#c78f53]' : 'bg-[#722F37] text-[#FEFAE0] hover:bg-[#5c252c]',
        className
      )}
    >
      {label}
    </Button>
  )
}
