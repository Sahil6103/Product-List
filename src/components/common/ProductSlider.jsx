import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { AiFillStar, AiOutlineHeart, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import { heartIcon, productSample } from "../../assets";

const products = [
    { id: 1, img: `${productSample}`, name: "TDX Sinkers", price: 675, rating: 5, reviews: 121 },
    { id: 2, img: `${productSample}`, name: "TDX Sinkers", price: 675, rating: 5, reviews: 121 },
    { id: 3, img: `${productSample}`, name: "TDX Sinkers", price: 675, rating: 5, reviews: 121 },
    { id: 4, img: `${productSample}`, name: "TDX Sinkers", price: 675, rating: 5, reviews: 121 },
    { id: 5, img: `${productSample}`, name: "TDX Sinkers", price: 675, rating: 5, reviews: 121 },
    { id: 6, img: `${productSample}`, name: "TDX Sinkers", price: 675, rating: 5, reviews: 121 },
];

const ProductSlider = () => {
    return (
        <div className="p-4 relative mt-10">
            <h2 className="text-xl font-semibold mb-4">Similar Items You Might Also Like</h2>

            {/* Product Slider */}
            <div className="relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={{
                        nextEl: ".next-btn",
                        prevEl: ".prev-btn",
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="relative"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-gray-100 rounded-lg p-4 shadow-md relative">
                                <img src={product.img} alt={product.name} className="w-full h-32 object-contain mx-auto" />
                                <img src={heartIcon} alt="" className="absolute top-4 right-4 bg-[#FCFCFD] p-1 rounded-full cursor-pointer w-6 md:w-7" />
                                <h3 className="text-sm font-medium mt-2">{product.name}</h3>
                                <p className="text-lg font-bold text-gray-800">₹{product.price}.00</p>
                                <p className="text-xs text-gray-500">5 types of shoes available</p>
                                <div className="flex items-center text-yellow-500 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <AiFillStar key={i} />
                                    ))}
                                    <span className="text-gray-600 text-xs ml-1">({product.reviews})</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button className="prev-btn absolute z-10 top-1/2 -left-5 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full text-gray-600 hover:bg-gray-200">
                    <AiOutlineLeft size={20} />
                </button>
                <button className="next-btn absolute z-10 top-1/2 -right-5 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full text-gray-600 hover:bg-gray-200">
                    <AiOutlineRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default ProductSlider;
