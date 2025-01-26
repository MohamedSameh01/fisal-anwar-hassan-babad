"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Contactus = () => {
    const [formData, setFormData] = useState({
      name: "",
      subject: "",
      phone: "",
      email: "",
      message: "",
    });
     const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Form submitted:", formData);
     };

     const handleChange = (e) => {
       setFormData({
         ...formData,
         [e.target.name]: e.target.value,
       });
     };
  return (
    <div
      style={{ backgroundImage: `url("/images/ContactBackground.jpg")` }}
      className=" pt-32 pb-16 bg-cover bg-center w-full "
    >
      <div className="w-[80%]  m-auto ">
        <div className="flex flex-col  md:flex-row items-center justify-between gap-12">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative  "
          >
            <div className=" w-[300px] md:w-[400px] mx-auto absolute md:top-[-452px] top-[-235px]">
              <Image
                src="/images/phone.png"
                alt="Phone mockup"
                width={500}
                height={300}
                className="w-full transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-right"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              لديك الفضول لمعرفة عالم العقارات أكثر؟
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-8">
              تواصل معنا مباشرة..
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/30 p-2 text-white placeholder-white/70 focus:outline-none focus:border-[#B5A17D] transition-colors text-right"
                />

                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/30 p-2 text-white/70 focus:outline-none focus:border-[#B5A17D] transition-colors text-right"
                >
                  <option value="" disabled>
                    اختر الموضوع المناسب *
                  </option>
                  <option
                    value="investment"
                    className="bg-colors-background-color cursor-pointer"
                  >
                    الاستثمار العقاري
                  </option>
                  <option
                    value="sale"
                    className="bg-colors-background-color cursor-pointer"
                  >
                    بيع عقار
                  </option>
                  <option
                    value="purchase"
                    className="bg-colors-background-color cursor-pointer"
                  >
                    شراء عقار
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="رقم الهاتف *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/30 p-2 text-white placeholder-white/70 focus:outline-none focus:border-[#B5A17D] transition-colors text-right"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/30 p-2 text-white placeholder-white/70 focus:outline-none focus:border-[#B5A17D] transition-colors text-right"
                />
              </div>

              <textarea
                name="message"
                placeholder="اكتب رسالتك هنا *"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-white/30 p-2 text-white placeholder-white/70 focus:outline-none focus:border-[#B5A17D] transition-colors text-right resize-none"
              />

              <button
                type="submit"
                className="bg-colors-background-color  text-white px-12 py-3 rounded-full hover:bg-white hover:text-colors-background-color border-2 border-colors-background-color transition-all "
              >
                أرسل
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contactus