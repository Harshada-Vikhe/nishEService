import React from 'react'
import {serviceData} from '../utils/consultancyData'

const Services = () => {
  return (
    <div className='max-h-full mt-7 mb-24 '>
        <h2 className='text-3xl  font-bold text-center tracking-wide'>Consultancy</h2>
        
        <div className='flex flex-wrap justify-center gap-1 mt-6 '>
          {serviceData.map((data)=>(
            <div key={data.title} className='flex flex-col mx-4  items-center gap-3 p-4 h-[400] w-80 shadow border rounded-lg '>
            <img src={data.img} alt='Driving License' 
             className='h-72 w-72  rounded-lg'
            />
            <div className='text-center'>
            <span className='text-2xl font-semibold '>{data.title}</span>
            <p className='text-lg mt-2 ' >{data.desc}</p>
            </div>
        </div>
        ))
        }
</div>

       
        
        <div className="flex-grow flex items-end justify-center">
        <a href='tel:+918484816484' className="mt-6  bg-green-400  text-lg font-medium py-2 px-6 rounded-xl hover:bg-green-600 cursor-pointer">call Us</a>
        </div>
    </div>
  )
}

export default Services