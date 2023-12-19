import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";

const ReviewForm = () => {
    const initialstate = {
        rating: null,
        comment: "",
        name: "",
        email: "",
    };
    const [reviewData, setReviewData] = useState(initialstate);
    const ratingChanged = (newRating) => {
        setReviewData({ ...reviewData, rating: newRating });
    };

    function handleSubmitReview(event) {
        event.preventDefault();
    }
    return (
        <div>
            <h4 className="font-bold text-base sm:text-md text-lightblack">Add a review</h4>
            <div className="mt-[10px] sm:mt-[20px]">
                <form onSubmit={handleSubmitReview}>
                    <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                    <textarea
                        onChange={(e) =>
                            setReviewData({
                                ...reviewData,
                                comment: e.target.value,
                            })
                        }
                        value={reviewData.comment}
                        name="comment"
                        className="w-full border-[1px] rounded-[4px] border-perfectwhite h-[130px] sm:h-[169px] p-[12px] sm:p-[26px] outline-none mt-3"
                        placeholder="Write your comment"
                        id="comment"
                    ></textarea>
                    <input
                        onChange={(e) =>
                            setReviewData({
                                ...reviewData,
                                name: e.target.value,
                            })
                        }
                        value={reviewData.name}
                        type="text"
                        className="w-full mt-[10px] sm:mt-[20px] border-[1px] font-normal ff_lato text-xs rounded-[4px] border-perfectwhite outline-none  h-[42px] py-[6px] sm:py-[12px] px-[12px] sm:px-[26px]"
                        placeholder="Name"
                    />
                    <input
                        onChange={(e) =>
                            setReviewData({
                                ...reviewData,
                                email: e.target.value,
                            })
                        }
                        value={reviewData.email}
                        type="email"
                        className="w-full mt-[10px] sm:mt-[30px] border-[1px] font-normal ff_lato text-xs rounded-[4px] border-perfectwhite outline-none h-[42px] py-[6px] sm:py-[12px] px-[12px] sm:px-[26px]"
                        placeholder="E-mail"
                    />
                    <button className="w-full h-[44px] rounded-[4px] mt-[10px] sm:mt-[30px] bg-spacegrey text-xs font-bold text-white">
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
