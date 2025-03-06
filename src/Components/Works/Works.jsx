import React from "react";
import Star from "../../Assets/Star.png";
import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";
import card3 from "../../Assets/card3.png";

const Works = () => {
  return (
    <div className="w-full px-4 sm:px-24 py-12 sm:py-16">
      <div className="container w-full flex flex-col gap-8">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="h-8 w-8" src={Star} alt="" />
            <h3 className="font-syne font-bold text-2xl sm:text-[40px]">
              Works
            </h3>
          </div>
          <p className="font-syne font-medium text-base sm:text-[18px] border-b-2">
            view all
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-8">
          {/* Card 1 */}
          <div className="bg-[#cbcbcb] bg-opacity-[48%] h-auto sm:h-[429px] w-full flex flex-col sm:flex-row gap-6 sm:gap-8 rounded-[40px] px-6 sm:px-8 py-6 sm:py-8">
            <img
              className="h-auto sm:h-full w-full sm:w-1/2 rounded-lg object-cover"
              src={card1}
              alt=".."
            />
            <div className="w-full sm:w-1/2 flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-4">
                <h3 className="font-syne font-semibold text-2xl sm:text-[40px]">
                  Analysis Application
                </h3>
                <p className="font-poppins text-base sm:text-[18px]">
                  With a user-centered approach, the goal was to create an
                  intuitive interface for enhanced financial intelligence.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <button className="h-9 rounded-3xl border font-syne font-semibold text-xs sm:text-sm px-6 py-2">
                    FIGMA
                  </button>
                  <button className="h-9 rounded-3xl border font-syne font-semibold text-xs sm:text-sm px-6 py-2">
                    UX
                  </button>
                </div>
              </div>
              <button className="h-12 sm:h-14 w-full sm:w-[184px] rounded-full text-black bg-white px-6 sm:px-8 py-3 sm:py-4">
                View Case Study
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#cbcbcb] bg-opacity-[48%] h-auto sm:h-[429px] w-full flex flex-col sm:flex-row gap-6 sm:gap-8 rounded-[40px] px-6 sm:px-8 py-6 sm:py-8">
            <img
              className="h-auto sm:h-full w-full sm:w-1/2 rounded-lg object-cover"
              src={card2}
              alt=".."
            />
            <div className="w-full sm:w-1/2 flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-4">
                <h3 className="font-syne font-semibold text-2xl sm:text-[40px]">
                  Fortknox Application
                </h3>
                <p className="font-poppins text-base sm:text-[18px]">
                  With a user-centered approach, the goal was to create an
                  intuitive interface for enhanced financial intelligence.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <button className="h-9 rounded-3xl border font-syne font-semibold text-xs sm:text-sm px-6 py-2">
                    MOBILE
                  </button>
                  <button className="h-9 rounded-3xl border font-syne font-semibold text-xs sm:text-sm px-6 py-2">
                    WEB
                  </button>
                </div>
              </div>
              <button className="h-12 sm:h-14 w-full sm:w-[184px] rounded-full text-black bg-white px-6 sm:px-8 py-3 sm:py-4">
                View Case Study
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#cbcbcb] bg-opacity-[48%] h-auto sm:h-[429px] w-full flex flex-col sm:flex-row gap-6 sm:gap-8 rounded-[40px] px-6 sm:px-8 py-6 sm:py-8">
            <img
              className="h-auto sm:h-full w-full sm:w-1/2 rounded-lg object-cover"
              src={card3}
              alt=".."
            />
            <div className="w-full sm:w-1/2 flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-4">
                <h3 className="font-syne font-semibold text-2xl sm:text-[40px]">
                  Zenocide Application
                </h3>
                <p className="font-poppins text-base sm:text-[18px]">
                  With a user-centered approach, the goal was to create an
                  intuitive interface for enhanced financial intelligence.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <button className="h-9 rounded-3xl border font-syne font-semibold text-xs sm:text-sm px-6 py-2">
                    APP
                  </button>
                  <button className="h-9 rounded-3xl border font-syne font-semibold text-xs sm:text-sm px-6 py-2">
                    WEB
                  </button>
                </div>
              </div>
              <button className="h-12 sm:h-14 w-full sm:w-[184px] rounded-full text-black bg-white px-6 sm:px-8 py-3 sm:py-4">
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
