import { motion, useReducedMotion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaEnvelope, FaFileArrowDown, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { fadeUp, stagger, viewportOnce } from '../Animate/Animate'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Contact', href: '#contact' },
]


const socialLinks = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaGithub, href: 'https://github.com/methma490', label: 'GitHub', color: '#f8fafc' },
  { icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram', color: '#E4405F' },
  { icon: FaEnvelope, href: 'mailto:methmagk@gmail.com', label: 'Email', color: '#86efac' },
  
]

function Footer() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={stagger(0.1)}
      className="relative z-10 mt-14 overflow-hidden border-t border-white/10 bg-[#060d18]/80 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,_rgba(34,197,94,0.08),_transparent_20%),radial-gradient(circle_at_90%_20%,_rgba(56,189,248,0.08),_transparent_20%)]" />

      <div className="section-shell relative py-8">
        <motion.div
          variants={fadeUp()}
          className="mb-6 flex flex-col gap-4 rounded-[1.8rem] border border-white/10 bg-white/[0.035] px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-300">Let&apos;s build</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300/80">
              Open to internship roles, portfolio collaborations, and practical product work.
            </p>
          </div>

          <AnchorLink href="#contact" className="primary-button whitespace-nowrap">
            Start a conversation
          </AnchorLink>
        </motion.div>

        <motion.div
          variants={fadeUp(0.05)}
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-sm leading-7 text-slate-400">
              Thanks for visiting my portfolio. Explore the sections above or connect with me through
              the links here.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-5 text-sm text-slate-400">
            {navItems.map((item) => (
              <AnchorLink key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </AnchorLink>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <motion.span
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.08, rotate: item.label === 'Resume' ? -6 : 0 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  >
                    <Icon style={{ color: item.color }} className="text-base" />
                  </motion.span>
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.1)}
          className="mt-6 flex flex-col gap-2 border-t border-white/8 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"
        >
         
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
