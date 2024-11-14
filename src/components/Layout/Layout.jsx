import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import  ScrollToTopButton from './ScrollToTopButton'
import ScrollProgress from './ScrollProgress'

export default function Layout({user , setUser}) {
  let navigate = useNavigate()
  function logout(){
    localStorage.removeItem('token')
    setUser(null)
    navigate('/Login')
  }
  return (
   <div >
   <Navbar user={user} logout={logout} />
   <ScrollToTopButton />
   <div className="">
   <div className="">
<Outlet></Outlet></div></div>
<ScrollProgress />
   <Footer />
   </div>
  )
}
