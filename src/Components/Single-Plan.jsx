import React from 'react'

export default function SinglePlan({img,background,title,price,btncolor}) {
    return (
        <div className={`shadow-xl rounded-lg p-[50px] items-center align-middle relative border flex flex-col w-[90%] md:w-max mx-auto my-[50px] hover:scale-105 duration-300 ${background} `}>
            <img src={img} alt="" width='70px' className='absolute top-0 translate-y-[-60%]' />
            <div className="text-2xl font-bold">{title}</div>
            <div className="text-4xl font-bold my-[40px]">${price}</div>
            <div className="py-2 border-b-2 w-full text-center font-[500]">Lorem ipsum, dolor sit </div>
            <div className="py-2 border-b-2 w-full text-center font-[500]">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </div>
            <div className="py-2 border-b-2 w-full text-center font-[500]">Lorem ipsum dolor sit amet</div>
            <button className={`px-[50px] py-2 ${btncolor} rounded font-[500] mt-5`}>Start Trial</button>
        </div>
    )
}
