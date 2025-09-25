'use client'

import { TimelineContent } from '@/components/ui/timeline-animation'
import { cn } from '@/lib/utils'
import { useRef, type ReactNode, type RefObject } from 'react'

export default function AboutSection2() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const headlineVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
    hidden: {
      y: 24,
      opacity: 0,
      filter: 'blur(12px)',
    },
  }

  return (
    <section
      id="about"
      className="relative z-10 flex justify-center bg-background px-6 py-24 text-foreground sm:py-32"
    >
      <div
        className="mx-auto w-full max-w-3xl space-y-6 text-left sm:space-y-8"
        ref={sectionRef}
      >
        <TimelineContent
          animationNum={0}
          timelineRef={sectionRef}
          customVariants={headlineVariants}
          className="text-balance text-lg leading-relaxed tracking-tight text-muted-foreground text-center sm:text-xl md:px-12 xl:px-16"
        >
          At the forefront of{' '}
          <Highlight animationNum={1} timelineRef={sectionRef}>
            AI innovation
          </Highlight>
          , Nordsight Analytics pushes research beyond the lab. We build
          solutions that drive{' '}
          <Highlight animationNum={2} timelineRef={sectionRef}>
            predictive insights,
          </Highlight>{' '}
          and empower{' '}
          <Highlight animationNum={3} timelineRef={sectionRef}>
            data-driven decisions
          </Highlight>
          .
        </TimelineContent>
      </div>
    </section>
  )
}

type HighlightProps = {
  children: ReactNode
  animationNum: number
  timelineRef: RefObject<HTMLDivElement | null>
}

function Highlight({ children, animationNum, timelineRef }: HighlightProps) {
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
            delay: 0.35 + i * 0.15,
            duration: 0.45,
            ease: 'easeOut',
          },
        }),
        hidden: {
          opacity: 0,
          filter: 'blur(8px)',
        },
      }}
      className={cn(
        'inline-block whitespace-nowrap font-serif font-semibold text-foreground'
      )}
    >
      <span className="relative z-10 tracking-tight">{children}</span>
    </TimelineContent>
  )
}
