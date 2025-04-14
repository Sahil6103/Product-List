import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <div className="px-5 md:px-11 lg:px-14 xl:px-20 mt-10">
                <hr className="border-[1.5px] w-full" />
            </div>
            <footer className="px-5 md:px-10 lg:px-14 xl:px-20 py-8 md:py-10 flex flex-wrap flex-col md:flex-row md:justify-between gap-10 text-[16px] font-poppins">
                <div className="flex flex-col gap-11 font-normal">
                    <div className="flex flex-col w-72 sm:mt-0 md:mt-16">
                        <span className="text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,</span>
                        <span className="text-[#9F9F9F]">FL 33134 USA</span>
                    </div>
                </div>
                <div className="flex flex-col gap-7 md:gap-11 font-medium md:px-5">
                    <span className="text-[#9F9F9F]">Links</span>
                    <Link>Home</Link>
                    <Link>Shop</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </div>

                <div className="flex flex-col gap-7 md:gap-11 font-medium md:px-5">
                    <span className="text-[#9F9F9F]">Help</span>
                    <Link>Payment Option</Link>
                    <Link>Returns</Link>
                    <Link>Privacy Policies</Link>
                </div>
                <div className="flex flex-col gap-7 md:gap-11">
                    <span className="text-[#9F9F9F]">Newsletter</span>
                    <div className="flex gap-3">
                        <input type="text" className="border-b-2 border-black text-sm md:w-52" placeholder="Enter Your Email Address" />
                        <button className="border-b-2 border-black font-medium">SUBSCRIBE</button>
                    </div>
                </div>
            </footer >
            <div className="px-5 md:px-11 lg:px-14 xl:px-20">
                <hr className="border-[1.5px] w-full" />
            </div>
            <span className="px-20 my-12 inline-block">2022 Meubel House. All rights reverved</span>
        </>
    );
};
