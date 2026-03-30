import { useEffect, useRef } from 'react'

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return undefined
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const particleCount = prefersReducedMotion ? 0 : window.innerWidth <= 768 ? 28 : 54
    const connectionDistance = window.innerWidth <= 768 ? 86 : 118
    let animationFrameId = 0

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = [
      [74, 222, 128],
      [56, 189, 248],
      [255, 255, 255],
    ]

    const particles = []

    class Particle {
      constructor() {
        const [r, g, b] = colors[Math.floor(Math.random() * colors.length)]

        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.8 + 0.8
        this.speedX = Math.random() * 0.8 - 0.4
        this.speedY = Math.random() * 0.8 - 0.4
        this.opacity = Math.random() * 0.22 + 0.08
        this.color = { r, g, b }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i += 1) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      particles.forEach((a, index) => {
        particles.slice(index + 1).forEach((b) => {
          const distance = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)

          if (distance < connectionDistance) {
            const opacity = 0.12 * (1 - distance / connectionDistance)
            ctx.strokeStyle = `rgba(170, 208, 220, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = window.requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-90" />
}

export default Particles
