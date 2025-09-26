'use client'

import { useRef, type ReactNode, type RefObject } from 'react'

import { DottedSurface } from '@/components/ui/dotted-surface'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { TimelineContent } from '@/components/ui/timeline-animation'
import { smoothScrollIntoView } from '@/lib/scroll'
import { cn } from '@/lib/utils'

const easeOutTransition = 'easeOut' as const
const premiumEase = [0.22, 1, 0.36, 1] as const

function scrollToWhatWeDo() {
  const section = document.getElementById('what-we-do')
  if (section instanceof HTMLElement) {
    smoothScrollIntoView(section, { offset: -100, duration: 2500 })
  }
}

function openContactMail() {
  window.location.href = 'mailto:hello@nordsightanalytics.com'
}

export function HeaderSection() {
  const taglineRef = useRef<HTMLDivElement>(null)

  const taglineVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: 0.75 + i * 0.4,
        duration: 1.1,
        ease: premiumEase,
      },
    }),
    hidden: {
      y: 24,
      opacity: 0,
      filter: 'blur(12px)',
    },
  }

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
          AI data insights, for people
        </h1>
        <div ref={taglineRef} className="w-full">
          <TimelineContent
            animationNum={0}
            timelineRef={taglineRef}
            customVariants={taglineVariants}
            once
            className="text-lg leading-relaxed text-muted-foreground"
          >
            At the forefront of AI innovation,{' '}
            <HeadlineHighlight animationNum={1} timelineRef={taglineRef}>
              Nordsight Analytics
            </HeadlineHighlight>{' '}
            pushes research beyond the lab.
          </TimelineContent>
        </div>
        <div className="flex items-center gap-3">
          <InteractiveHoverButton
            text="Learn more"
            className="w-36"
            onClick={scrollToWhatWeDo}
          />
          <InteractiveHoverButton
            text="contact"
            className="w-36"
            invert
            onClick={openContactMail}
          />
        </div>
      </div>
    </header>
  )
}

type HighlightProps = {
  children: ReactNode
  animationNum: number
  timelineRef: RefObject<HTMLDivElement | null>
}

function HeadlineHighlight({
  children,
  animationNum,
  timelineRef,
}: HighlightProps) {
  return (
    <TimelineContent
      as="span"
      animationNum={animationNum}
      timelineRef={timelineRef}
      customVariants={{
        visible: (i: number) => ({
          opacity: 1,
          filter: 'blur(0px)',
          transition: {
            delay: 1 + i * 0.15,
            duration: 0.45,
            ease: easeOutTransition,
          },
        }),
        hidden: {
          opacity: 0,
          filter: 'blur(8px)',
        },
      }}
      once
      className={cn(
        'inline-block whitespace-nowrap font-semibold text-foreground'
      )}
    >
      <span className="relative z-10 tracking-tight">{children}</span>
    </TimelineContent>
  )
}
