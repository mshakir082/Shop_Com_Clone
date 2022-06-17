import React from 'react'
import Navbar from '../Components/Navbar'
import LearnMore from '../Components/LearnMore'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'
import { Miracle } from '../Components/Miracle'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <LearnMore/>
      <Slider/>
      <Miracle/>
      <Footer/>
    </div>
  )
}

export default Home
