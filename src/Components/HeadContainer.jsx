import React from 'react'
import consultancy_img  from '../assets/consultancy_img.avif'


const HeadContainer = () => {
  return (
    <div className='px-4 mt-9 max-w-screen-xl mx-auto h-screen'>
      <div className='flex flex-col lg:flex-row mx-2 gap-8 pt-12 items-center lg:items-start lg:basis-2/3'>
        <div className=''>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold !leading-snug '>Your Trusted Consultancy Service</h1>
            <p className='mt-3 text-lg !leading-relaxed false  '>Providing expert guidance for driving <span className='font-semibold'>license , passports </span> ,and <span className='font-semibold'>insurance policies</span> .
                Collaborating with <span className='font-semibold'>60+ </span>driving schools and <span className='font-semibold'>25+</span> insurance companies.
            </p>
        </div>
        <div className='-ml-4 ' >
            <img src={consultancy_img} alt='consultany'
            className='h-[220px] w-[200px] md:h-[300px] md:w-[500px] lg:h-[370px] lg:w-[600px]  rounded-lg'
            />
        </div>
        </div>
    </div>
  )
}

export default HeadContainer