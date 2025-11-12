import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import MovieDetails from './pages/MovieDetails'
import Seatlayout from './pages/Seatlayout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
// import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'
import MyBookings from './pages/MyBookings'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import ListBooking from './pages/admin/ListBooking'
import Listshows from './pages/admin/Listshows'
// import AddShows from './pages/admin/AddShows.jsx'
import TheatersPage from './pages/TheatersPage'
import Releases from './pages/Releases'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />} 
        
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<Seatlayout />} />
        <Route path='/my-booking' element={<MyBookings />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/theater' element={<TheatersPage />} />
        <Route path='/recent' element={<Releases />} />
        
        <Route path="/admin" element={<Layout />}>
  <Route index element={<Dashboard />} /> {/* This is now the default for /admin */}
  <Route path="add-shows" element={<Addshows />} />
  <Route path="list-shows" element={<Listshows />} />
  <Route path="list-bookings" element={<ListBooking />} />
</Route>

      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
