"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  const imagesData = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevState) => (prevState + 1) % imagesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${imagesData[selectedImage]})`,
        backgroundSize: "cover",
      }}
      className="h-screen relative transition-all duration-[2000ms] ease-in-out"
    >
      <Navbar />
      {/* Overlay Layer */}
      <div className="absolute inset-0 z-40 bg-black opacity-50"></div>

      {/* Image Selection Buttons */}
      <div className="absolute right-8 bottom-8 flex flex-col justify-center gap-5 z-40">
        {imagesData.map((el, index) => (
          <button
            onClick={() => setSelectedImage(index)}
            key={index}
            className={`animate__animated animate__fadeInUpBig h-[20px] w-[20px] rounded-full ${
              selectedImage === index
                ? "bg-colors-background-color"
                : "bg-colors-secondary-color"
            }`}
          ></button>
        ))}
      </div>

      {/* Text Content */}
      <div className="z-40 w-[80%] h-full m-auto flex flex-col justify-start sm:mt-24 mt-18 items-start px-6 relative">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.7 }}
          className="text-white md:text-5xl text-3xl mt-6"
        >
          شركة نوادر القمه للمقاولات العامه و التشطيبات
        </motion.h1>

        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
          className="mt-8 md:text-xl text-lg w-[100%] md:w-[50%] text-colors-main-color font-bold"
        >
          شركة نوادر القمه هي شركة سعودية متخصصة في تنفيذ المشاريع الإنشائية
          والمعماريه و التشطيبات، حيث تقدم خدمات عالية الجودة في مجالات المقاولات السكنية
          والتجارية والصناعية. تتميز الشركة بالخبرة الواسعة والالتزام بالمواعيد
          والجودة في جميع مشاريعها.
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
