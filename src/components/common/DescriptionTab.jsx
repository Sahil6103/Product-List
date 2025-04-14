import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";

const DescriptionTab = ({ productDesc }) => {
    return (
        <div className='mt-8'>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#344054]">Product Description</h2>
            <p className="text-gray-700 mb-4 text-sm md:text-md">
                {productDesc}
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#344054]">Benefits</h3>
            <ul className="space-y-2">
                {[
                    "Durable leather is easily cleanable so you can keep your look fresh.",
                    "Water-repellent finish and internal membrane help keep your feet dry.",
                    "Toe piece with star pattern adds durability.",
                    "Synthetic insulation helps keep you warm.",
                    "Originally designed for performance hoops, the Air unit delivers lightweight cushioning.",
                    "Plush tongue wraps over the ankle to help keep out the moisture and cold.",
                    "Rubber outsole with aggressive traction pattern adds durable grip.",
                ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm md:text-md">
                        <AiFillCheckCircle className="text-blue-600 mr-2" />
                        {benefit}
                    </li>
                ))}
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-[#344054]">Product Details</h3>
            <ul className="space-y-2">
                {[
                    "Not intended for use as Personal Protective Equipment (PPE).",
                    "Water-repellent finish and internal membrane help keep your feet dry.",
                ].map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm md:text-md">
                        <AiFillCheckCircle className="text-blue-600 mr-2" />
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DescriptionTab