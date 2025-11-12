const FloatingParticles = ({ count = 10 }) => {
	return (
	  <>
		{Array.from({ length: count }).map((_, i) => {
		  const size = `${Math.random() * 8 + 4}px`
		  const top = `${Math.random() * 100}%`
		  const left = `${Math.random() * 100}%`
		  const delay = `${Math.random() * 3}s`
		  const duration = `${4 + Math.random() * 3}s`
  
		  return (
			<div
			  key={i}
			  className="absolute bg-white/20 rounded-full"
			  style={{
				width: size,
				height: size,
				top,
				left,
				animation: `floatY ${duration} ease-in-out infinite`,
				animationDelay: delay
			  }}
			></div>
		  )
		})}
	  </>
	)
  }
  
export default FloatingParticles