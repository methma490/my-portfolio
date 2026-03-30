import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuClose from '../../assets/menu_close.svg'
import menuOpen from '../../assets/menu_open.svg'
import { fadeUp, viewportOnce } from '../Animate/Animate'

const navLinks = [
  { label: 'Home', href: '#home', offset: 0 },
  { label: 'About', href: '#about', offset: 80 },
  { label: 'Projects', href: '#work', offset: 80 },
  { label: 'Contact', href: '#contact', offset: 80 },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={fadeUp(0, 24)}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="section-shell pt-2 pb-0">
        <div
          className={`grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[1.8rem] border px-4 py-3 transition duration-300 sm:px-6 ${
            scrolled
              ? 'border-white/12 bg-[#07111d]/88 shadow-[0_20px_60px_rgba(0,0,0,0.42)] backdrop-blur-2xl'
              : 'border-white/10 bg-[#07111d]/62 backdrop-blur-xl'
          }`}
        >
          <AnchorLink href="#home" className="flex min-w-0 items-center">
            <div className="min-w-0">
              <p className="font-display truncate text-lg font-semibold tracking-tight text-white">
                Methma Sankalpani
              </p>
              <p className="truncate text-xs uppercase tracking-[0.26em] text-slate-400">
                Software Engineer in Progress
              </p>
            </div>
          </AnchorLink>

          <nav className="hidden justify-self-center md:block">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <AnchorLink
                    href={item.href}
                    offset={item.offset}
                    className="group relative inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
                  >
                    {item.label}
                    <span className="absolute inset-x-3 bottom-1.5 h-px origin-left scale-x-0 bg-linear-to-r from-brand-300 via-brand-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden justify-self-end md:block">
            <AnchorLink href="#contact" offset={80} className="primary-button px-5 py-3">
              Start a project
            </AnchorLink>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
          >
            <img src={menuOpen} alt="Open menu" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-y-0 right-0 z-50 w-[min(84vw,340px)] border-l border-white/10 bg-[#07111d]/95 p-6 backdrop-blur-2xl md:hidden"
      >
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">Navigate</p>
            <p className="text-sm text-slate-400">Explore the refreshed portfolio</p>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
          >
            <img src={menuClose} alt="Close menu" className="h-4 w-4" />
          </button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-3"
        >
          {navLinks.map((item, index) => (
            <motion.div key={item.label} variants={fadeUp(index * 0.03, 18)}>
              <AnchorLink
                href={item.href}
                offset={item.offset}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-medium text-slate-200 transition hover:border-brand-400/40 hover:bg-white/10"
              >
                {item.label}
              </AnchorLink>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        />
      )}
    </motion.header>
  )
}

export default Navbar