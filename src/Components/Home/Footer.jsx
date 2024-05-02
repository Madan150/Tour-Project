import React from 'react'
import '../../Assets/CSS/Home.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
          
            {/* Website Details/Social media */}
            <div className="container-fluid mt-5">
                <div className='d-flex justify-content-between'>
                    <div className="mediaSec m-3">
                        <h4 className='mb-3'><i className="fa-solid fa-feather-pointed fa-2xl"></i> Booking Engine</h4>
                        <p className='mt-4 ps-3'>Lorem ipsum dolor sit amet <br/>consectetur adipisicing <br/>elit. Corporis, ab!</p>
                        <div className="media d-flex  justify-content-between mt-5">
                            <i class="fa-solid fa-user-gear fa-xl"></i>
                            <i class="fa-brands fa-github fa-xl"></i>
                            <i class="fa-brands fa-linkedin-in fa-xl"></i>
                            <i class="fa-brands fa-instagram fa-xl"></i>
                        </div>
                    </div>
                    <div className='discover'>
                        <h4 className='mb-4'>Discover</h4>
                        <div className='text-dark DisLinks'>
                           <h6 > <Link className='FooterLink' to='/'>Home</Link></h6>
                           <h6 ><Link className='FooterLink' to='/About'>About</Link></h6>
                           <h6 ><Link className='FooterLink' to='/Tour'>Tour</Link></h6>
                        </div>
                    </div>
                    <div className='QuickLinks'>
                        <h4 className='mb-4'>Quick Links</h4>
                        <h6 className='pb-3'>Galley </h6>
                        <h6 className='pb-3'>Login</h6>
                        <h6 className='pb-3'>Register</h6>
                    </div>
                    <div className='Contact'>
                        <h4 className='mb-4'>Contact</h4>
                        <div className="details">
                            <p><span className='me-2'><i class="fa-solid fa-location-dot fa-lg"></i></span><span className='fs-5 fw-medium'>Address:</span>Banglore ,Karnataka</p>
                            <p><span className='me-2'><i class="fa-regular fa-envelope fa-lg"></i></span><span className='fs-5 fw-medium'>Email:</span>madan123@gmail.com</p>
                            <p><span className='me-2'><i class="fa-solid fa-phone fa-lg"></i></span><span className='fs-5 fw-medium'>Phone:</span>+91 9834672918</p>
                        </div>
                    </div>
                </div>
                <div className='desiner text-center pt-4'>
                    <p >Copyrights 2024 ,desined and developes by Madan S.All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer
