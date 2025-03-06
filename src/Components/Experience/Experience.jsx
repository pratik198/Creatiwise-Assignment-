import React from "react";
import Star from "../../Assets/Star.png";

const Experience = () => {
  return (
    <div className="w-full px-4 sm:px-24 py-12 sm:py-16">
      <div className="container w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img className="h-8 w-8" src={Star} alt="" />
          <h3 className="font-syne font-semibold text-2xl sm:text-[40px]">
            Experience
          </h3>
        </div>

        {/* Experience List */}
        <div className="flex flex-col gap-8">
          {/* Experience 1 */}
          <div className="flex flex-col sm:flex-row justify-between border-b py-2">
            <h4 className="font-syne font-medium text-xl sm:text-[32px]">
              Lead Product Designer
            </h4>
            <div className="flex flex-col sm:items-end">
              <h5 className="font-syne font-semibold text-lg sm:text-2xl">
                Fortknox
              </h5>
              <p className="font-poppins text-sm sm:text-[16px]">
                Mar 2022 - Oct 2023
              </p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col sm:flex-row justify-between border-b py-2">
            <h4 className="font-syne font-medium text-xl sm:text-[32px]">
              Intern Designer
            </h4>
            <div className="flex flex-col sm:items-end">
              <h5 className="font-syne font-semibold text-lg sm:text-2xl">
                OmniSafe
              </h5>
              <p className="font-poppins text-sm sm:text-[16px]">
                Mar 2022 - Oct 2023
              </p>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col sm:flex-row justify-between border-b py-2">
            <h4 className="font-syne font-medium text-xl sm:text-[32px]">
              UI Designer
            </h4>
            <div className="flex flex-col sm:items-end">
              <h5 className="font-syne font-semibold text-lg sm:text-2xl">
                Doradesign
              </h5>
              <p className="font-poppins text-sm sm:text-[16px]">
                Mar 2022 - Oct 2023
              </p>
            </div>
          </div>

          {/* Experience 4 */}
          <div className="flex flex-col sm:flex-row justify-between border-b py-2">
            <h4 className="font-syne font-medium text-xl sm:text-[32px]">
              Frontend Developer
            </h4>
            <div className="flex flex-col sm:items-end">
              <h5 className="font-syne font-semibold text-lg sm:text-2xl">
                OpacityAuthor
              </h5>
              <p className="font-poppins text-sm sm:text-[16px]">
                Mar 2022 - Oct 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
