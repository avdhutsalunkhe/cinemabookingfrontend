const FlickerLight = ({ x = 'left-[60%]', y = 'top-[30%]', size = 'w-40 h-40', color = 'border-fuchsia-500' }) => {
	return (
	  <div
		className={`absolute ${x} ${y} ${size} border-2 ${color} rounded-full shadow-[0_0_30px_rgba(255,0,255,0.7)] z-[-10]`}
		style={{
		  animation: 'flicker 2s infinite alternate',
		  animationTimingFunction: 'ease-in-out',
		}}
	  ></div>
	)
  }
  