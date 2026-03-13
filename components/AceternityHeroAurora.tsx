'use client'

import Image from 'next/image'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AceternityHeroAuroraProps {
  badge?: string
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundImageUrl?: string
  overlayClassName?: string
  minHeightClassName?: string
  className?: string
  auroraColors?: string[]
}

export default function AceternityHeroAurora({
  badge,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundImageUrl,
  overlayClassName = 'bg-black/40',
  minHeightClassName = 'min-h-[80vh]',
  className = '',
  auroraColors = ['#722F37', '#DDA15E', '#FEFAE0', '#606C38']
}: AceternityHeroAuroraProps) {
  return (
    <section className={cn('relative w-full', minHeightClassName, className)}>
      <div className={cn('absolute inset-0 w-full h-full -z-10 overflow-hidden')}>
        {backgroundImageUrl ? (
          <div className="absolute inset-0">
            <Image
              src={backgroundImageUrl}
              alt=""
              fill
              priority
              className="object-cover object-center w-full h-full"
              sizes="100vw"
            />
            <div className={cn('absolute inset-0', overlayClassName)} />
          </div>
        ) : null}
        <AuroraBackground className="absolute inset-0 w-full h-full pointer-events-none" auroraColors={auroraColors} />
      </div>
      <div
        className={cn(
          'relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto px-4 py-24 md:py-40 text-center'
        )}
      >
        {badge && (
          <span className="mb-4 inline-block rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
            {badge}
          </span>
        )}
        <h1 className="gradient-text font-serif text-5xl font-bold md:text-7xl text-primary-foreground drop-shadow-lg">
          {headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/90 font-sans">{subheadline}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-lg rounded-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90 transition"
          >
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-lg font-bold border-accent text-accent hover:bg-accent/5 transition"
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
