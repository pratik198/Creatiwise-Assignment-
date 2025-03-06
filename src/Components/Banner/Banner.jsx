import React from "react";
import FrameA1 from "../../Assets/FrameA1.png";
import FrameA2 from "../../Assets/FrameA2.png";
import FrameB1a from "../../Assets/FrameB1a.png";
import FrameB1b from "../../Assets/FarmeB1b.png";
import FrameB2a from "../../Assets/FrameB2a.png";
import FrameB2b from "../../Assets/FrameB2b.png";
import FrameB3 from "../../Assets/FrameB3.png";

const Banner = () => {
  return (
    <div className="w-full px-4 sm:px-12 md:px-24 py-16 sm:py-32 md:py-44 font-syne">
      <div className="container text-center flex flex-col gap-10 sm:gap-16 md:gap-28">
        {/* Frame A */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl md:text-[64px] font-extrabold leading-tight sm:leading-[70px] md:leading-[80px] flex flex-wrap justify-center gap-2 sm:gap-4">
            I AM A
            <img
              className="h-10 sm:h-14 md:h-16 w-20 sm:w-28 md:w-32 object-contain"
              src={FrameA1}
              alt=""
            />
            FREELANCE
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-[64px] font-extrabold leading-tight sm:leading-[70px] md:leading-[80px] flex flex-wrap justify-center gap-2 sm:gap-4">
            DESIGNER
            <img
              className="h-10 sm:h-14 md:h-16 w-20 sm:w-28 md:w-32 object-contain"
              src={FrameA2}
              alt=""
            />
            FROM
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-[64px] font-extrabold leading-tight sm:leading-[70px] md:leading-[80px]">
            SAN FRANCISCO
          </h1>
        </div>

        {/* Frame B */}
        <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6">
          <div className="w-full sm:w-[45%] flex flex-wrap justify-center sm:justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                className="h-5 sm:h-7 w-5 sm:w-7 object-contain"
                src={FrameB1a}
                alt=""
              />
              <img
                className="h-5 sm:h-6 w-24 sm:w-[99px] object-contain"
                src={FrameB1b}
                alt=""
              />
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="h-5 sm:h-6 w-5 sm:w-7 object-contain"
                src={FrameB2a}
                alt=""
              />
              <img
                className="h-4 sm:h-5 w-14 sm:w-[56px] object-contain"
                src={FrameB2b}
                alt=""
              />
            </div>
            <div className="flex items-center">
              <img
                className="h-6 sm:h-8 w-24 sm:w-[98px] object-contain"
                src={FrameB3}
                alt=""
              />
            </div>
          </div>
          <div className="w-full sm:w-[41%] text-sm sm:text-base text-center sm:text-left font-poppins px-4 sm:px-0">
            <p>
              Welcome to my portfolio. Here, artistry meets functionality. Dive
              into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
