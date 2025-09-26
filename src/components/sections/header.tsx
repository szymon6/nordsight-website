'use client'

import { useRef, type ReactNode, type RefObject } from 'react'
import { useInView } from 'motion/react'

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
    const prefersMobileLayout =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 640px)').matches
    const offset = prefersMobileLayout ? -70 : -140
    smoothScrollIntoView(section, { offset, duration: 2500 })
  }
}

function openContactMail() {
  window.location.href = 'mailto:hello@nordsightanalytics.com'
}

export function HeaderSection() {
  const heroAnimationRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroAnimationRef, {
    amount: 0.35,
  })
  const shouldHideBackground = heroAnimationRef.current ? !isHeroInView : false

  const taglineVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: 1.25 + i * 0.45,
        duration: 2.2,
        ease: premiumEase,
      },
    }),
    hidden: {
      y: 24,
      opacity: 0,
      filter: 'blur(12px)',
    },
  }

  const actionVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 4.9 + i * 0.12,
        duration: 4.8,
        ease: premiumEase,
      },
    }),
    hidden: {
      y: 16,
      opacity: 0,
    },
  }

  const backgroundVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 3.2 + i * 0.15,
        duration: 7.4,
        ease: easeOutTransition,
      },
    }),
    hidden: {
      opacity: 0,
    },
  }

  return (
    <header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground">
      <TimelineContent
        animationNum={2}
        timelineRef={heroAnimationRef}
        customVariants={backgroundVariants}
        once
        className="pointer-events-none absolute inset-0 z-0"
      >
        <DottedSurface
          aria-hidden
          className={cn(
            'transition-opacity duration-700 ease-out',
            shouldHideBackground && 'opacity-0',
          )}
        />
      </TimelineContent>
      <div
        ref={heroAnimationRef}
        className="relative z-10 flex flex-col items-center gap-6 text-center"
      >
        <h1 className="font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
          AI Data Insights, for People
        </h1>
        <div className="w-full">
          <TimelineContent
            animationNum={0}
            timelineRef={heroAnimationRef}
            customVariants={taglineVariants}
            once
            className="px-6 text-lg leading-relaxed text-muted-foreground sm:px-0"
          >
            At the forefront of AI innovation,{' '}
            <HeadlineHighlight animationNum={1} timelineRef={heroAnimationRef}>
              Nordsight Analytics
            </HeadlineHighlight>{' '}
            pushes research beyond the lab.
          </TimelineContent>
        </div>
        <TimelineContent
          animationNum={3}
          timelineRef={heroAnimationRef}
          customVariants={actionVariants}
          once
          className="flex items-center gap-3"
        >
          <InteractiveHoverButton
            text="Learn more"
            className="w-36"
            onClick={scrollToWhatWeDo}
          />
          <InteractiveHoverButton
            text="Contact"
            className="w-36"
            invert
            onClick={openContactMail}
          />
        </TimelineContent>
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
            delay: 1.5 + i * 0.25,
            duration: 1.2,
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
