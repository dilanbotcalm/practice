import React, { useState } from "react";
import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import { motion } from "framer-motion";
import { faqData } from "../data/FQData.js"



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex w-full justify-center items-center  min-h-screen sm:h-screen">
      <div className="flex flex-col  max-w-[1200px]  border border-purple-300 rounded-xl sm:h-[300px] overflow-hidden mx-4 xl:mx-0 bg-purple-50">
      <div className="flex flex-col sm:flex-row w-full px-4 sm:px-6 py-4 space-y-6 sm:space-y-0 space-x-0 sm:space-x-8 h-full overflow-hidden">


        <div className=" flex flex-col justify-evenly w-full md:w-1/2 h-full space-y-4 sm:space-y-0">
          <span className="text-purple-600 font-semibold">Support</span>
          <span className="text-xl sm:text-2xl font-extrabold">FAQs</span>
          <span className="text-black/60">
            Everything you need to know about the project and billing. Can't
            find the answer you're looking for ?
          </span>
          <span className="text-black/60 font-bold">View More</span>
        </div>

        <div className="flex flex-col justify-evenly space-y-2 w-full md:w-1/2 h-full ">
          {faqData.map((item, index) => (
            <div key={index} className="flex flex-col space-y-2">
              {/* Question */}
              <div className="flex flex-row justify-between items-center">
                <div>
                  <span className="font-semibold text-base xl:text-xl">{item.question}</span>
                </div>
                <div onClick={() => toggleAnswer(index)}>
                  {openIndex === index ? (
                    <LuMinusCircle className="text-transparent" />
                  ) : (
                    <LuPlusCircle />
                  )}
                </div>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <span className="text-black/60 text-sm xl:text-base">{item.answer}</span>
                    </div>
                    <div onClick={() => toggleAnswer(index)}>
                      <LuMinusCircle className="text-black/60" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;