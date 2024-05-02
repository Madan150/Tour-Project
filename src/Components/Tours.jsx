import React from 'react'
import '../Assets/CSS/Home.css'
import Banner from '../Assets/Images/tour.jpg'
import SearchBar from './Home/SearchBar'
import Subscribe from './Home/Subscribe'
import Footer from './Home/Footer'
const Tours = () => {
  return (
    <>
      <div>
        <div className="banner" style={{ backgroundImage: `url(${Banner})`, backgroundPosition: 'center', minHeight: '60vh' }}>
          <h1 className='text-center bannerText text-light fw-bolder'>ALL TOURS</h1>
        </div>
        {/*  */}
        <div className="TourPlaces">

        </div>
        <SearchBar />
        <Subscribe />
        <Footer />
      </div>

    </>
  )
}

export default Tours
