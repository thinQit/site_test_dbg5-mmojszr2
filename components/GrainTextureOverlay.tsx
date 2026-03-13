"use client";

import { cn } from '@/lib/utils'

interface GrainTextureOverlayProps {
  className?: string
}

export default function GrainTextureOverlay({ className = '' }: Partial<GrainTextureOverlayProps>) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 opacity-[0.08]', className)}
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 20%, #000 1px, transparent 1px), radial-gradient(circle at 80% 80%, #000 1px, transparent 1px)',
        backgroundSize: '3px 3px',
      }}
    />
  )
}
