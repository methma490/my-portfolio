/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0fdf4",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
        },
        sky: {
          400: "#38bdf8",
        },
        slate: {
          950: "#020617",
          900: "#0f172a",
          800: "#1e293b",
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'spin-slow': 'spin 18s linear infinite',
        'button-glow': 'buttonGlow 2.2s ease-in-out infinite',
        'rotate-3d': 'rotate3d 8s linear infinite',
        'shimmer-x': 'shimmerX 2.2s linear infinite',
        'code-pulse': 'codePulse 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s ease-out both',
        'slide-in-right': 'slideInRight 0.8s ease-out both',
        'fade-in-down': 'fadeInDown 0.6s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(12px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-18px)',
          },
        },
        floatReverse: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(16px)',
          },
        },
        gradientShift: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        buttonGlow: {
          '0%, 100%': {
            boxShadow: '0 12px 40px rgba(34, 197, 94, 0.35)',
          },
          '50%': {
            boxShadow: '0 16px 56px rgba(34, 197, 94, 0.52)',
          },
        },
        rotate3d: {
          '0%': {
            transform: 'translateX(-50%) rotateY(0deg) rotateX(0deg)',
          },
          '50%': {
            transform: 'translateX(-50%) rotateY(180deg) rotateX(10deg)',
          },
          '100%': {
            transform: 'translateX(-50%) rotateY(360deg) rotateX(0deg)',
          },
        },
        shimmerX: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
        codePulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.9',
            color: 'rgba(34, 197, 94, 0.9)',
            textShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '1',
            color: 'rgba(14, 165, 233, 1)',
            textShadow: '0 0 15px rgba(14, 165, 233, 0.7)',
          },
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}