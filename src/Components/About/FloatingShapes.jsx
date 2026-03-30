const shapes = [
  'left-[2%] top-10 h-20 w-20 rounded-[2rem] border border-white/10 bg-white/[0.04] animate-float-slow',
  'right-[8%] top-8 h-28 w-28 rounded-full border border-cyan-400/20 bg-cyan-400/8 animate-float-reverse',
  'left-[26%] bottom-8 h-16 w-16 rounded-full bg-brand-400/12 blur-sm animate-float-slow',
  'right-[22%] bottom-20 h-12 w-12 rounded-2xl border border-brand-400/16 bg-brand-400/8 animate-float-reverse',
]

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <div key={shape} className={`absolute ${shape}`} />
      ))}
    </div>
  )
}

export default FloatingShapes
