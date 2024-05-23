import { motion } from "framer-motion";
import StarSection from "./StarSection";
import UserImg from "../assets/user.jpg";
import { useEffect, useState } from "react";

const ReviewCard = ({
  starCount = 5,
  name,
  date,
  description,
  user = UserImg,
}) => {
  const [showInitialBtn, setShowInitialBtn] = useState(false);
  const [showContent, setShowContent] = useState(description);
  const [btnText, setBtnText] = useState("Read More");
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (description.length > 150) {
      setShowInitialBtn(true);
      setShowContent(description.substring(0, 150) + " ...");
    } else {
      setShowContent(description);
    }
  }, [description]);

  const handleSeeMore = () => {
    if (expand) {
      setExpand(false);
      setShowContent(description.substring(0, 150) + " ...");
      setBtnText("Read More");
    } else {
      setExpand(true);
      setShowContent(description);
      setBtnText("Read Less");
    }
  };

  return (
    <div className="w-full lg:w-1/2 p-3">
      <div className="w-full sm:w-[95%] flex flex-col gap-3 cursor-pointer">
        <StarSection starCount={starCount} />

        {/* profile */}
        <div className="flex items-center gap-2">
          <div className="w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] items-center justify-center">
            <img
              src={user}
              alt=""
              className="w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg xl:text-xl">{name}</span>
            <span className="text-[#979797] text-[11px] xl:text-xs ">
              20 <span className="align-super">th</span> of May 2024
            </span>
          </div>
        </div>

        {/* description */}
        <div className="flex flex-col gap-2 relative">
          <motion.span
            className="text-sm sm:text-base text-justify sm:text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={showContent} 
          >
            {showContent}
          </motion.span>

          {showInitialBtn && (
            <button
              onClick={handleSeeMore}
              className="text-[#737373] hover:text-[#000] font-bold text-xs sm:text-sm border-none w-fit"
            >
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
