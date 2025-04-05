import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-[#2699fb] p-4 sticky shadow-xl top-0 z-50'>
            <div className="flex justify-between items-center py-[12px] max-w-[1240px] mx-auto">
                <div className="text-3xl font-bold">
                    WsCube Tech
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                }
                <ul className='hidden md:flex text-white gap-5'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Home</li>
                    <li>Resources</li>
                    <li>Contect</li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`md:hidden w-full h-screen fixed bg-black ${toggle ? 'left-0' : 'left-[-100%]'} duration-300 top-[92px] text-white gap-5`}>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Company</li>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Resources</li>
                    <li className='p-5'>Contect</li>
                </ul>
            </div>
        </div>
    )
}
