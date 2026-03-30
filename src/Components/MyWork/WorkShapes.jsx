const shapes = [
  'left-6 top-6 h-16 w-16 rounded-full border border-white/8 bg-white/[0.03] animate-float-slow',
  'right-8 top-10 h-14 w-14 rounded-[1.2rem] border border-brand-400/20 bg-brand-400/10 animate-float-reverse',
  'right-[22%] bottom-16 h-10 w-10 rounded-full bg-cyan-400/10 blur-sm animate-float-slow',
]

function WorkShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <div key={shape} className={`absolute ${shape}`} />
      ))}
    </div>
  )
}

export default WorkShapes
