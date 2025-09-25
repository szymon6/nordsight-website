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

  const scrollKeys = new Set([
    'ArrowUp',
    'ArrowDown',
    'PageUp',
    'PageDown',
    'Home',
    'End',
    'Space',
    'Spacebar',
    ' '
  ])
  let cancelled = false
  const passiveOptions: AddEventListenerOptions = { passive: true }

  function cleanup() {
    window.removeEventListener('wheel', handleCancel, passiveOptions)
    window.removeEventListener('touchstart', handleCancel, passiveOptions)
    window.removeEventListener('touchmove', handleCancel, passiveOptions)
    window.removeEventListener('pointerdown', handleCancel, passiveOptions)
    window.removeEventListener('keydown', handleKeydown)
  }

  function handleCancel() {
    cancelled = true
    cleanup()
  }

  function handleKeydown(event: KeyboardEvent) {
    if (scrollKeys.has(event.key)) {
      handleCancel()
    }
  }

  window.addEventListener('wheel', handleCancel, passiveOptions)
  window.addEventListener('touchstart', handleCancel, passiveOptions)
  window.addEventListener('touchmove', handleCancel, passiveOptions)
  window.addEventListener('pointerdown', handleCancel, passiveOptions)
  window.addEventListener('keydown', handleKeydown)

  let startTime: number | null = null

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp
    if (cancelled) return

    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easing(progress)

    window.scrollTo({ top: start + distance * eased })

    if (elapsed < duration) {
      window.requestAnimationFrame(step)
      return
    }

    cleanup()
  }

  window.requestAnimationFrame(step)
}
