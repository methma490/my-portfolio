import { motion } from 'framer-motion'
import myworkData from '../../assets/mywork_data'
import WorkShapes from './WorkShapes'
import { fadeUp, stagger, viewportOnce } from '../Animate/Animate'

function MyWork() {
  return (
    <section id="work" className="section-block pt-4 sm:pt-6 lg:pt-8">
      <div className="section-shell relative overflow-hidden">
        <WorkShapes />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.08)}
          className="relative z-10 mx-auto max-w-4xl space-y-4 text-center"
        >
          <motion.span variants={fadeUp()} className="section-label">
            Projects
          </motion.span>

          <motion.h2
            variants={fadeUp(0.05)}
            className="mx-auto max-w-[12ch] text-4xl font-semibold leading-tight text-white sm:max-w-[13ch] sm:text-5xl lg:max-w-[14ch] lg:text-6xl"
          >
            Selected builds with{' '}
            <span className="gradient-text">cleaner flow.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.1)}
            className="mx-auto max-w-2xl text-sm leading-7 text-slate-300/80 sm:text-base"
          >
            A few projects that show both my development work and the way I structure interfaces.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.1, 0.06)}
          className="relative z-10 mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {myworkData.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp(index * 0.04, 20)}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="glass-card group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10 bg-linear-to-t from-[#07111d]/80 via-transparent to-transparent" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 z-20 hidden items-end justify-center bg-linear-to-t from-[#040b16]/88 via-[#07111d]/46 to-transparent px-4 pb-4 opacity-0 transition duration-300 group-hover:opacity-100 md:flex">
                  <div className="w-full max-w-[15rem] translate-y-4 rounded-[1.25rem] border border-white/12 bg-[#09111d]/90 p-3 text-left shadow-[0_24px_50px_rgba(0,0,0,0.36)] backdrop-blur-xl transition duration-300 group-hover:translate-y-0">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-brand-300">
                      Quick preview
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Open the repository and explore the build details.
                    </p>
                    <div className="mt-3 inline-flex items-center rounded-full border border-brand-300/25 bg-brand-400/10 px-3 py-1 text-[11px] font-medium text-brand-300">
                      Hover reveal
                    </div>
                  </div>
                </div>

                <span className="absolute right-3 top-3 z-20 rounded-full border border-white/10 bg-[#0b1220]/80 px-3 py-1 text-[11px] font-semibold text-slate-200 backdrop-blur-md">
                  {project.tech[0]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-brand-300">
                  Project 0{project.id}
                </p>

                <h3 className="mt-2 line-clamp-2 text-xl font-semibold leading-snug text-white">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300/75">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-[#08111d]/60 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto pt-5 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-brand-300/40 hover:bg-brand-400/10"
                >
                  View code
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp(0.12)}
          className="relative z-10 mt-8 flex justify-center"
        >
          <a
            href="https://github.com/methma490"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Browse more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default MyWork
