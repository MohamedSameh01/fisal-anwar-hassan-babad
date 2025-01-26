"use client";

import Image from "next/image";
import { CEO_MESSAGE } from "../Data/companyInfo";

const CeoMessage = () => {
  return (
    <div className="w-[80%] m-auto p-4 flex-wrap">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="md:w-[45%] w-[90%] ">
          <Image
            src="/images/Ceo.png"
            alt="ceo"
            width={500}
            height={300}
            loading="lazy"
          />
        </div>
        <div className="md:w-[45%] w-[90%] mt-8">
          <h1 className="text-3xl mb-5 font-bold text-colors-background-color text-center  ">
            كلمة رئيس مجلس الاداره{" "}
          </h1>
          <p className="text-2xl">{CEO_MESSAGE}</p>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
