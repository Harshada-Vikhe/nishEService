import React from 'react'

const BlogCard = ({img,title,desc}) => {
    
  return (
    <div className='flex'>
    <div className='flex flex-col p-4 gap-4 h-96 mt-14 w-96 mx-auto shadow border rounded-lg hover:shadow-xl hover:border-gray-500'>
        <img src={img} alt='blog' className='rounded-xl'/>
        <span className='text-xl font-semibold'>{title}</span>
        <p className='text-base'>{desc}</p>
    </div>
    </div>
  )
}

export default BlogCard