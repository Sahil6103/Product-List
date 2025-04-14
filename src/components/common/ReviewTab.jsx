import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { reviewLikeIcon } from "../../assets";

const reviewsData = [
    {
        id: 1,
        name: "Nicolas Cage",
        daysAgo: "3 Days ago",
        rating: 5,
        reviewTitle: "Great Product",
        reviewText:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
        id: 2,
        name: "Sr. Robert Downey",
        daysAgo: "2 Days ago",
        rating: 5,
        reviewTitle: "The best product in Market",
        reviewText:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
];

const ratingsData = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
];

const ReviewTab = ({ rate }) => {
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewText, setReviewText] = useState("");

    return (
        <div className="w-full max-w-3xl bg-white rounded-lg mt-8">
            {/* Customers Feedback */}
            <h2 className="text-xl font-semibold mb-4">Customers Feedback</h2>

            <div className="flex flex-col md:flex-row md:items-center rounded-lg gap-4 md:gap-6 max-w-2xl">
                {/* Left Box - Overall Rating */}
                <div className="flex flex-col justify-center items-center p-12 rounded-lg w-full md:w-1/3 bg-[#F9FAFB]">
                    <p className="text-4xl font-bold text-blue-600">{rate}</p>
                    <div className="flex text-yellow-500 mt-1">
                        {[...Array(5)].map((_, index) => (
                            <AiFillStar key={index} />
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-2">Product Rating</p>
                </div>

                {/* Right Box - Rating Distribution */}
                <div className="flex flex-col w-full md:w-fit rounded-lg justify-center items-center space-y-3 bg-[#F9FAFB] px-4 py-5">
                    {ratingsData.map((item) => (
                        <div key={item.stars} className="flex flex-row items-center gap-2">
                            <div className="w-32 md:w-72 bg-gray-200 h-2 rounded-md overflow-hidden">
                                <div
                                    className="bg-green-700 h-2 rounded-md"
                                    style={{ width: `${item.percentage}%` }}
                                ></div>
                            </div>
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, index) =>
                                    index < item.stars ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
                                )}
                            </div>
                            <span className="text-gray-700 text-sm">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews Section */}
            <h2 className="text-xl font-semibold mt-6 mb-4">Reviews</h2>
            {reviewsData.map((review) => (
                <div key={review.id} className="border-b pb-4 mb-4 flex justify-start items-start gap-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                            A.T
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="font-semibold">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.daysAgo}</p>
                        </div>
                        <div className="mt-2 flex text-yellow-500">
                            {[...Array(5)].map((_, index) =>
                                index < review.rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
                            )}
                        </div>
                        <h4 className="font-medium mt-1">{review.reviewTitle}</h4>
                        <p className="text-gray-700">{review.reviewText}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                            <button className="flex justify-center items-center gap-1 text-[#667085]">
                                <img src={reviewLikeIcon} alt="" /> Like
                            </button>
                            <button className="text-red-500">Reply</button>
                        </div>
                    </div>
                </div>
            ))}
            <button className="text-red-500 font-semibold text-center w-full mt-2 hover:underline">
                View All Reviews
            </button>



            {/* Write a Review Section */}
            <h2 className="text-xl font-semibold mt-6 mb-4">Write a Review</h2>
            <p className="text-gray-700 mb-2">What is it like to Product?</p>
            <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoverRating(index + 1)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(index + 1)}
                    >
                        {index < (hoverRating || rating) ? <AiFillStar /> : <AiOutlineStar />}
                    </span>
                ))}
            </div>

            <label className="block font-medium mb-1">Review Title</label>
            <input
                type="text"
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
                className="w-full border rounded-lg py-2 px-3 mb-4"
                placeholder="Great Products"
            />

            <label className="block font-medium mb-1">Review Content</label>
            <textarea
                rows="4"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full border rounded-lg py-2 px-3 mb-4"
                placeholder="Share your experience with this product..."
            ></textarea>

            <button className="bg-light-blue text-white w-full md:w-[185px] h-[40px] md:h-[55px] rounded-full">
                Submit Review
            </button>
        </div>

    );
};

export default ReviewTab;
