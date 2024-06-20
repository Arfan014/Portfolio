import React from 'react';
import M8 from '../components/M8.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Main = () => {
  return (
    <div className="relative" id="main">
        <img className='w-full h-screen' src={M8} alt="BMW-M8" />
        <div className='w-full h-screen absolute top-0 left-0 bg-black/50'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-400'>Mohammed Arfan Anwar</h1>
            <h2 className='flex sm:text-3xl text-2xl font-bold pt-4 text-gray-400'>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000, 
                  "Coder",
                  2000,
                  "Car Enthusiast",
                  2000,
                ]}
                wrapper='div'
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '5px', }}
                />
            </h2>
            <div className='flex justify-center space-x-40 pt-6 w-full text-gray-400'>
                <a href='https://github.com/Arfan014' target='_blank'>
                  <FaGithub className='cursor-pointer' size={40}  />
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/arfan-anwar-99b54a298?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPsdXZh6DTBWkwba82mpCug%3D%3D'>
                <FaLinkedin className='cursor-pointer' size={40} />  
                </a>
            </div>
        </div>
    </div>
  )
}

export default Main