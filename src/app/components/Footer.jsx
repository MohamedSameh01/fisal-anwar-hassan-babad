"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsappSquare,
  FaFacebook,
} from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { socialLinks } from "../Data/companyInfo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#353E38] text-[#F2F0ED] py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:w-[80%] w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center w-[60%] m-auto"
        >
          <Image
            src="images/Logo.png"
            width={500}
            height={300}
            alt="Logo"
            className="filter brightness-75" // Image color adjustment
          />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-start items-center gap-1">
            <h3 className="font-bold mb-4 text-2xl text-[#87754D] ">
              معلومات التواصل{" "}
            </h3>
            <span className="flex-1 h-[1px] bg-gray-400"></span>
          </div>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center  gap-2">
              <FaEnvelope className="mr-2 text-[#87754D]" />
              <a href={socialLinks.mail} className="hover:text-[#87754D] ">
                {socialLinks.mail}
              </a>
            </li>
            <li className="flex items-center  gap-2">
              <FaPhone className="mr-2 text-[#87754D]" />
              <a
                dir="ltr"
                href="tel:+996 055 666 9563"
                className="hover:text-[#87754D] "
              >
                {socialLinks.phone}
              </a>
            </li>
            <li className="flex items-center  gap-2">
              <FaPhone className="mr-2 text-[#87754D]" />
              <a
                dir="ltr"
                href="tel:+996 050 327 2000"
                className="hover:text-[#87754D] "
              >
                {socialLinks.phone2}
              </a>
            </li>
            <li className="flex items-center  gap-2">
              <FaWhatsappSquare className="mr-2 text-[#87754D]" />
              <a
                dir="ltr"
                href="https://wa.me/9960556669563"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#87754D] "
              >
                {socialLinks.phone}
              </a>
            </li>

            <li className="flex items-center  gap-2">
              <a href={socialLinks.facebook} target="_blank">
                <FaClock className="mr-2 text-[#87754D]" />
              </a>
              <span>من الأحد إلى الخميس، 9 ص - 5 م</span>
            </li>
            <li className="flex items-center  gap-2">
              <FaMapMarkerAlt className="mr-2 text-[#87754D]" />
              <span> جازان- شارع بيترومين</span>
            </li>
          </ul>
        </motion.div>

        {/* Aramak Real Estate Links */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex justify-start items-center gap-1">
            <h3 className="font-bold mb-4 text-2xl text-[#87754D] ">
              نوادر القمه
            </h3>
            <span className="flex-1 h-[1px] bg-gray-400"></span>
          </div>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center  gap-2">
              <FaAngleLeft className="mr-2 text-[#87754D]" />
              <Link href="/" className="hover:text-[#87754D] ">
                الرئيسية
              </Link>
            </li>
            <li className="flex items-center  gap-2">
              <FaAngleLeft className="mr-2 text-[#87754D]" />
              <Link href="/about" className="hover:text-[#87754D] ">
                من نحن
              </Link>
            </li>
            <li className="flex items-center  gap-2">
              <FaAngleLeft className="mr-2 text-[#87754D]" />
              <Link href="/services" className="hover:text-[#87754D] ">
                خدماتنا
              </Link>
            </li>
            <li className="flex items-center  gap-2">
              <FaAngleLeft className="mr-2 text-[#87754D]" />
              <Link href="/projects" className="hover:text-[#87754D] ">
                مشاريعنا
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Support and Assistance */}
        {/* <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className=""
        >
          <div className=" flex justify-between items-center gap-1">
            <h3 className="font-bold mb-4 text-2xl text-[#87754D]">
              الدعم و المساعده
            </h3>
            <span className="flex-1 h-[1px] bg-gray-400"></span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center  gap-2">
              <FaAngleLeft className="mr-2 text-[#87754D]" />
              <Link href="/contact" className="hover:text-[#87754D] ">
                تواصل معنا
              </Link>
            </li>
            <li className="flex items-center  gap-2">
              <FaAngleLeft className="mr-2 text-[#87754D]" />
              <Link href="/terms" className="hover:text-[#87754D] ">
                الشروط والأحكام
              </Link>
            </li>
            <li className="flex items-center  gap-2">
              <FaAngleLeft className="mr-2 text-[#87754D]" />
              <Link href="/privacy-policy" className="hover:text-[#87754D] ">
                سياسة الخصوصية
              </Link>
            </li>
            <li className="flex items-center  gap-2">
              <FaAngleLeft className="mr-2 text-[#87754D]" />
              <Link href="/disclaimer" className="hover:text-[#87754D] ">
                إخلاء المسؤولية
              </Link>
            </li>
          </ul>
        </motion.div> */}
      </div>

      {/* Social Media Links */}
      <div className="md:w-[80%] w-full  m-auto px-6 ">
        <span className="w-full block h-[1px] bg-gray-400 mt-20 mb-5"></span>
        <div className=" flex md:flex-row flex-col gap-5  justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center space-x-6 rtl:space-x-reverse"
          >
            <a
              href="#"
              className="text-[#87754D] hover:text-white transition-all ease-in-out  "
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href={socialLinks.instgram}
              className="text-[#87754D] hover:text-white transition-all ease-in-out "
            >
              <FaInstagram size={24} />
            </a>
            <a
              href={socialLinks.twitter}
              className="text-[#87754D] hover:text-white transition-all ease-in-out "
            >
              <FaTwitter size={24} />
            </a>
            <a
              href={socialLinks.linkedin}
              className="text-[#87754D] hover:text-white transition-all ease-in-out "
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href={socialLinks.facebook}
              className="text-[#87754D] hover:text-white transition-all ease-in-out "
            >
              <FaFacebook size={24} />
            </a>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-1xl text-gray-400"
          >
            حقوق الطبع و النشر محفوظه
          </motion.span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
