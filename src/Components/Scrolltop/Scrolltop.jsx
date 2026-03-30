import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[#0b1524]/84 text-brand-300 shadow-[0_18px_40px_rgba(0,0,0,0.36)] backdrop-blur transition hover:-translate-y-1 hover:border-brand-400/40 hover:bg-[#112036] hover:text-white"
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
