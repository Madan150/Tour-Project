import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Tours from '../Components/Tours'
import Login from '../Components/Login'
import Home from '../Components/Home'
import Register from '../Components/Register'
const Routing = () => {
    return (
        <div>
            <Routes>
                {/* <Route path='/' element={<Main/>} />    */}

                <Route path='/' element={<Home/>} />
                <Route path='/Tour' element={<Tours />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register/>} />


            </Routes>
        </div>
    )
}

export default Routing
