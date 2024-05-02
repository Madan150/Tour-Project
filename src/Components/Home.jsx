import React from 'react'
import Herosection from './Home/Herosection'
import Features from './Home/Features'
import Experience from './Home/Experience'
import Gallery from './Home/Gallery'
import ClientsSlider from './Home/Slider'
import Footer from './Home/Footer'
import Subscribe from './Home/Subscribe'

const Home = () => {
  return (
    <div >
      <Herosection />
      <Features />
      <Experience />
      <Gallery />
      
      <ClientsSlider />
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home
