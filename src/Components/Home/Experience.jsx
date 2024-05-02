import React from 'react'
import '../../Assets/CSS/Home.css'
import experience from '../../Assets/Images/experience.png'
const Experience = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className=' row d-flex justify-content-around'>
                    <div className='col-md-6'>
                        <div className="Experience ">
                            <p><span className='cont rounded-pill p-1 '>Experience</span></p>
                            <h3>With our all Experience we will serve you</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi aliquid animi numquam voluptate.</p>
                            <div className='row'>
                                <div className="Exp_box col text-center">
                                    <h6 className='Numcount'><span>12K+</span></h6>
                                    <p>Successfull trips</p>
                                </div>
                                <div className="Exp_box col text-center">
                                    <h6 className='Numcount'><span>2K+</span></h6>
                                    <p>Regular clints</p>
                                </div>
                                <div className="Exp_box col text-center">
                                    <h6 className='Numcount YearsExp'><span>15</span></h6>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 Exp_img'>
                        <div className='Experience_img '>
                            <img src={experience} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
