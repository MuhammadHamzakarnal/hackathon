import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Featured from './components/Featured'
import Gear from './components/Gear'
import Miss from './components/Miss'
import Essentials from './components/Essentials'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <Featured/>
      <Gear/>
      <Miss/>
      <Essentials/>
      <Footer/>
    </div>
  )
}

export default page