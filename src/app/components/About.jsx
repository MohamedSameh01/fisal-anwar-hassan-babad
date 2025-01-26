import Image from "next/image";

const About = () => {
    
  return (
    <>
      <div className="w-full flex justify-center items-center bg-colors-sections-background">
        <div className="md:w-[60%] w-[90%]  m-auto my-32">
          <h1 className="md:text-3xl text-2xl text-center font-bold text-colors-text-color">
            نوادر القمه المطوّر العقاري الذي يسعى دائماً ليكون في طليعة الابتكار
      في مجال المقاولات و التشطيبات .
          </h1>
          <p className="px-6 text-center text-2xl mt-12 text-colors-text-color leading-10">
            نقدّم في نوادر القمه مشاريع ضخمة متعددة الاستخدامات مشاريع و محلات تجاريه،
            ومشاريع سكنيةو اداريه استثماريه وتجارية، لخلق مساحات مثلى وتوفير فرص استثمارية مربحة.
            تضمن نوادر القمه معايير استثنائية على كافة الأصعدة، من خلال بناء
            مشاريع تتميز بتصاميم فريدة وأصيلة وتكامل مثالي.
          </p>
          <p className="px-6 text-center text-2xl text-colors-text-color mt-4 leading-10">
            تعتز نوادر القمه بتقديم مشاريع تتجاوز قيمتها الإجمالية
            <span className="text-colors-background-color"> 6 مليار ريال </span>
            سعودي، بمسطحات بنائية تتجاوز
            <span className="text-colors-background-color">
              {" "}
              الـ 600 ألف م2{" "}
            </span>
            خلال الـ 4 سنوات القادمة.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-colors-sections-background">
        <Image
          className="block w-full"
          src="/images/pause.svg"
          alt="Pause Icon"
          width={100}
          height={50}
        />
      </div>
    </>
  );
}

export default About