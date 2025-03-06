import React from "react";
import Logo from "../../Assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-bgblack h-[80px] sm:h-[90px] md:h-[104px] w-full px-4 sm:px-12 md:px-24 py-4 sm:py-6 md:py-8 font-syne">
      <div className="h-10 w-full flex justify-between items-center">
        {/* Logo */}
        <div className="h-full w-[80px] sm:w-[90px] md:w-[103px]">
          <img className="h-full w-10 sm:w-11 md:w-12" src={Logo} alt="Logo" />
        </div>

        {/* Nav Links */}
        <div className="h-full w-[260px] sm:w-[320px] md:w-[395px] flex justify-between items-center">
          <div className="bg-white h-full w-20 sm:w-22 md:w-24 flex items-center justify-center rounded-3xl">
            <p className="text-black text-sm sm:text-base">Home</p>
          </div>
          <div className="h-full w-20 sm:w-22 md:w-24 flex items-center justify-center">
            <p className="text-sm sm:text-base">About</p>
          </div>
          <div className="h-full w-20 sm:w-22 md:w-24 flex items-center justify-center">
            <p className="text-sm sm:text-base">Projects</p>
          </div>
          <div className="h-full w-20 sm:w-22 md:w-24 flex items-center justify-center">
            <p className="text-sm sm:text-base">Contact</p>
          </div>
        </div>

        {/* Hire Me Button */}
        <button className="w-[90px] sm:w-[100px] md:w-[108px] h-full border rounded-3xl text-sm sm:text-base">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
