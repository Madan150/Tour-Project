import React from 'react'
import HeroImg1 from '../../Assets/Images/hero-img01.jpg'
import HeroVdo from '../../Assets/Images/hero-video.mp4'
import HeroImg2 from '../../Assets/Images/hero-img02.jpg'
import worldImg from '../../Assets/Images/world.png'
import weatherPng from '../../Assets/Images/weather.png'
import guidePng from '../../Assets/Images/guide.png'
import Custompng from '../../Assets/Images/customization.png'

import '../../Assets/CSS/Home.css'
import SearchBar from './SearchBar'
const Herosection = () => {

    return (
        <>
            <div className='mt-3 container'>
                <div className=" MainHero row justify-content-between align-center">
                    <div className='Content col-md-6'>
                        <p className='Content_p'><span className='cont'>Know before you go </span><img src={worldImg} alt="" /></p>
                        <h2>Travelling opens the doors to creating <span id='memories'>memories</span> </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor sequi ea ad. Deleniti provident, qui, praesentium sit illum dolorem suscipit nostrum vel quae aut totam sint corporis nobis tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eius

                        </p>
                    </div>
                    <div className="DemoImages col-md-6 ">
                        <img src={HeroImg1} alt="" />
                        <video controls className='mt-3'><source src={HeroVdo} type='video/mp4' /></video>
                        <img src={HeroImg2} alt="" className='mt-5 img_3' />
                    </div>
                </div>
            </div>
           <SearchBar/>
            {/* services section */}
            <div className='container mt-5'>
                <div className="Services  row">
                    <div className="col">
                        <p className='cont1 '>What we serve</p>
                        <h3>We offer our best service</h3>
                    </div>
                    <div className="slot col">
                        <img className='slot_Icon mt-4 mb-4' src={weatherPng}  alt="" />
                        {/* <span className='slot_Icon'><i class="fa-solid fa-cloud-sun-rain fa-2xl"></i></span> */}
                        <h6>Calculate weather</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nemo voluptatum culpa rem, magni dolorem.</p>

                    </div>
                    <div className="slot col">
                    <img className='slot_Icon mt-4 mb-4' src={guidePng}  alt="" />

                        {/* <span className='slot_Icon'><i class="fa-solid fa-route fa-2xl"></i></span> */}
                        <h6>Best tour guide</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis libero ullam harum.</p>

                    </div>
                    <div className="slot col">
                    <img className='slot_Icon mt-4 mb-4' src={Custompng}  alt="" />

                        {/* <span className='slot_Icon'><i class="fa-solid fa-gear fa-2xl"></i></span> */}
                        <h6>Customization</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam nam voluptate voluptatem!</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection
