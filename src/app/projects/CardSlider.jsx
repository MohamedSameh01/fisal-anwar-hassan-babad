"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/navigation"; // Navigation module CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "./style.css";
const CardSlider = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="w-[600px] rounded-lg overflow-hidden shadow-md  min-h-[400px] bg-white"
    >
      <Swiper
        className="h-[250px]"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true} // Enable looping
        autoplay={{
          delay: 2000, // Delay between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
      >
        {project.images.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <Image
                src={el.src}
                width={500}
                height={500}
                alt={project.name}
                className="w-full object-contain"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <h1 className="text-center mt-4 text-3xl font-bold text-colors-text-color">
        {project.name}
      </h1>
      <div className="flex justify-between  items-center flex-wrap p-6 gap-4">
        <span className="rounded-lg bg-colors-background-color text-white p-2">
          {project.owner}
        </span>
        <span className="rounded-lg bg-colors-background-color text-white p-2">
          {project.address}
        </span>
        <span className="rounded-lg bg-colors-background-color text-white p-2">
          {project.notes}
        </span>
        <span className="rounded-lg bg-colors-background-color text-white p-2">
          {project.type}
        </span>
      </div>
    </motion.div>
  );
};

export default CardSlider;
