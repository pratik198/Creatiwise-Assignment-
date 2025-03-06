import React from "react";
import Star from "../../Assets/Star.png";
import Bullets from "../../Assets/Bullets.png";

const Expertise = () => {
  return (
    <div className="w-full px-4 sm:px-24 py-12 sm:py-16">
      <div className="container w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img className="h-8 w-8" src={Star} alt="" />
          <h3 className="font-syne font-semibold text-3xl sm:text-[40px]">
            Expertise
          </h3>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-16 sm:gap-y-16">
          {/** Branding */}
          <div className="flex flex-col gap-4 max-w-full">
            <div className="flex items-center gap-2">
              <img className="h-[6px] w-[6px]" src={Bullets} alt="" />
              <p className="font-syne font-semibold text-xl sm:text-2xl">
                Branding
              </p>
            </div>
            <p className="font-poppins text-base sm:text-[16px]">
              I create efficient, adaptable, and engaging websites. No
              predefined patterns. No sluggish, complex code. Webflow forms the
              foundation of my web development approach. I employ it to provide
              safe, top-notch bespoke websites.
            </p>
          </div>

          {/** UI Design */}
          <div className="flex flex-col gap-4 max-w-full">
            <div className="flex items-center gap-2">
              <img className="h-[6px] w-[6px]" src={Bullets} alt="" />
              <p className="font-syne font-semibold text-xl sm:text-2xl">
                UI Design
              </p>
            </div>
            <p className="font-poppins text-base sm:text-[16px]">
              I create efficient, adaptable, and engaging websites. No
              predefined patterns. No sluggish, complex code. Webflow forms the
              foundation of my web development approach. I employ it to provide
              safe, top-notch bespoke websites.
            </p>
          </div>

          {/** UX Design */}
          <div className="flex flex-col gap-4 max-w-full">
            <div className="flex items-center gap-2">
              <img className="h-[6px] w-[6px]" src={Bullets} alt="" />
              <p className="font-syne font-semibold text-xl sm:text-2xl">
                UX Design
              </p>
            </div>
            <p className="font-poppins text-base sm:text-[16px]">
              I comprehend and resolve digital product issues using a
              user-focused methodology. Investigation, compassion, and visual
              conveyance are a few techniques I apply to captivate and involve
              your users while fulfilling your business requirements.
            </p>
          </div>

          {/** Development */}
          <div className="flex flex-col gap-4 max-w-full">
            <div className="flex items-center gap-2">
              <img className="h-[6px] w-[6px]" src={Bullets} alt="" />
              <p className="font-syne font-semibold text-xl sm:text-2xl">
                Development
              </p>
            </div>
            <p className="font-poppins text-base sm:text-[16px]">
              I create user-friendly, adaptive, engaging websites. No
              cookie-cutters. No cumbersome, complex coding. Webflow forms the
              foundation of my web development approach, I employ it to produce
              safe, top-notch personalized websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
