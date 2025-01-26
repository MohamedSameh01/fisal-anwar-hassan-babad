"use client";

import { useState } from "react";
import { Building2, ShoppingCart, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
const FieldsOfWork = () => {
  const cards = [
    {
      id: 1,
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "المقاولات و الانشائات",
      description: "تنفيذ المشاريع بكفاءه و جوده عاليه في المواعيد الزمنيه المحدده",
      image: "/images/card1.jpg",
    },
    {
      id: 2,
      icon: <UserCheck className="h-8 w-8" />,
      title: "التشطيبات العامه ",
      description:
       "تنفيذ كافة بنود التشطيبات الداخليه و الخارجيه و مشاريع البنيه التحتيه",
      image: "/images/card2.jpg",
    },
    {
      id: 3,
      icon: <Building2 className="h-8 w-8" />,
      title: "وكيل معتمد لدهانات بنتيكو",
      description: "خبره كبيره بمجال الدهانات و تغطيبة وكالة دهانات بنتيكو كوكيل حصري بمنطقة جيزان ",
      image: "/images/card3.jpg",
    },
    {
      id: 4,
      icon: <Building2 className="h-8 w-8" />,
      title:"اعمال اللاندسكيب و الموقع العام و الحدئق",
      description: "اعمال الارصفه و الانترلوك و الري و المساحات الخضرائ و الباردوله",
      image: "/images/card4.jpg",
    },
  ];

  const [activeCard, setActiveCard] = useState(1);
  return (
    <section className=" m-auto py-32 bg-colors-sections-background">
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 lg:flex-nowrap w-[80%] m-auto">
        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[35%] text-right space-y-4"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gold text-colors-background-color">
            نطاق عملنا في نوادر القمه
          </h2>
          <p className="text-gray-700 leading-relaxed">
            عبارة عن حلقات مترابطة في سلسلة القيمة العقارية، تبدأ من تخطيط
            وتنفيذ المشاريع العقارية، مرورًا بتشغيلها وإدارتها، وصولاً إلى
            تسويقها وبيعها.
          </p>
          {/* <button className="px-12 py-4 bg-gold bg-colors-background-color text-white rounded-full hover:bg-white hover:text-colors-background-color border-2 border-colors-background-color transition-all ease-in-out">
            المزيد
          </button> */}
        </motion.div>
        {/* Left Side - Cards */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
          className="w-full flex justify-between items-center flex-wrap gap-4 "
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative rounded-[70px] cursor-pointer transition-all h-[400px] duration-500 ease-in-out  overflow-hidden ${
                activeCard === card.id ? "w-[400px] " : "w-[100px] "
              }`}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={()=>setActiveCard(1)}
            >
              <div
                className="ali absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="absolute inset-0 bg-black/30" />

              <div
                className={`absolute inset-0 flex flex-col items-center justify-between p-6 text-white transition-all duration-300 ${
                  activeCard === card.id ? "opacity-100" : "opacity-70"
                }`}
              >
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  {card.icon}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p
                    className={`text-sm transition-all duration-300 ${
                      activeCard === card.id ? "opacity-100" : "opacity-0 h-0"
                    }`}
                  >
                    {card.description}
                  </p>
                  {/* {activeCard === card.id && (
                    <div className="mt-4 px-6 py-2 bg-[#8B7355] text-white rounded-full inline-block hover:bg-white hover:text-colors-background-color border-2 border-colors-background-color transition-all ease-in-out">
                      اعرف المزيد
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FieldsOfWork;
