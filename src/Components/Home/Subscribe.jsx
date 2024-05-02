import React from 'react'
import '../../Assets/CSS/Home.css'

import SubMale from '../../Assets/Images/male-tourist.png'

const Subscribe = () => {
  return (
    <>
        {/* Subscribe Section */}
        <div className="container-fluid mt-4">
                <div className='SubBox row p-4'>
                    <div className='col-md-6 SubContent mt-5'>
                        <h1>Subscribe now for useful travelling information</h1>
                        <div className="SearchInput d-flex mt-5 mb-5">
                            <input type="text" placeholder='Enter your email ' />
                            <button>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui veritatis quaerat exercitationem.</p>
                    </div>
                    <div className='col-md-6 SubImg'>
                        <img src={SubMale} alt="" />
                    </div>
                </div>

            </div>
    </>
  )
}

export default Subscribe
