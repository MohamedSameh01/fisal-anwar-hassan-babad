"use client";
import { motion } from "framer-motion";
import FieldCard from "./FieldCard";
// import StepsOfWorking from "./StepsOfWorking";
// import InfinitySlider from "../components/InfinitySlider";
import { agentFor } from "../Data/companyInfo";
import Image from "next/image";
const Services = () => {
  const data = [
    {
      image: "/images/mkawlat.jpg",
      text: "تنفيذ و الاشراف علي المقاولات العامه ",
    },
    ,
    {
      image: "/images/aluminuimWindow.jpg",
      text: "تصميم و تنفيذ الشبابيك و الابواب الالومنيوم",
    },
    {
      image: "/images/kaladingviews.jpg",
      text: "تصميم و تنفيذ واجهات الكلادينج",
    },
    { image: "/images/sucritsbathroom.jpg", text: "زجاج سكريت للحمامات" },
    { image: "/images/sucritsoffice.jpg", text: "زجاج سكريت للمكاتب" },
    { image: "/images/sucritsviews.jpg", text: "زجاج سكريت للواجهات " },
  ];
  return (
    <div className="w-full bg-colors-sections-background min-h-screen py-32 p-6">
      <div className="w-[80%] m-auto ">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-3xl mb-6 text-xl font-bold text-colors-background-color  "
        >
          نطاق عملنا في نوادر القمه
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="md:text-2xl text-sm  text-colors-text-color "
        >
          عبارة عن حلقات مترابطة في سلسلة القيمة العقارية، تبدأ من تخطيط وتنفيذ
          <br />
          المشاريع العقارية، مرورًا بشرائها وإدارتها، ووصولًا إلى تسويقها
          وبيعها.
        </motion.span>
      </div>

      <div className="w-[80%] m-auto flex flex-wrap justify-evenly items-center  mt-20">
        {data.map((el, index) => {
          return <FieldCard key={index} image={el.image} text={el.text} />;
        })}
      </div>

      {/* <div className="w-[80%] m-auto mt-20"> */}
      {/* <StepsOfWorking/> */}
      {/* <InfinitySlider/> */}
      {/* </div> */}
      <div className="">
        <h1 className="text-3xl mt-16 font-bold text-colors-background-color text-center">
          و كيل معتمد لدي ..
        </h1>
        <div className="flex justify-center items-center">
          {agentFor &&
            agentFor.map((el) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className=" mt-8"
                key={el.id}
              >
                <Image
                  className="bg-red-600"
                  src={el.image}
                  width={500}
                  height={500}
                  alt={el.name}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
