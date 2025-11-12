const WavyBackdrop = () => {
	return (
	  <div
		className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-br from-red-400 to-blue-400 opacity-30 z-[-20] rounded-b-[30%]"
		style={{
		  clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)',
		  animation: 'waveMove 6s ease-in-out infinite',
		}}
	  ></div>
	)
  }
  export default WavyBackdrop;