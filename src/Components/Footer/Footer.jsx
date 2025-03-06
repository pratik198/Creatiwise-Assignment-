import React from "react";
import Star from "../../Assets/Star.png";
import figma from "../../Assets/figma.png";
import designer from "../../Assets/designer.png";
import developer from "../../Assets/developer.png";
import web from "../../Assets/web.png";

const Footer = () => {
  return (
    <div className="w-full px-4 sm:px-24 relative">
      <div className="container w-full py-12 sm:py-16">
        {/* Marquee Section */}
        <div className="marquee h-[60px] w-full flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-12 pb-12 sm:pb-20">
          <img
            className="h-10 sm:h-full w-[150px] sm:w-[217px]"
            src={web}
            alt="Web"
          />
          <img className="h-10 sm:h-14 w-10 sm:w-14" src={Star} alt="Star" />
          <img
            className="h-10 sm:h-full w-[150px] sm:w-[217px]"
            src={figma}
            alt="Figma"
          />
          <img className="h-10 sm:h-14 w-10 sm:w-14" src={Star} alt="Star" />
          <img
            className="h-10 sm:h-full w-[150px] sm:w-[217px]"
            src={designer}
            alt="Designer"
          />
          <img className="h-10 sm:h-14 w-10 sm:w-14" src={Star} alt="Star" />
          <img
            className="h-10 sm:h-full w-[150px] sm:w-[217px]"
            src={developer}
            alt="Developer"
          />
        </div>

        {/* Main Footer Content */}
        <div className="ft_main w-full pt-16 sm:pt-28 pb-8 text-center sm:text-left z-10 relative bg-black">
          <div className="frame w-full flex flex-col items-center gap-6 sm:gap-8">
            <div className="w-full sm:w-[656px] flex flex-col items-center justify-center sm:justify-between">
              <h1 className="font-syne font-extrabold text-4xl sm:text-[64px] leading-tight sm:leading-[80px]">
                LET'S TALK!
              </h1>
              <p className="font-poppins text-base sm:text-[18px]">
                rehanurraihan@gmail.com
              </p>
            </div>

            {/* Copyright & Social Links */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <p className="font-syne text-sm sm:text-[18px] leading-5">
                © Rehan Raihan - 2023
              </p>
              <div className="flex gap-4 sm:gap-8 text-sm sm:text-[18px]">
                <p>Dribble</p>
                <p>Behance</p>
                <p>Twitter</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
