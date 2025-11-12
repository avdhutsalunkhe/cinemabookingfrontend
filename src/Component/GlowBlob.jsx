import React from 'react'

const GlowBlob = ({ x = 'left-[10%]', y = 'top-[20%]', size = 'w-48 h-48', color = '' }) => {
  // रंगासाठी index.css मधील custom class वापरली आहे: bg-[var(--color-glow)]
  return (
    <div
      className={`absolute ${x} ${y} ${size} rounded-full blur-3xl animate-pulse z-[-10] bg-[var(--color-glow)/10] ${color}`}
    ></div>
  )
}

export default GlowBlob
