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
    <section className="relative flex justify-center bg-background px-6 py-24 text-foreground sm:py-32">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8" ref={sectionRef}>
        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={sectionRef}
          customVariants={headlineVariants}
          className="text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          At the forefront of{' '}
          <Highlight animationNum={1} timelineRef={sectionRef}>
            AI innovation
          </Highlight>
          , Nordsight Analytics pushes research beyond the lab. We build
          solutions that drive{' '}
          <Highlight animationNum={2} timelineRef={sectionRef}>
            predictive insights
          </Highlight>
          , optimize processes, and empower{' '}
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
            delay: 0.2 + i * 0.2,
            duration: 0.4,
          },
        }),
        hidden: {
          opacity: 0,
          filter: 'blur(8px)',
        },
      }}
      className={cn(
        'inline-flex items-center gap-1 rounded-full border border-foreground/15 px-3 py-1 text-sm font-medium text-foreground',
        'bg-foreground/[0.05] backdrop-blur'
      )}
    >
      {children}
    </TimelineContent>
  )
}
