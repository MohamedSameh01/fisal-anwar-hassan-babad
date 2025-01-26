
import Image from "next/image";
const Hero = () => {
  return (
    <div className="h-[400px] relative overflow-hidden">
      {/* Image */}
      <Image
        className="w-full h-full object-cover"
        src="/images/ourProjects.jpg"

        alt="Our Projects"
        width={1200} 
        height={400} 
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Text Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
        <h1 className="text-3xl text-white">مشاريعنا ....</h1>
        <h1 className="text-6xl text-white mt-10">
          تُبنى لتنعم بالحياة فيها ..
        </h1>
        <h1 className="text-6xl mt-4 text-white">
          فخامة الحياة وزهو التفاصيل ...
        </h1>
      </div>
    </div>
  );
}

export default Hero