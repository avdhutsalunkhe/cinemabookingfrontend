import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const adminNavbar = () => {
  return (
	<div className="w-full h-16 flex items-center px-6  border-b border-gray-300/20 shadow-sm">
		<Link to="/" className="flex items-center">
			<img src={assets.logo} alt="logo" className="h-10 w-auto object-contain" />
		</Link>
	</div>
  )
}

export default adminNavbar