import React from 'react'
import laptop from "../assets/img/laptop.jpg";

export default function Experts() {
    return (
        <div className='max-w-[1240px] mx-auto py-[100px] md:grid p-5 grid-cols-2'>
            <div className="col-span-1 md:w-[80%]">
                <img src={laptop} alt="" />
            </div>
            <div className="col-span-1 flex flex-col justify-center gap-2">
                <h1 className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</h1>
                <p className='mt-1 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi dolorem dolore laudantium delectus, reprehenderit voluptatibus.
                    Esse aspernatur praesentium fuga illum reiciendis alias vel.
                    Minima enim consequatur asperiores delectus voluptas necessitatibus.
                </p>
                <button className='bg-black w-[max-content] text-white py-2 px-[50px] rounded '>Get Started</button>
            </div>
        </div>
    )
}
