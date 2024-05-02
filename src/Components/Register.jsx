import React from 'react'
import '../Assets/CSS/Home.css'
import RegisImg from '../Assets/Images/register.png'
import UserImg from '../Assets/Images/user.png'
import Footer from './Home/Footer'


const Register = () => {
  return (
    <>
      <div className='container'>


        <div className='Mainform  d-flex text-center  justify-content-center'>
          <div className='LoginImg'>
            <img src={RegisImg} alt="" />
          </div>
          <div className='LoginForm'>

            {/* <div className="form "> */}

            <div className='FormInp'>
              <div className="Userimg ">
                <img src={UserImg} alt="" />

              </div>
              <div className='m-2'>
                <h2>Login</h2>
                <div className='mb-2 '>
                  <input className='loginInput' type="email" placeholder='Username' />
                </div>
                <div className='mb-2 '>
                  <input className='loginInput' type="email" placeholder='Email' />
                </div>
                <div className='mb-2'>
                  <input className='loginInput' type="taxt" placeholder='Password' />
                </div>
                <div className='mb-2 '>
                  <button className='btn btn-dark w-100 p-2 fw-bolder'>Register </button>
                </div>
                <div className='mb-4'>
                  <p>Dont have an account ?<span className='fw-bolder'>Login</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register
