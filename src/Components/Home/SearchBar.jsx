import React from 'react'
import '../../Assets/CSS/Home.css'
const SearchBar = () => {
    return (
        <>
            {/* search section */}
            <div className="SearchLocation container d-flex ms-5 mt-5 mb-5">
                <div className="Icon_Search  border-2 border-end ">
                    <span className='text-danger'><i class="fa-solid fa-location-dot"></i></span><span className='ms-3'>Location</span>
                    <div>
                        <input className='border-0 SearchIn' type="text" placeholder='Where are you going?' />
                    </div>
                </div>
                <div className="Icon_Search  border-2 border-end ms-3">
                    <span className='text-danger'> <i class="fa-regular fa-compass"></i></span><span className='ms-3'>Distance</span>
                    <div>
                        <input className='border-0 SearchIn' type="text" placeholder='Distance k/m' />
                    </div>
                </div>
                <div className="Icon_Search  border-2 border-end ms-3">
                    <span className='text-danger'><i class="fa-solid fa-user-group"></i></span><span className='ms-3'>Max-People</span>

                    <div>
                        <input className='border-0 SearchIn' type="number" placeholder='' value='0' />
                    </div>
                </div>
                <div className='mt-3 ms-3 '>
                    <span className='Last_search p-2 rounded-5 text-light'><i className="fa-solid fa-magnifying-glass fa-xl"></i></span>
                </div>
            </div>
        </>
    )
}

export default SearchBar
