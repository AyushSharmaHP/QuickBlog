import React from 'react'
import { assets } from '../assets/assets.js'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'> 
      <div className='text-center mt-20 mb-8'>
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
          <p>New: AI feature Integrated</p>
          <img src={assets.star_icon} className='w-2.5' alt="star icon" />  
        </div>

        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>
    YOUR  VERY OWN <span className='text-primary'> BLOGGING </span> <br /> PLATFORM
        </h1>
        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>
          Create, share, and connect with your audience effortlessly.</p>
          <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'><input type="text" placeholder='Search for Blogs' required className='w-full pl-4 outline-none'/>  
          <button type='Submit'className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
          </form>
      </div>
      

      <img src={assets.gradientBackground} alt="background gradient" className='absolute -top-12 -z-10 opacity-50' />
    </div>
  )
}

export default Header
