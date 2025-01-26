"use client"
import { motion } from "framer-motion";
import { socialLinks } from "../Data/companyInfo";
const Location = () => {
  return (
    <div className="md:w-[50%] w-full">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        
        className="  md:p-20 p-4 sm:p-10 bg-white"
      >
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-6">اتصال بنا على</h1>

        {/* Phone Number */}
        <p dir="ltr" className="text-xl font-semibold text-center mb-6 ltr">
          {socialLinks.phone}
        </p>

        <hr className="border-gray-300 mb-6" />

        {/* Address Section */}
        <div className="mb-6 flex justify-center flex-col items-center ">
          <h2 className="text-lg font-bold mb-2">المملكة العربية السعودية</h2>
          <p className="text-gray-700">جازان</p>
          <p className="text-gray-700">شارع بيترومين</p>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Coordinates and Map Link */}
        <div className="mb-6 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3817.8657186879655!2d42.6138486851306!3d16.88253588838296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUyJzU3LjEiTiA0MsKwMzYnNDIuMCJF!5e0!3m2!1sar!2ssa!4v1737663168011!5m2!1sar!2ssa"
            width="100%"
            height="300"
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Location;
