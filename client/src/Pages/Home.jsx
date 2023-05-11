import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Cards from '../assets/Cards/Cards'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Cards/>
      <Footer/>

    </div>
  )
}

export default Home