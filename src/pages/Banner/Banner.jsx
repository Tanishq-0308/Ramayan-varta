import React from 'react'
import banner from '../../assets/banner.png'

function Banner() {
  return (
    <div className='  flex justify-center items-center mt-7 mb-7'>
        <img src={banner} alt="" className='w-[800px] h-auto' />
    </div>
  )
}

export default Banner