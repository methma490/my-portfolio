import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
} from 'react-icons/fa6'

const contactItems = [
  {
    label: 'Email',
    value: 'methmagk@gmail.com',
    href: 'mailto:methmagk@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'Phone',
    value: '0743301490',
    href: 'tel:0743301490',
    icon: FaPhone,
  },
  {
    label: 'Address',
    value: 'Malabe, Western Province, Sri Lanka',
    href: 'https://maps.google.com/?q=Malabe,+Western+Province,+Sri+Lanka',
    icon: FaLocationDot,
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/methmagk74490/',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/methma490',
    icon: FaGithub,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1BhFxNnCWm/',
    icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/methu.02?igsh=aDBtdGo5ajVibGRs',
    icon: FaInstagram,
  },
]

function Contact() {
  return (
    <section id="contact" className="section-block">
      <div className="section-shell">
        <div className="mb-10 flex justify-center">
          <span className="section-label">Contact</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.2fr]">
          <div className="space-y-8">
            <p className="text-base leading-8 text-slate-300/80 sm:text-lg">
              If you have an internship opportunity, freelance idea, or collaboration in mind,
              send a message and connect with me through the links below.
            </p>

            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="glass-card flex items-center gap-4 px-5 py-4 transition hover:-translate-y-0.5"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Connect</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="glass-card flex items-center gap-4 px-5 py-4 transition hover:-translate-y-0.5"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="glass-card relative overflow-hidden px-7 py-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.12),transparent_45%)]" />
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Quick message</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Tell me what you&apos;re building.
                </h2>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs uppercase tracking-[0.3em] text-slate-400"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs uppercase tracking-[0.3em] text-slate-400"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="field"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-[0.3em] text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your idea, project, or opportunity"
                    className="field resize-none"
                  />
                </div>

                <button type="submit" className="primary-button">
                  <span className="mr-2">Send message</span>
                  <FaPaperPlane className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
