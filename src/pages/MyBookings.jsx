import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../Component/Loading'
import BlurCircle from '../Component/BlurCircle'
import GlowBlob from '../Component/GlowBlob'
// import FloatingParticles from '../Component/FloatingParticles' // Optional
import isoTimeFormat from '../lib/isoTimeFormat'
import dateFormat from '../lib/dateFormat' // ✅ Default import

// 404 (Not Found) त्रुटी का येते?
// ही त्रुटी साधारणपणे तेव्हा येते जेव्हा तुमचा ब्राउझर एखाद्या फाईल किंवा API endpoint ला विनंती करतो आणि सर्व्हरकडे ती फाईल किंवा resource उपलब्ध नसते.
// उदाहरणार्थ, जर <img src={item.show.movie.poster_path} ... /> मध्ये दिलेला poster_path चुकीचा असेल किंवा ती फाईल/public directory मध्ये नसेल, तर 404 error येऊ शकते.
// तसेच, जर API call करत असाल आणि URL चुकीचा असेल किंवा resource अस्तित्वात नसेल, तरीही 404 error येते.
// dummyBookingData वापरत असल्याने सध्या ही त्रुटी बहुतेक image path किंवा assets मध्ये चुकीच्या path मुळे येत असावी.

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [booking, setBooking] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = async () => {
    setBooking(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(() => {
    getMyBookings()
  }, [])

  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>

      {/* Background Visuals */}
      <BlurCircle top='100px' left='100px' />
      <div>
        <BlurCircle bottom='0px' left='900px' />
        <GlowBlob x='left-[900px]' y='top-[0px]' />
        {/* <FloatingParticles count={15} /> */}
      </div>

      {/* Header */}
      <h1 className='text-lg font-semibold mb-4'>MY Bookings</h1>

      {/* Booking List */}
      {booking.length === 0 ? (
        <p className='text-sm text-gray-400'>No bookings found.</p>
      ) : (
        booking.map((item, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl'
          >
            <div className='flex flex-col md:flex-row'>
              <img
                src={item.show.movie.poster_path}
                alt={`${item.show.movie.title} Poster`}
                className='md:max-w-45 aspect-video h-auto object-cover object-bottom rounded'
                onError={(e) => {
                  // जर image सापडली नाही (404), तर default placeholder दाखवा
                  e.target.onerror = null;
                  e.target.src = '/default-poster.png';
                }}
              />
              <div className='flex flex-col p-4'>
                <p className='text-lg font-semibold'>{item.show.movie.title}</p>
                <p className='text-gray-400 text-sm'>{isoTimeFormat(item.show.movie.runtime)}</p>
                <p className='text-gray-400 text-sm mt-auto'>
                  {dateFormat(item.show.showDateTime)}
                </p>
              </div>
            </div>
            <div className='flex flex-col md:items-end md:text-right justify-between
p-4'>
<div className='flex items-center gap-4'>
<p className='text-2xl font-semibold mb-3'>{currency}{item.amount}</p>
{!item.isPaid && <button className='bg-primary px-4 py-1.5 mb-3
text-sm rounded-full font-medium cursor-pointer'>Pay Now</button>}
</div>
<div className='text-sm'>
<p><span className='text-gray-400'>Total Tickets:</span> {item.
bookedSeats.length}</p>
<p><span className='text-gray-400'>Seat Number:</span> {item.
bookedSeats.join(" , ")}</p>
</div>
</div> 

          </div>
        ))
      )}
      
    </div>
  ) : (
    <Loading />
  )
}

export default MyBookings
