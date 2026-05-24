import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../Animate/Animate'

const contactPoints = [
  {
    label: 'Email',
    value: 'methmagk@gmail.com',
    href: 'mailto:methmagk@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+94 71 000 0000',
    href: 'tel:+94710000000',
    icon: Phone,
  },
  {
    label: 'Location',
    value: 'Colombo, Sri Lanka',
    href: 'https://maps.google.com/?q=Colombo,+Sri+Lanka',
    icon: MapPin,
  },
]

function Contact() {
  return (
    <section id="contact" className="section-block">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.12)}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <motion.span variants={fadeUp()} className="section-label">
              Contact
            </motion.span>

            <motion.h2 variants={fadeUp(0.05)} className="section-title">
              Let&apos;s design the next collaboration.
            </motion.h2>

            <motion.p variants={fadeUp(0.1)} className="section-copy">
              Share what you are building or the role you need filled. I respond quickly and can
              jump into UI polish, responsive layouts, or full-stack improvements.
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="grid gap-4 sm:grid-cols-3">
              {contactPoints.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="glass-card flex flex-col gap-3 px-5 py-4 text-left transition hover:-translate-y-0.5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp(0.2)}
            className="glass-card relative overflow-hidden px-6 py-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(34,197,94,0.12),_transparent_45%),radial-gradient(circle_at_80%_60%,_rgba(56,189,248,0.12),_transparent_48%)]" />
            <form className="relative z-10 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400">
                  Full name
                </label>
                <input id="name" name="name" type="text" placeholder="Your name" className="field" />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400">
                  Email
                </label>
                <input id="email" name="email" type="email" placeholder="you@email.com" className="field" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project or role."
                  className="field resize-none"
                />
              </div>

              <button type="submit" className="primary-button w-full">
                <span className="mr-2">Send message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
