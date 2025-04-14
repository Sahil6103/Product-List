import React, { useEffect, useState } from "react";
import { Hero } from "./common/Hero";
import { Filter } from "./common/Filter";
import axios from "axios";
import { Link } from "react-router-dom";
import { ProductPagination } from "./common/ProductPagination";
import { heartIcon } from "../assets";

export const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProducts(res.data);
                setFilteredProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);


    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter((product) =>
                    selectedCategories.includes(product.category)
                )
            );
        }
        setCurrentPage(1);
    }, [selectedCategories, products]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentProducts = filteredProducts.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <Hero />
            <div className="px-5 sm:px-10 lg:px-14 py-10 flex flex-col lg:flex-row gap-10">
                {/* Filter Component */}
                <div className="w-full lg:w-1/4">
                    <Filter
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                </div>

                {/* Product List */}
                <div className="w-full lg:w-3/4 my-20">
                    {currentProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                            {currentProducts.map((product, index) => (
                                <Link to={`/productdetail/${product.id}`} key={index} className="relative border border-gray-200 rounded-lg flex flex-col h-full">
                                    <div className="bg-gray-100 rounded-t-lg p-3 flex justify-center items-center w-[305px] h-40">
                                        <img src={product.image} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                                    </div>
                                    <div className="py-5 px-4 flex flex-col flex-grow">
                                        <div className="flex flex-col md:flex-row gap-1 justify-between text-md text-gray-700">
                                            <span className="text-[#667085] font-medium truncate">{product.title}</span>
                                            <span className="font-bold text-[#344054]">${product.price}</span>
                                        </div>
                                        <div className="flex gap-3 mt-2 text-sm text-gray-500">
                                            <span>{product.rating?.rate}/5</span>
                                            <span>({product.rating?.count})</span>
                                        </div>
                                        <div className="flex flex-col xl:flex-row gap-3.5 md:gap-2.5 mt-4">
                                            <button className="bg-light-blue text-white py-2 px-5 rounded-full text-sm">
                                                Add to Cart
                                            </button>
                                            <button className="border border-gray-300 text-gray-700 py-2 px-5 rounded-full text-sm">
                                                Add Shortlist
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-white p-2 flex justify-center items-center rounded-full shadow">
                                        <img src={heartIcon} alt="" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center md:self-start gap-2">
                            <span className="text-[2rem] text-gray-400">
                                No products found!
                            </span>
                        </div>
                    )}

                    <ProductPagination
                        totalPosts={filteredProducts.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </>
    );
};
