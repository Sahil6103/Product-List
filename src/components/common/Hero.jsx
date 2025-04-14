import React from 'react'
import { heroImg } from '../../assets'

export const Hero = () => {
    return (
        <div className="bg-[#F4E8F3] flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 pt-6 md:pt-0 md:px-12 lg:px-28 lg:h-[287px]">
            <div className="flex flex-col justify-center items-center md:items-start gap-10 px-8">
                <span className='text-[34px] text-light-blue leading-[41.15px] font-bold text-center md:text-start md:w-96'>Grab Upto 50% Off On
                    Selected Headphone</span>
                <button className='bg-light-blue text-white rounded-full w-[136px] h-[49px]'>Buy Now</button>
            </div>
            <div className="flex justify-center items-center lg:self-end lg:me-16">
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}
