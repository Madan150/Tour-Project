import React from 'react'
import '../Assets/CSS/Home.css'
import loginImg from '../Assets/Images/login.png'
import UserImg from '../Assets/Images/user.png'
import Footer from './Home/Footer'

const Login = () => {
  return (
    <>
      <div className='container'>


        <div className='Mainform  d-flex text-center  justify-content-center'>
          <div className='LoginImg'>
            <img src={loginImg} alt="" />
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
                  <input className='loginInput' type="email" placeholder='Email' />
                </div>
                <div className='mb-2'>
                  <input className='loginInput' type="taxt" placeholder='Password' />
                </div>
                <div className='mb-2 '>
                  <button className='btn btn-dark w-100 p-2 fw-bolder'>Login </button>
                </div>
                <div>
                  <p>Dont have an account ?<span className='fw-bolder'>Register</span></p>
                </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
      </div>
      <Footer/>
      </>
      )
}

      export default Login
