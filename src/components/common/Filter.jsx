import axios from "axios";
import { useEffect, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export const Filter = ({ selectedCategories, setSelectedCategories }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [categories, setCategories] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState({});

    // Toggle category selection
    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    // Clear all selected categories
    const clearAll = () => setSelectedCategories([]);

    useEffect(() => {
        const fetchCategoriesAndCounts = async () => {
            try {
                // Fetch categories
                const categoriesRes = await axios.get(`https://fakestoreapi.com/products/categories`);
                setCategories(categoriesRes.data);

                // Fetch all products
                const productsRes = await axios.get(`https://fakestoreapi.com/products`);
                const products = productsRes.data;

                // Count products per category
                const counts = products.reduce((acc, product) => {
                    acc[product.category] = (acc[product.category] || 0) + 1;
                    return acc;
                }, {});

                setCategoryCounts(counts);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategoriesAndCounts();
    }, []);

    return (
        <div className="w-72 p-4 bg-white rounded-lg space-y-6">

            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-indigo-900">Filters</h2>
                <button
                    onClick={clearAll}
                    className="text-sm text-[#726C6C] px-5 py-2.5 border rounded-full"
                >
                    Clear All
                </button>
            </div>

            {/* Category Dropdown */}
            <div className="border rounded-lg p-3">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h3 className="text-indigo-900 font-semibold">Category</h3>
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </div>

                {isOpen && (
                    <div className="mt-3 space-y-2">
                        {categories.map((category, index) => (
                            <label key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-indigo-900"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => toggleCategory(category)}
                                />
                                <span className="text-gray-700">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                <span className="text-gray-500 ml-auto">({categoryCounts[category] || 0})</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
