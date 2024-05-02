
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container d-flex justify-content-around">
                    <div>
                    <Link className="navbar-brand"><i className="fa-solid fa-feather-pointed fa-2xl"></i>Booking Engine</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        </div>
                    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 ms-auto mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link" aria-current="page" >Home</Link>

                            </li>
                            <li className="nav-item">
                                <Link to='/Tour' className="nav-link" >Tour</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Login' className="nav-link" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Register' className="nav-link" >Register</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
