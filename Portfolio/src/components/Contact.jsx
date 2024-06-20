import React from 'react'
import pic from './thumbnail_df07820e-816f-42a5-a8eb-f618adac04c3.jpg'

const Contact = () => {
  return (
    <div id='contact' className=' max-w-[1400px] m-auto md:pl-4 py-16 bg-black'  >
        <h1 className='py-4 pb-10 text-4xl font-bold text-center text-gray-400 '>Contact</h1>
        <img className='w-1/2 h-screen pl-20' src={pic} alt='pic' />
        <div className='flex pl-16 left-1/2 mt-28 ml-60 translate-x-96 -translate-y-full '>
        <form action='https://getform.io/f/zazkogqb' method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2 font-bold'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-gray-400'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex bg-gray-400' type="text" name='name'/>
                </div>
                <div className='flex flex-col'> 
                    <label className='uppercase text-sm py-2 text-gray-400'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex bg-gray-400' type="text" name='phone' />
                </div>
            </div>    
               <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-gray-400 font-bold'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex bg-gray-400 font-bold' type="email" name='email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-gray-400 font-bold'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex bg-gray-400 font-bold' type="text" name='subject' />
                </div>
                <div className='flex flex-col py-2 '>
                    <label className='uppercase text-sm py-2 text-gray-400 font-bold'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 bg-gray-400 font-bold' rows='10' name='message'  />
                </div>
                <button className='bg-gray-400 font-bold mt-4 w-full p-4 rounded-lg border-2'>
                    Send Message!
                </button>
        </form>
        </div>
    </div>
  )
}

export default Contact