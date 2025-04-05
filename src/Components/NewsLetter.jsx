import React from 'react'

export default function NewsLetter() {
    return (
        <div className="w-full bg-[#2699fb]">
            <div className='max-w-[1240px] flex flex-wrap p-5 gap-5 md:justify-between mx-auto py-[50px]'>
                <div className="">
                    <h1 className='text-white text-[35px] font-bold'>
                        Want to Learn Letest I.T. Skills?
                    </h1>
                    <h2 className='text-white'>Sign up to our newsletter and stay up to date.</h2>
                </div>
                <div className="">
                    <div className="flex flex-wrap gap-3">
                        <input type="email" className='py-2 text-[16px] outline-none pr-5 pl-3 rounded w-[270px]' placeholder='Enter Email' />
                        <button className='bg-black py-2 text-white px-5 rounded font-normal'>Notify Me</button>
                    </div>
                    <div className='text-white text-[14px] mt-4'>We Care About The Protaction of Your Data.</div>
                    <div className='text-white text-[14px]'>Read Our <span className='text-blue-950'>Privacy Policy.</span></div>
                </div>
            </div>
        </div>
    )
}
