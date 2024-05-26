import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-start min-h-full py-8 '>
       <div className='max-w-lg w-full bg-white rounded-lg shadow-lg flex'>
       
        <div className="w-10/12 p-8 mx-5">
        
        <form className=' '>
        <label for="name" className='label-style'>Name</label>
        <input type='text' id='name' placeholder='Enter name' className='input-style'/>
        <label for="email" className='label-style'>Email</label>
        <input type='email'id='email' placeholder='Enter Email' className='input-style'/>
        <label for="phone" className='label-style'>Phone Number</label>
        <input type='text' id='phone'placeholder='Enter Phone Number' className='input-style'/>
        <label for="city" className='label-style'>City</label>
        <input type='text' id='city'placeholder='Enter City Name' className='input-style'/>
        <label for="message" className='label-style'>Message</label>
        <textarea id='message' rows={4}  placeholder='Enter Your Message' className='input-style'></textarea>
        <button className='bg-gray-200 w-full p-2 font-medium text-lg rounded-lg'>Submit</button>
        </form>
        </div>
        </div>
      

        <div class="w-[40%] p-8 bg-gray-100 rounded-r-lg ml-28 mt-5">
        <h2 class="text-2xl font-semibold ">Connect with Us</h2>
        <p className='mb-6'>Need help? Contact us for assistance</p>
        <ul class="space-y-9">
          <li class="flex  flex-col items-start">
            <span className='text-red-500 mb-1 flex gap-1 font-semibold' ><ion-icon name="mail" ></ion-icon>Email US</span>
          <p><a href='mailto:owner@nisheservice.com'>owner@nisheservice.com</a></p>
          </li>
          <li class="flex  flex-col items-start">
          <span className='text-red-500 mb-1 flex gap-1 font-semibold'><ion-icon name="call"></ion-icon>Booking</span>
          <p><a href='tel:+918484816484'>+918484816484</a></p>
          <p>Monday to sunday- 9:30 AM to 6:00 PM</p>
          </li>
          <li class="flex flex-col items-start">
          <span>Email US</span>
          <p>info@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact