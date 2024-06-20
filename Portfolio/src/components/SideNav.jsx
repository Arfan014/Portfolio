import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";


const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute cursor-pointer top-4 right-4 z-[99] md:hidden bg-gradient-to-b from-emerald-600 to-emerald-950 via-emerald-800" />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-emerald-950/50 flex flex-col justify-center items-center z-20'>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-b from-emerald-600 to-emerald-950 via-emerald-800 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-b from-emerald-600 to-emerald-950 via-emerald-800 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <VscTools size={20} />
                            <span className='pl-4'>Skills</span>
                        </a>
                        <a href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-b from-emerald-600 to-emerald-950 via-emerald-800 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-b from-emerald-600 to-emerald-950 via-emerald-800 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                )
                    : (
                        ''
                    )
            }
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col ">
                    <a href="#main" className="rounded-full shadow-lg bg-gradient-to-b from-emerald-600 to-emerald-950 via-emerald-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href="#skills" className="rounded-full shadow-lg bg-gradient-to-b from-emerald-600 to-emerald-950 via-emerald-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <VscTools size={20}/>
                    </a>
                    <a href="#projects" className="rounded-full shadow-lg bg-gradient-to-b from-emerald-600 to-emerald-950 via-emerald-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <GrProjects size={20}/>
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gradient-to-b from-emerald-600 to-emerald-950 via-emerald-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav