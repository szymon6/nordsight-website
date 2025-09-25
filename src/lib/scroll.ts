export type SmoothScrollOptions = {
  offset?: number
  duration?: number
  easing?: (progress: number) => number
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

export function smoothScrollIntoView(
  element: HTMLElement,
  { offset = 0, duration = 1400, easing = easeOutExpo }: SmoothScrollOptions = {}
) {
  if (typeof window === 'undefined') return

  if (duration <= 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.scrollIntoView({ behavior: 'auto', block: 'start' })
    return
  }

  const start = window.scrollY
  const target = element.getBoundingClientRect().top + start - offset
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const clampedTarget = Math.max(0, Math.min(target, maxScroll))
  const distance = clampedTarget - start

  let startTime: number | null = null

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easing(progress)

    window.scrollTo({ top: start + distance * eased })

    if (elapsed < duration) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}
