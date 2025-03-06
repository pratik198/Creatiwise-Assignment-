import React from "react";
import Star from "../../Assets/Star.png";
import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";
import card3 from "../../Assets/card3.png";

const Blogs = () => {
  return (
    <div className="w-full px-4 sm:px-24 py-12 sm:py-16">
      <div className="container w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="h-8 w-8" src={Star} alt="star" />
            <h3 className="font-syne font-bold text-2xl sm:text-[40px]">
              Blogs
            </h3>
          </div>
          <p className="font-syne font-medium text-sm sm:text-[18px] border-b-2 cursor-pointer">
            View All
          </p>
        </div>

        {/* Blog Cards */}
        {[
          {
            img: card1,
            date: "Nov 9, 2023",
            title: "How UX works in web",
            tags: ["UI", "UX"],
          },
          {
            img: card2,
            date: "Aug 18, 2023",
            title: "Case study - Analysis Application",
            tags: ["DESIGN", "PRINT"],
          },
          {
            img: card3,
            date: "Feb 16, 2023",
            title: "3 ways to develop your skill",
            tags: ["FIGMA", "WEB"],
          },
        ].map((blog, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-0 border-b pb-4"
          >
            {/* Blog Image */}
            <img
              className="w-full sm:w-[286px] h-auto sm:h-[214.5px] object-cover"
              src={blog.img}
              alt="blog"
            />

            {/* Blog Details */}
            <div className="w-full sm:w-[874px] flex flex-col gap-2 sm:gap-4">
              <p className="font-poppins text-sm sm:text-[18px]">{blog.date}</p>
              <h3 className="font-syne font-semibold text-lg sm:text-[40px]">
                {blog.title}
              </h3>
              <div className="flex gap-2">
                {blog.tags.map((tag, idx) => (
                  <button
                    key={idx}
                    className="h-8 sm:h-9 rounded-3xl border font-syne font-semibold text-xs sm:text-[12px] px-4 sm:px-6 py-1 sm:py-2 flex items-center justify-center"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Read Button */}
            <button className="h-12 sm:h-14 w-24 sm:w-[103px] rounded-full text-black bg-white px-6 sm:px-8 py-3 sm:py-4">
              Read
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
