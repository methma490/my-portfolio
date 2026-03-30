import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6'
import { fadeUp, stagger, viewportOnce } from '../Animate/Animate'

const contactDetails = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'methmagk@gmail.com',
    href: 'mailto:methmagk@gmail.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '0743301490',
    href: 'tel:0743301490',
  },
  {
    icon: FaLocationDot,
    label: 'Address',
    value: 'Malabe, Western Province, Sri Lanka',
    href: null,
  },
]

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    featured: true,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/methma490',
    featured: true,
  },
  {
    icon: FaFacebookF,
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    featured: false,
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    featured: false,
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    href: 'mailto:methmagk@gmail.com',
    featured: false,
  },
]

function Contact() {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending message...')

    try {
      const formData = new FormData(event.target)
      formData.append('access_key', '063384aa-72a0-4e44-bea8-b7d8d6355dae')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult('Message sent successfully.')
        event.target.reset()
      } else {
        setResult(data.message || 'Something went wrong while sending your message.')
      }
    } catch {
      setResult('Unable to send right now. Please try again later.')
    }
  }

  return (
    <section id="contact" className="section-block pt-2 pb-20 sm:pt-4 lg:pt-6">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp()}
          className="mb-6 flex justify-center"
        >
          <span className="section-label">Contact</span>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.1)}
            className="mx-auto flex w-full max-w-xl flex-col items-center space-y-5 text-center lg:pt-4"
          >
            <motion.p
              variants={fadeUp(0.05)}
              className="max-w-xl text-base leading-8 text-slate-300/80"
            >
              If you have an internship opportunity, freelance idea, or collaboration in mind,
              send a message and connect with me through the links below.
            </motion.p>

            <motion.div variants={fadeUp(0.08)} className="grid w-full gap-3 text-left">
              {contactDetails.map((item) => {
                const Icon = item.icon

                const content = (
                  <div className="flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-400/12 text-brand-300 ring-1 ring-brand-400/20">
                      <Icon className="text-sm" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-200">{item.value}</p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </motion.div>

            <motion.div
              variants={fadeUp(0.12)}
              className="w-full pt-2"
            >
              <div className="w-full text-left">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Connect
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {socialLinks.map((item) => {
                    const Icon = item.icon

                    const colorClass =
                      item.label === 'LinkedIn'
                        ? 'text-[#0A66C2]'
                        : item.label === 'GitHub'
                        ? 'text-white'
                        : item.label === 'Facebook'
                          ? 'text-[#1877F2]'
                          : item.label === 'Instagram'
                            ? 'text-[#E4405F]'
                            : 'text-brand-300'

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        aria-label={item.label}
                        title={item.label}
                        className="group flex min-h-[4.5rem] items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-3 py-3 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#121c2c] transition duration-300 group-hover:scale-105">
                          <Icon className={`text-[1.1rem] transition duration-300 group-hover:scale-110 ${colorClass}`} />
                        </span>
                        <span className="text-base font-medium text-slate-300 transition duration-300 group-hover:text-white">
                          {item.label}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp(0.12)}
            onSubmit={onSubmit}
            className="glass-card relative overflow-hidden rounded-[2.2rem] p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,159,83,0.12),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(87,208,231,0.1),_transparent_28%)]" />

            <div className="relative z-10">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.28em] text-brand-300">
                  Quick message
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                  Tell me what you&apos;re building.
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="field"
                    required
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Tell me about your idea, project, or opportunity"
                  className="field resize-none"
                  required
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="primary-button">
                  Send message
                </button>
                <p className="text-sm text-slate-400">{result}</p>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
