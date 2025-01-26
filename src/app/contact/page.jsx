import Image from "next/image";
import Navbar from "../components/Navbar";
import Location from "./Location";
import ContactForm from "./ContactForm";
const page = () => {
  return (
    <section>
      <Navbar />
      <div className="w-full bg-colors-sections-background pt-8 ">
        <div className="w-[80%] m-auto ">
          <h1 className="text-center text-3xl font-bold leading-normal text-colors-text-color">
            اتصل بنا
          </h1>
          <p className="text-center text-2xl mt-4">
            هل لديك أي أسئلة؟ نحن سعداء بالإجابة عليها.
          </p>
        </div>
        <Image
          src="/images/contactImage.jpg"
          alt="contact image"
          width={500}
          height={300}
          className="w-[100%] h-[400px] mt-10"
        />
      </div>

      <div className=" flex justify-center items-start md:h-[800px] h-[1200px]  flex-col md:flex-row">
        <ContactForm />
        <Location />
      </div>
    </section>
  );
};

export default page;
