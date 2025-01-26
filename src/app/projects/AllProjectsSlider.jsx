"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Correct import path
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { allProjectsImages } from "../Data/companyInfo";

export const AllProjectsSlider = () => {
  return (
    <div className="w-full h-[500px] mt-4">
      <Swiper
        slidesPerView={1} // Show 4 slides at a time
        spaceBetween={10} // Space between slides
        navigation={true} // Enable navigation buttons
        pagination={{ clickable: true }} // Enable pagination dots
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
        style={{ height: "100%", width: "100%" }}
        loop={true} // Enable looping
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
      >
        {allProjectsImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="project image"
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
