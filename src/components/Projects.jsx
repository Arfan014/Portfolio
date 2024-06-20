import React from 'react'
import ProjectItem from './ProjectItem'
import Toolbox from './Toolbox.png'
import Snake from './snake-game.png'
import more from './coming soon.png'


const Projects = () => {
  return (
    <div id="projects" className='max-w-[1400px] m-auto md:pl-20 p-4 py-16 bg-black'>
        <h1 className='text-4xl font-bold text-center text-gray-400'>Projects</h1>
        <p className='text-center py-8 text-gray-400'>Have a look at a few of my work below:</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img ={Toolbox} title='Toolbox Website' desc='HTML, CSS & JavaScript' href='https://arfan014.github.io/Toolbox'/>
            <ProjectItem img={Snake} title='Snake Game' desc='Python, Pygame' href='https://github.com/Arfan014/Snake.py' />
            <ProjectItem img={more}/>
        </div>
    </div>
    
  );
};

export default Projects