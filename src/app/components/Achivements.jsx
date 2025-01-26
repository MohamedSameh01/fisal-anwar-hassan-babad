"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Achivements = () => {
  return (
    <section className="pt-32 bg-colors-sections-background">
      <div className="md:w-[50%] w-full m-auto grid grid-cols-1  gap-20">
        {/* Total Value */}
        <div className="md:grid md:grid-cols-3 md:grid-rows-2 flex flex-col flex-col-reverse justify-center   text-center space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-1 text-3xl font-bold text-white bg-colors-background-color flex justify-center items-center"
          >
            6,000,000,000
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="col-span-2 row-span-1"
          >
            <span className="text-lg font-semibold">القيمة الإجمالية</span>
            <span className="text-sm text-gray-600">ستة مليار ريال سعودي</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="row-start-1 row-end-3 col-start-3 col-end-3 bg-gray-100 rounded-lg flex justify-center items-center bg-colors-secondary-color"
          >
            <Image
              src="/images/money.svg"
              alt="coins"
              width={500}
              height={300}
            />
          </motion.div>
        </div>

        {/* Hotel Rooms */}
        <div className="flex justify-between items-center md:flex-row flex-col  gap-8">
          {/* Office Space */}
          <div className="flex md:w-[50%] w-full flex-col items-center text-center space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl text-center font-bold text-gray-800"
            >
              +250,000 m²
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col"
            >
              <span className="text-lg font-semibold">
                مساحات مكتبية تأجيرية ومطاعم
              </span>
            </motion.div>
          </div>
          <div className="flex flex-col md:w-[50%] w-full items-center text-center space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold text-gray-800"
            >
              +1,500
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col"
            >
              <span className="text-lg font-semibold">غرفة فندقية</span>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-between items-center md:flex-row flex-col gap-8">
          {/* Building Area */}
          <div className="flex flex-col md:w-[50%] w-full items-center text-center space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-3xl font-bold text-gray-800"
            >
              +600,000 m²
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.7 }}
              className="flex flex-col"
            >
              <span className="text-lg font-semibold">مسطحات بنائية</span>
            </motion.div>
          </div>

          {/* Residential Units */}
          <div className="flex flex-col md:w-[50%] w-full items-center text-center space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-3xl font-bold text-gray-800"
            >
              +500
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.7 }}
              className="flex flex-col"
            >
              <span className="text-lg text-center font-semibold">
                شقة سكنية فاخرة
              </span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full mt-32 overflow-hidden bg-colors-sections-background">
        <Image
          className="block w-full"
          src="/images/pause.svg"
          alt="Pause Icon"
          width={100}
          height={50}
        />
      </div>
    </section>
  );
}

export default Achivements