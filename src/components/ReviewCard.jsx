import StarSection from "./StarSection";
import User from "../assets/user.jpg";
import { useState } from "react";

const ReviewCard = () => {
  const [visibleReadMore, setVisibleReadMore] = useState(false);

  return (
    <div className="border border-blue-300 lg:w-1/2 w-full p-3">
      <div className="w-full sm:w-[95%] flex flex-col gap-3  cursor-pointer ">
        <StarSection />

        {/* profile */}
        <div className="flex items-center gap-2">
          <div className="w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] items-center justify-center ">
            <img
              src={User}
              alt=""
              className="w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg xl:text-xl">Ruma Elli</span>
            <span className="text-[#979797] text-xs xl:text-sm">
              20 <span className="align-super">th</span> of May 2024
            </span>
          </div>
        </div>

        {/* description */}
        <div className="flex  flex-col gap-2">
          <span className="text-sm sm:text-base text-justify sm:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            illo doloremque minus rem nulla, distinctio quod delectus voluptas.
            Odio fugit minima accusamus voluptatibus id optio ut sit totam
            incidunt commodi.
          </span>

          {visibleReadMore && (
            <button className="text-[#737373] hover:text-[#000] font-bold text-xs sm:text-sm border-none w-fit">
              Read More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
