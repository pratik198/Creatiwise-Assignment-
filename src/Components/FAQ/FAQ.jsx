import React from "react";
import Star from "../../Assets/Star.png";

const FAQ = () => {
  return (
    <div className="w-full px-4 sm:px-24 py-12 sm:py-16">
      <div className="container w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img className="h-8 w-8" src={Star} alt="Star" />
          <h3 className="font-syne font-semibold text-2xl sm:text-[40px]">
            Frequently Asked Questions
          </h3>
        </div>

        {/* Question 1 */}
        <div className="flex flex-col gap-2">
          <h4 className="font-syne font-medium text-lg sm:text-[32px] leading-8 sm:leading-10">
            What is your design process?
          </h4>
          <p className="font-poppins text-base sm:text-[18px]">
            My design process typically involves four key phases: research,
            design, prototype, and test. In the research phase, I gather
            insights about the user and their needs. In the design phase, I
            create wireframes and visual designs that meet those needs. In the
            prototype phase, I create interactive models of the design for
            testing. In the test phase, I collect feedback from users to refine
            the design.
          </p>
        </div>

        {/* Question 2 */}
        <h4 className="font-syne font-medium text-lg sm:text-[32px] leading-8 sm:leading-10">
          What tools and software do you use for UX design?
        </h4>

        {/* Question 3 */}
        <h4 className="font-syne font-medium text-lg sm:text-[32px] leading-8 sm:leading-10">
          How do you measure the success of your UX designs?
        </h4>
      </div>
    </div>
  );
};

export default FAQ;
