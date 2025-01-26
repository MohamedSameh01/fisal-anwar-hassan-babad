import React from "react";
// import specialAboutImage from "../../../public/images/specialAboutImage.png";
import { whoAreWe } from "../Data/companyInfo";
const SpecialAbout = () => {
  return (
    <section className="bg-colors-sections-background h-screen ">
      <div
        className="h-screen bg-no-repeat bg-cover md:p-10 p-2 bg-center"
        style={{ backgroundImage: `url("/images/specialAboutImage3.png")` }}
      >
        <div className="md:w-[80%] w-full -z-10 text-right m-auto bg-gradient-to-b from-white/50 to-white/30 rounded-t-[100px] p-12 flex justify-start items-start flex-col">
          <h1 className="md:text-3xl text-xl text-colors-background-color font-bold ">
            من نحن
          </h1>
          <span
            className="mt-8 md:text-xl text-lg font-bold "
            style={{ lineHeight: "80px" }}
          >
            {whoAreWe}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SpecialAbout;
