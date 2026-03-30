export const viewportOnce = {
  once: true,
  amount: 0.25,
}

export const fadeUp = (delay = 0, distance = 36) => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
})

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: 'easeOut',
    },
  },
})

export const stagger = (staggerChildren = 0.14, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.72,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
})
