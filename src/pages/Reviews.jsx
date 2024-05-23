import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import StarSection from "../components/StarSection";
import { reviewData } from "../data/review.js";

const Reviews = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-5 xl:gap-10 max-w-[1600px] mx-auto  w-full min-h-screen h-auto  p-5 xl:p-10">
      {/* title */}
      <span className="text-sm sm:text-base font-semibold">Reviews</span>

      {/* description */}
      <div className="flex items-center gap-3">
        <span className="text-2xl xl:text-3xl font-semibold">4.6</span>

        {/* star */}
        <div className="flex items-center gap-1">
          <StarSection />
        </div>

        {/* total reviews */}
        <span className="text-sm sm:text-base">(120 reviews)</span>
      </div>

      {/* content section */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap w-full">
          {/* section */}
          {reviewData.slice(0, 4).map((item, index) => (
            <ReviewCard
              key={index}
              user={item.user}
              starCount={item.starCount}
              name={item.name}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex justify-start">
          {reviewData.length > 4 && (
            <button
              onClick={toggleModal}
              className="border px-2 py-1 rounded-md text-sm font-semibold text-[#737373] hover:text-[#000]"
            >
              See All Reviews
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-gray-900 bg-opacity-50"
          aria-hidden="true"
        >
          <div className="relative p-4 w-full max-w-[95%] ">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  All Reviews
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}

              <div className="p-5 max-h-[80vh] overflow-y-scroll">
                <div className="flex flex-wrap w-full">
                  {/* section */}
                  {reviewData.map((item, index) => (
                    <ReviewCard
                      key={index}
                      user={item.user}
                      starCount={item.starCount}
                      name={item.name}
                      date={item.date}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
