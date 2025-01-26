"use client";
import { motion } from "framer-motion";
const InfinitySlider = () => {
  const images = [
    "/images/mkawlat.jpg",
    "/images/aluminuimWindow.jpg",
    "/images/kaladingviews.jpg",
    "/images/sucritsbathroom.jpg",
    "/images/sucritsoffice.jpg",
    "/images/sucritsviews.jpg",
  ];
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden h-[200px]  w-full shadow-stone-900  ">
        <motion.div
          className="flex gap-4 absolute top-0"
          // animate={{ x: ["0%", "-100%"] }}
          // transition={{
          //   duration: 10,
          //   repeat: Infinity,
          //   ease: "linear",
          // }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image-${index}`}
              className="h-[200px] w-[400px] object-cover self-center shrink-0 rounded-lg mb-4"
            />
          ))}
          {/* Repeat images to create a seamless loop */}
          {/* {images.map((image, index) => (
            <img
              key={`duplicate-${index}`}
              src={image}
              alt={`image-duplicate-${index}`}
              className="h-[300px] w-full object-cover rounded-lg mb-4"
            />
          ))} */}
        </motion.div>
      </div>
    </div>
  );
};

export default InfinitySlider;
