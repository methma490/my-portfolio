import { motion, useReducedMotion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import hero from '../../assets/hero.jpg'
import { fadeUp, scaleIn, stagger } from '../Animate/Animate'

const highlights = ['Frontend & Backend', 'Responsive UI', 'Clean Code']

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="section-block overflow-hidden pt-20 pb-28 sm:pt-24 sm:pb-32 lg:pt-24 lg:pb-28"
    >
      <div className="section-shell relative">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-brand-400/10 blur-3xl" />

        <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-4">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger(0.1, 0.08)}
            className="space-y-3 lg:pr-2"
          >
            <motion.span variants={fadeUp()} className="section-label max-w-fit text-[0.65rem] sm:text-[0.72rem]">
              Available for internships, freelance work, and collaborative builds
            </motion.span>

            <motion.p
              variants={fadeUp(0.05)}
              className="text-[10px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs md:text-sm"
            >
              Full-Stack Developer / Software Engineering Undergraduate / Problem Solver
            </motion.p>

            <motion.h1
              variants={fadeUp(0.1)}
              className="max-w-[13ch] font-display text-3xl font-semibold leading-[1.02] text-white sm:text-4xl md:text-[3.4rem] lg:text-[3.9rem]"
            >
              Designing digital work that feels{' '}
              <span className="gradient-text">alive, clear, and sharp.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.16)}
              className="max-w-xl text-sm leading-6 text-slate-200/90 sm:text-base lg:text-[1rem]"
            >
              I&apos;m Methma Sankalpani, a full-stack developer building complete web
              applications with thoughtful design, strong structure, and practical
              problem-solving.
            </motion.p>

            <motion.div
              variants={fadeUp(0.22)}
              className="flex flex-wrap gap-2 pt-1"
            >
              {highlights.map((item, index) => (
                <motion.span
                  key={item}
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22, delay: index * 0.03 }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200 sm:text-sm"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp(0.28)}
              className="flex flex-col gap-3 pt-1 sm:flex-row"
            >
              <AnchorLink href="#work" offset={80} className="primary-button">
                Explore projects
              </AnchorLink>

              <a className="secondary-button" href="/Methma_Sankalpani.pdf" download>
                Download resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={scaleIn(0.18)}
            className="relative mx-auto flex w-full items-center justify-center lg:justify-end"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                    }
              }
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl sm:h-64 sm:w-64" />
              <motion.div
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="pointer-events-none absolute inset-[-1.35rem] rounded-full border border-dashed border-brand-400/25"
              />
              <img
                src={hero}
                alt="Portrait of Methma Sankalpani"
                className="relative h-[230px] w-[230px] rounded-full object-cover object-top shadow-[0_20px_60px_rgba(0,0,0,0.42)] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[340px] lg:w-[340px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
