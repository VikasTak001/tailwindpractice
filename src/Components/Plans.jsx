import React from 'react'
import SinglePlan from './Single-Plan'
import img1 from '../assets/img/single.png'
import img2 from '../assets/img/double.png'
import img3 from '../assets/img/triple.png'


export default function Plans() {
    return (
        <div className='py-[100px] max-w-[1240px] items-center mx-auto xl:flex justify-center gap-[55px] xl:gap-[25px] flex-wrap xl:flex-nowrap'>
            <SinglePlan img={img1} background='bg-white h-[max-content]' title={'Web Development'} price="149" btncolor="bg-[#02cc8c] text-[black]"/>
            <SinglePlan img={img2} background='bg-[#f2f4f5] h-[520px]' title={'Digital Marketing'} price="149" btncolor="bg-[#02cc8c] text-[black]"/>
            <SinglePlan img={img3} background='bg-white h-[max-content]' title={'App Development'} price="149" btncolor="bg-[#02cc8c] text-[black]"/>
        </div>
    )
}
