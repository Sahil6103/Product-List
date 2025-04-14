import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ReviewTab from "./common/ReviewTab";
import DescriptionTab from "./common/DescriptionTab";
import ProductSlider from "./common/ProductSlider";
import axios from "axios";
import {
  detailCartIcon,
  likeIcon,
  reviewIcon,
  saveIcon,
  shareIcon,
  starIcon,
  delivaryIcon,
  returnIcon,
} from "../assets";

export const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("beige");
  const [selectedSize, setSelectedSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const colors = [
    { name: "beige", hex: "#E8DFC4" },
    { name: "green", hex: "#C0CF78" },
    { name: "blue", hex: "#B2B4F0" },
    { name: "pink", hex: "#F8CCF2" },
    { name: "multi", hex: "linear-gradient(to top, #D4A190 50%, #A4B27D 50%)" },
  ];

  const sizes = ["Small", "Medium", "Large", "Extra Large", "XXL"];

  // scroll on top when componennt mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  // for getting specific product
  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  if (!product)
    return (
      <span className="flex justify-center items-center text-xl">
        Loading...
      </span>
    );

  return (
    <>
      <div className="px-5 md:px-10 lg:px-14 xl:px-20 py-8">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-20 ">
          <div className="w-full md:w-[580px] h-auto md:h-[690px] mx-auto lg:mx-0 ">
            <img
              src={product.image}
              alt="Product Image"
              className="w-full h-auto object-cover md:h-full rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-5 md:px-4">
            {/* Breadcrumb Navigation */}
            <nav
              className="hidden bg-[#EDF0F8] px-3 p-1 w-fit rounded-md md:flex"
              aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a
                    href="/"
                    className="flex items-center text-sm font-medium text-[#A3A9C2]">
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-300 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a
                      href="#"
                      className="ms-1 text-sm font-medium text-[#3A4980]">
                      Product Details
                    </a>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Product Title & like,save,share */}
            <div className="detail">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[#B9BBBF] font-normal text-sm">
                    {product.category}
                  </span>
                  <span className="text-2xl md:text-3xl font-semibold w-72">
                    {product.title}
                  </span>
                </div>
                <div className="flex md:justify-end items-center gap-3">
                  <div className="bg-[#FFF0F0] flex gap-1.5 py-1 px-2 text-sm md:text-md rounded-lg">
                    <img src={likeIcon} alt="" />
                    <span>109</span>
                  </div>
                  <div className="rounded-lg bg-[#EDF0F8] p-2">
                    <img src={saveIcon} alt="" />
                  </div>
                  <div className="rounded-lg bg-[#EDF0F8] p-2">
                    <img src={shareIcon} alt="" />
                  </div>
                </div>
              </div>

              <hr className="my-6" />

              {/* Price & Ratings */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-[#1D3354]">
                    ${product.price}
                  </span>
                  <span className="text-gray-400 line-through text-md md:text-lg">
                    ${product.price}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex justify-center items-center gap-2 bg-[#FDF1E6] text-[#D78B18] px-2 py-1 rounded-full text-[12px] md:text-sm font-semibold">
                      <img src={starIcon} alt="" className="w-3" />
                      <span>{product.rating.rate}</span>
                    </div>
                    <div className="flex justify-center items-center gap-2 bg-[#EEF2FF] text-[#4859B3] px-2 py-1 rounded-full text-[12px] md:text-sm font-semibold">
                      <img src={reviewIcon} alt="" className="w-3" />
                      <span>{product.rating.count} Reviews</span>
                    </div>
                  </div>
                  <div className="text-[12px] md:text-sm text-gray-500 mt-1">
                    <span className="text-green-600 font-semibold">93%</span> of
                    buyers recommend this.
                  </div>
                </div>
              </div>

              <hr className="my-6" />

              {/* Color Selection */}
              <div>
                <h3 className="text-sm text-gray-500 mb-2">Choose a Color</h3>
                <div className="flex flex-wrap items-center gap-3">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      className={`relative w-7 h-7 md:w-10 md:h-10 rounded-full flex justify-center items-center border-2 transition ${
                        selectedColor === color.name
                          ? "border-[#E8DFC4]"
                          : "border-transparent"
                      }`}
                      style={{ background: color.hex }}
                      onClick={() => setSelectedColor(color.name)}>
                      {selectedColor === color.name && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/10 rounded-full">
                          <FaCheck className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="my-6" />

              {/* Size Selection */}
              <div>
                <h3 className="text-sm text-gray-500 mb-2">Choose a Size</h3>
                <div className="flex flex-wrap items-center gap-3">
                  {sizes.map((size, index) => (
                    <label
                      key={index}
                      className={`flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 border rounded-lg text-sm cursor-pointer transition bg-gray-200 ${
                        selectedSize === size
                          ? "text-[#4859B3] font-semibold"
                          : " text-gray-500"
                      }`}>
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        className="w-3 h-3 md:w-4 md:h-4 accent-[#4859B3]"
                        checked={selectedSize === size}
                        onChange={() => setSelectedSize(size)}
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </div>

              <hr className="my-6" />

              {/* Quantity & Cart Button */}
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                <div className="flex items-center gap-3 w-full md:w-32 px-5 py-2 bg-[#F3F3F3] rounded-full justify-between">
                  <button
                    className="text-md text-[#3A4980] font-semibold"
                    onClick={decreaseQty}>
                    –
                  </button>
                  <span className="text-md font-bold text-[#3A4980]">
                    {quantity}
                  </span>
                  <button
                    className="text-md text-[#3A4980] font-semibold"
                    onClick={increaseQty}>
                    +
                  </button>
                </div>
                <button className="bg-light-blue flex items-center justify-center gap-3 px-6 py-3 font-semibold text-white rounded-full w-full md:w-auto">
                  <img src={detailCartIcon} alt="" />
                  Add to Cart
                </button>
              </div>

              <hr className="my-6" />

              {/* Delivery & Return Info */}
              <div className="border rounded-lg flex flex-col gap-3 px-4 py-3">
                <div className="flex items-start gap-3">
                  <img src={delivaryIcon} alt="" className="mt-1" />
                  <div className="flex flex-col">
                    <span className="font-bold text-text-blue text-[16px] md:text-[17px]">
                      Free Delivery
                    </span>
                    <Link
                      to="#"
                      className="underline text-[#726C6C] text-[12px] md:text-sm">
                      Enter your Postal code for Delivery Availability
                    </Link>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className="flex items-start gap-3">
                  <img src={returnIcon} alt="" className="mt-1" />
                  <div className="flex flex-col">
                    <span className="font-bold text-text-blue text-[16px] md:text-[17px]">
                      Return Delivery
                    </span>
                    <Link
                      to="#"
                      className="underline text-[#726C6C] text-[12px] md:text-sm">
                      Free 30 days Delivery Return. Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          {/* Tabs */}
          <div className="flex border-b border-gray-300">
            {["description", "reviews"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium capitalize text-sm md:text-md ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-4 md:p-4 w-full md:w-4/5 rounded-lg">
            {activeTab === "description" ? (
              <DescriptionTab productDesc={product.description} />
            ) : (
              <ReviewTab rate={product.rating.rate} />
            )}
          </div>
        </div>

        <ProductSlider />
      </div>
    </>
  );
};
