import React from 'react'
import  {aboutData}  from '../utils/consultancyData'

const About = () => {
  return (
    <div className='h-screen mt-7'>
      <div className='flex flex-col gap-8 items-center'>
             <span className='text-3xl font-bold text-center tracking-wide'>About Us</span>
            <p className='mx-14 text-lg'>{aboutData.desc}</p>
            <img src={aboutData.img} alt='img'
            className='h-96  w-2/4 rounded-xl'
            />
          
         
         
      </div>
    </div>
  )
}

export default About