import React from 'react'
import Card2 from './Card2'
import Card1 from './Card1'

const Skills = () => {
  return (
    <div id='skills'>
        <div className='m-auto md:pl-20 p-4 py-16 bg-black'>
        <h1 className='text-4xl font-bold text-center text-gray-400'>Skills</h1>'
      <div className='grid sm:grid-cols-2 gap-12'>
            <Card1/>
            <Card2/>
        </div>
      </div>
    </div>
  )
}

export default Skills