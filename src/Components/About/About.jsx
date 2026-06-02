import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import {
  Building2,
  ChevronRight,
  Code2,
  Globe,
  GraduationCap,
  Package,
  Workflow,
  Zap,
} from 'lucide-react'

const DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

function DevIcon({ name, variant = 'original', size = 24, title, invert = false }) {
  return (
    <img
      src={`${DEV}/${name}/${name}-${variant}.svg`}
      alt={title || name}
      title={title || name}
      width={size}
      height={size}
      className="block"
      style={{
        filter: invert ? 'brightness(0) invert(1)' : 'none',
      }}
      onError={(event) => {
        event.currentTarget.style.display = 'none'
      }}
    />
  )
}

const tabData = {
  skills: {
    title: 'Tech stack & tools',
    intro: 'A visual overview of the technologies and tools I use across different projects.',
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.15)',
    tabIcon: Code2,
    items: [
      {
        icons: [
          { name: 'react', variant: 'original', title: 'React' },
          { name: 'nextjs', variant: 'original', title: 'Next.js', invert: true },
          { name: 'javascript', variant: 'original', title: 'JavaScript' },
          { name: 'typescript', variant: 'original', title: 'TypeScript' },
          { name: 'html5', variant: 'original', title: 'HTML5' },
          { name: 'css3', variant: 'original', title: 'CSS3' },
        ],
      },
      {
        icons: [
          { name: 'tailwindcss', variant: 'original', title: 'Tailwind CSS' },
          { name: 'bootstrap', variant: 'original', title: 'Bootstrap' },
          { name: 'vitejs', variant: 'original', title: 'Vite' },
          { name: 'figma', variant: 'original', title: 'Figma' },
          { name: 'vscode', variant: 'original', title: 'VS Code' },
          { name: 'postman', variant: 'original', title: 'Postman' },
        ],
      },
      {
        icons: [
          { name: 'nodejs', variant: 'original', title: 'Node.js' },
          { name: 'express', variant: 'original', title: 'Express.js', invert: true },
          { name: 'npm', variant: 'original', title: 'npm' },
          { name: 'json', variant: 'original', title: 'JSON' },
          { name: 'mongodb', variant: 'original', title: 'MongoDB' },
          { name: 'mysql', variant: 'original', title: 'MySQL' },
        ],
      },
      {
        icons: [
          { name: 'java', variant: 'original', title: 'Java' },
          { name: 'python', variant: 'original', title: 'Python' },
          { name: 'c', variant: 'original', title: 'C' },
          { name: 'cplusplus', variant: 'original', title: 'C++' },
          { name: 'php', variant: 'original', title: 'PHP' },
          { name: 'kotlin', variant: 'original', title: 'Kotlin' },
        ],
      },
      {
        icons: [
          { name: 'android', variant: 'original', title: 'Android' },
          { name: 'androidstudio', variant: 'original', title: 'Android Studio' },
          { name: 'docker', variant: 'original', title: 'Docker' },
          { name: 'kubernetes', variant: 'original', title: 'Kubernetes' },
          { name: 'vercel', variant: 'original', title: 'Vercel', invert: true },
          { name: 'git', variant: 'original', title: 'Git' },
        ],
      },
      {
        icons: [
          { name: 'github', variant: 'original', title: 'GitHub', invert: true },
          { name: 'eclipse', variant: 'original', title: 'Eclipse' },
          { name: 'intellij', variant: 'original', title: 'IntelliJ IDEA' },
        ],
        
      },
      
    ],
  },
  experience: {
    title: 'What I build',
    intro:
      'Most of my work comes from academic and self-driven projects where I handle both UI structure and practical functionality.',
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
    tabIcon: Workflow,
    items: [
      {
        text: 'Built full-stack and Java-based systems from idea to working interface',
        icons: [
          { name: 'java', variant: 'original', title: 'Java' },
          { name: 'react', variant: 'original', title: 'React' },
          { name: 'nodejs', variant: 'original', title: 'Node.js' },
        ],
      },
      {
        text: 'Created dashboards, CRUD flows, profile pages, booking pages, and responsive layouts',
        icons: [
          { name: 'html5', variant: 'original', title: 'HTML5' },
          { name: 'css3', variant: 'original', title: 'CSS3' },
          { name: 'javascript', variant: 'original', title: 'JavaScript' },
        ],
      },
      {
        text: 'Improved hierarchy, spacing, and visual clarity across project sections',
        icons: [
          { name: 'tailwindcss', variant: 'original', title: 'Tailwind CSS' },
          { name: 'figma', variant: 'original', title: 'Figma' },
        ],
      },
      {
        text: 'Used GitHub and structured workflows through coursework and personal builds',
        icons: [
          { name: 'github', variant: 'original', title: 'GitHub', invert: true },
          { name: 'git', variant: 'original', title: 'Git' },
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    intro:
      'My academic path is centered on software engineering, web systems, databases, and practical implementation.',
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.15)',
    tabIcon: GraduationCap,
    items: [
      {
        text: 'Sri Lanka Institute of Information Technology (SLIIT) — 2023–Present',
        icons: [],
      },
      { text: 'B.Sc. (Hons.) in Information Technology specializing in Software Engineering', icons: [] },
     

      { text: 'Dharmasoka College, Ambalangoda — 2019–2021', icons: [] },
      { text: 'G.C.E. Advanced Level — Physical Science Stream', icons: [] },
      
    ],
  },
  background: {
    title: 'Campus & school',
    intro:
      'A short view of the academic environments that helped shape my technical foundation and work style.',
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.15)',
    tabIcon: Building2,
    items: [
      { text: 'Currently pursuing higher education at SLIIT', icons: [] },
      { text: 'Built my technical direction through IT and software engineering study', icons: [] },
      { text: 'School experience shaped discipline, consistency, and communication', icons: [] },
      { text: 'Now focused on growing into a stronger full-stack developer with better product thinking', icons: [] },
    ],
  },
}

const tabs = [
  { key: 'skills', label: 'Skills', icon: Code2 },
  { key: 'experience', label: 'Experience', icon: Workflow },
  { key: 'education', label: 'Education', icon: GraduationCap },
  { key: 'background', label: 'Campus & School', icon: Building2 },
]

const quickPoints = [
  { label: 'Clean & responsive UI', icon: Globe },
  { label: 'Full-stack mindset', icon: Zap },
  { label: 'Portfolio-grade builds', icon: Package },
]

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')
  const current = useMemo(() => tabData[activeTab], [activeTab])
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-block relative overflow-hidden pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-[-4rem] h-[22rem] w-[22rem] rounded-full bg-sky-400/8 blur-3xl" />
        <div className="absolute right-[-6rem] top-[12%] h-[18rem] w-[18rem] rounded-full bg-cyan-400/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-8 flex flex-col items-center gap-2 text-center"
        >
          <span className="section-label max-w-fit">About me</span>
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.02] text-white sm:text-4xl lg:text-[3.2rem]">
            I build digital products
            <br />
            <span className="gradient-text">with clarity, care, and structure.</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08111d]/80 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.09),_transparent_45%)]" />

            <div className="relative z-10">
              <p className="text-sm leading-7 text-slate-300">
                I&apos;m a software engineering undergraduate who enjoys creating digital experiences
                that are both <span className="font-semibold text-white">functional and visually clean</span>.
                I like improving structure, spacing, and responsiveness so each section feels more polished and easier to use.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                My main interest is <span className="font-medium text-cyan-300">full-stack development</span>,
                where I can combine frontend design, backend logic, and practical implementation into complete builds.
              </p>

              <div className="mt-5 grid gap-2.5">
                {quickPoints.map(({ label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.18 + index * 0.08, duration: 0.4 }}
                    whileHover={{ x: 5, transition: { type: 'spring', stiffness: 320, damping: 20 } }}
                    className="group flex cursor-default items-center gap-3 rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/25 to-cyan-300/15 ring-1 ring-sky-400/25">
                      <Icon size={15} className="text-sky-300" strokeWidth={2} />
                    </span>
                    <span className="text-sm font-medium text-slate-200">{label}</span>
                    <ChevronRight
                      size={13}
                      className="ml-auto text-slate-600 transition-colors duration-200 group-hover:text-cyan-400"
                      strokeWidth={2.5}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2"
              >
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-block h-2 w-2 rounded-full bg-emerald-400"
                />
                <span className="text-xs font-medium text-emerald-300">Open to opportunities</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative min-h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#08111d]/80 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + '-glow'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pointer-events-none absolute inset-0 rounded-[2rem]"
                style={{
                  background: `radial-gradient(circle at 85% 10%, ${current.glow} 0%, transparent 50%)`,
                }}
              />
            </AnimatePresence>

            <div className="relative z-10">
              <div className="mb-5 flex flex-wrap gap-2 border-b border-white/8 pb-4">
                {tabs.map(({ key, label, icon: Icon }) => {
                  const isActive = activeTab === key
                  const accent = tabData[key].accent

                  return (
                    <motion.button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm"
                      style={
                        isActive
                          ? {
                              background: `linear-gradient(135deg, ${accent}28, ${accent}14)`,
                              color: accent,
                              border: `1px solid ${accent}45`,
                              boxShadow: `0 0 16px ${accent}28, inset 0 1px 0 ${accent}18`,
                            }
                          : {
                              border: '1px solid rgba(255,255,255,0.08)',
                              background: 'rgba(255,255,255,0.03)',
                              color: '#64748b',
                            }
                      }
                    >
                      <Icon size={13} strokeWidth={isActive ? 2.2 : 1.8} style={{ color: isActive ? accent : '#64748b' }} />
                      {label}
                    </motion.button>
                  )
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3">
                    {(() => {
                      const TIcon = current.tabIcon
                      return (
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{ background: `${current.accent}1a`, border: `1px solid ${current.accent}35` }}
                        >
                          <TIcon size={17} style={{ color: current.accent }} strokeWidth={2} />
                        </span>
                      )
                    })()}
                    <h3 className="font-display text-xl font-semibold text-white sm:text-[1.7rem]">
                      {current.title}
                    </h3>
                  </div>

                  <motion.div
                    key={activeTab + '-line'}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="mt-2 mb-3 ml-12 h-px origin-left rounded-full"
                    style={{ background: `linear-gradient(90deg, ${current.accent}65, transparent)` }}
                  />

                  <p className="text-sm leading-7 text-slate-400">{current.intro}</p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {current.items.map(({ text, icons }, index) => (
                      <motion.div
                        key={`${activeTab}-${index}`}
                        initial={{ opacity: 0, y: 16, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.065, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                        className="group relative overflow-hidden rounded-[1.3rem] border border-white/8 bg-[#09121f]/70 px-4 py-4 cursor-default"
                      >
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[1.3rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ background: `radial-gradient(circle at top left, ${current.accent}10 0%, transparent 60%)` }}
                        />

                        <div className="relative flex flex-col gap-3">
                          {icons.length > 0 && (
                            <div className={`flex flex-wrap items-center gap-2 ${activeTab === 'skills' ? 'justify-center' : ''}`}>
                              {icons.map(({ name, variant, title, invert }) => (
                                <motion.span
                                  key={`${title}-${name}`}
                                  whileHover={{ scale: 1.2, y: -2 }}
                                  transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                                  title={title}
                                  className={`flex items-center justify-center rounded-lg border ${
                                    invert ? 'border-white/16 bg-white/[0.1]' : 'border-white/8 bg-white/[0.05]'
                                  } ${
                                    activeTab === 'skills' ? 'h-12 w-12' : 'h-7 w-7'
                                  }`}
                                >
                                  <DevIcon
                                    name={name}
                                    variant={variant}
                                    size={activeTab === 'skills' ? 26 : 17}
                                    title={title}
                                    invert={invert}
                                  />
                                </motion.span>
                              ))}
                            </div>
                          )}

                          {text && (
                            <div className="flex items-start gap-3">
                              <span
                                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold"
                                style={{
                                  background: `${current.accent}18`,
                                  border: `1px solid ${current.accent}30`,
                                  color: current.accent,
                                }}
                              >
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <p className="text-sm leading-[1.65] text-slate-200">{text}</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
