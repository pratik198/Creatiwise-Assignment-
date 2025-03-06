import React from "react";
import Star from "../../Assets/Star.png";
import Avatar from "../../Assets/Avatar.png";
import Quote from "../../Assets/Quote.png";
import Left from "../../Assets/LeftArr.png";
import Right from "../../Assets/RightArr.png";

const Testimonials = () => {
  return (
    <div className="w-full px-4 sm:px-24 py-12 sm:py-16">
      <div className="container w-full flex flex-col gap-8 items-center">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img className="h-8 w-8" src={Star} alt="Star" />
          <h3 className="font-syne font-semibold text-[40px] text-center">
            What They Say
          </h3>
        </div>

        {/* Testimonial Content */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          {/* Avatar & Name */}
          <div className="flex gap-4 items-center sm:items-start">
            <img className="h-16 w-16 rounded-full" src={Avatar} alt="Avatar" />
            <div>
              <h5 className="font-syne font-semibold text-2xl">Floyed Miles</h5>
              <p className="font-poppins text-[18px] text-gray-400">eBay</p>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="relative w-full sm:w-[710px] text-center sm:text-left">
            <img
              className="h-16 sm:h-24 w-16 sm:w-28 absolute left-1 sm:left-0 top-[-10px]"
              src={Quote}
              alt="Quote"
            />
            <h4 className="font-syne font-medium text-lg sm:text-[32px] leading-6 sm:leading-10 mt-10 sm:mt-0">
              Synergy's resume builder is fantastic. It helped me create a
              professional resume that stood out to employers. The tool is easy
              to use and delivers great results!
            </h4>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center sm:justify-start gap-4">
          <button className="h-10 w-10 bg-white rounded-full flex justify-center items-center shadow-md">
            <img className="h-5 w-5" src={Left} alt="Left Arrow" />
          </button>
          <button className="h-10 w-10 bg-white rounded-full flex justify-center items-center shadow-md">
            <img className="h-5 w-5" src={Right} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
