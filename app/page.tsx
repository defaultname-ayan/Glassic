import React from 'react'
import Home from './Pages/Home'
import { Features } from './Pages/Features'
import Working from './Pages/Working'
// import Navbar1 from './components/Navbar1'
import GlassicNavbar from './components/NewNav'
import Application from './Pages/Application'



const page = () => {
  return (
    <div >
      <GlassicNavbar />
        <Home />
        <Features />
        <Working />
        <Application />
        
    </div>
  )
}

export default page