import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
    return (
        <div className='bg-[#2699fb] w-full py-[100px]'>
            <div className="max-w-[1240px] font-bold my-[100px] mx-auto text-center">
                <div className="md:text-3xl text-2xl p-[24px]">
                    Learn with us
                </div>
                <h2 className="text-white  md:text-[80px] text-5xl p-[24px]">
                    Grow with us.
                </h2>
                <div className="text-white md:text-[50px] text-[30px] p-[24px]">
                    Learn
                    <ReactTyped className='pl-3' strings={["Web Development", "Digital Marketing", "Ethical Hacking"]} typeSpeed={100} loop={true} backSpeed={120} />
                </div>
            <button className='bg-black text-white py-3 px-[100px] rounded-lg font-normal'>Get Started</button>
            </div>
        </div>
    )
}
