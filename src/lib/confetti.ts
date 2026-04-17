import confetti from 'canvas-confetti'

/** Pastels to match the app (lavender / mint / pink). */
const COLORS = ['#c4b5fd', '#f0abfc', '#99f6e4', '#e9d5ff', '#ddd6fe', '#a78bfa', '#fbcfe8']

/**
 * Quiet confetti when a topic is checked off — a bit more if the whole section is now done.
 */
export function celebrateTopicDone(sectionJustCompleted: boolean): void {
  const base = {
    spread: sectionJustCompleted ? 62 : 52,
    startVelocity: sectionJustCompleted ? 32 : 24,
    particleCount: sectionJustCompleted ? 42 : 26,
    ticks: sectionJustCompleted ? 220 : 170,
    gravity: 1.05,
    scalar: 0.82,
    colors: COLORS,
    origin: { x: 0.5, y: 0.58 },
    disableForReducedMotion: true,
  } as const

  void confetti(base)

  if (sectionJustCompleted) {
    window.setTimeout(() => {
      void confetti({
        ...base,
        particleCount: 18,
        spread: 80,
        startVelocity: 18,
        scalar: 0.65,
        origin: { x: 0.45, y: 0.62 },
      })
    }, 120)
  }
}
