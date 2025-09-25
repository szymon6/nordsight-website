'use client'

import { DottedSurface } from '@/components/ui/dotted-surface'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { cn } from '@/lib/utils'

function scrollToAbout() {
  const section = document.getElementById('about')
  section?.scrollIntoView({ behavior: 'smooth' })
}

export function HeaderSection() {
  return (
    <header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground">
      <DottedSurface />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-x-0 -top-32 mx-auto h-72 w-72 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,var(--foreground)_0%,transparent_65%)]',
            'opacity-20 blur-[120px]'
          )}
        />
        <h1 className="font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
          AI data insight, for people
        </h1>
        <InteractiveHoverButton
          text="Learn more"
          className="w-36"
          onClick={scrollToAbout}
        />
      </div>
    </header>
  )
}
