import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../Animate/Animate'

const strengths = [
  'Responsive frontend development with React and Tailwind CSS',
  'Backend fundamentals using Node.js, Express, and REST APIs',
  'Academic Android and Java project delivery from idea to UI',
  'Readable structure, reusable components, and maintainable code',
]

function AboutCard() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={stagger(0.1)}
      className="glass-card h-full overflow-hidden rounded-[2rem] p-6 sm:p-8"
    >
      <motion.div
        variants={fadeUp()}
        className="mb-6 inline-flex rounded-2xl bg-linear-to-br from-brand-400/18 to-cyan-400/18 px-4 py-3 text-sm font-semibold text-brand-300"
      >
        What I bring
      </motion.div>
      <motion.h3 variants={fadeUp(0.05)} className="font-display text-3xl font-semibold text-white">
        A developer who treats interface quality as part of the build, not a last step.
      </motion.h3>
      <motion.p variants={fadeUp(0.1)} className="mt-4 text-base leading-8 text-slate-300/80">
        I like taking a rough concept and giving it structure. That includes cleaner sections,
        better readability, smoother interactions, and implementation decisions that support the
        final experience.
      </motion.p>

      <div className="mt-8 grid gap-3">
        {strengths.map((item, index) => (
          <motion.div
            key={item}
            variants={fadeUp(0.14 + index * 0.05, 20)}
            className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#08111d]/55 px-4 py-3"
          >
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-brand-400 to-cyan-400 text-[0.65rem] font-bold text-[#08111d]">
              {index + 1}
            </span>
            <p className="text-sm leading-6 text-slate-200">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default AboutCard
