
import ReviewCard from "../components/ReviewCard";
import StarSection from "../components/StarSection";
import {reviewData} from "../data/review.js"


const Reviews = () => {
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
      <div className="flex flex-wrap w-full">
        {/* section */}
        {reviewData.map((item,index)=>(<ReviewCard key={index} user={item.user} starCount={item.starCount} name={item.name} date={item.date} description={item.description}/>))}

      </div>
    </div>
  );
};

export default Reviews;
