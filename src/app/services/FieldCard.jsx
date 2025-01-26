"use client"
import { motion } from "framer-motion";

const FieldCard = ({image,text}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="mt-4 p-6 bg-cover bg-center rounded-3xl sm:w-[250px] sm:h-[200px] md:w-[350px] md:h-[250px] w-[150px] h-[100px] grayscale-[100%] hover:grayscale-[0] transition-all ease-in-out cursor-pointer flex justify-start items-end"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="sm:text-2xl md:text-2xl text-sm text-white font-bold ">
        {text}
      </h1>
    </motion.div>
  );
}

export default FieldCard