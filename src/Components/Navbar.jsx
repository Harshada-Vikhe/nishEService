import React, { useState } from 'react'
import logo_img from '../assets/logo.avif'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='flex justify-start items-center space-x-64'>
        <div>
            <img src={logo_img} alt='NisheService'
            className='h-16 m-4 ml-6'
            />
        </div> 
        <nav className='mr-2 w-[40%] list-none flex gap-10 text-lg font-[500] '>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <div className='mr-12'>
          <Link to="/login"><button>Login</button></Link>
        </div>
    </div>
  )
}

export default Navbar