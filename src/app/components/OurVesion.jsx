import { ourValues,ourVesion } from "../Data/companyInfo";
const OurVesion = () => {
  return (
    <section
      style={{ backgroundImage: `url("/images/AboutBackground.jpg")` }}
      className="min-h-[300px] bg-cover bg-no-repeat bg-center"
    >
      <div className="md:w-[60%] w-[90%] m-auto flex justify-start items-center">
        <div className=" bg-colors-background-color py-16 ">
          <div className="p-6 w-full relative ">
            <h1 className="z-10 text-white font-bold text-3xl ">الرؤية</h1>
            <span className="z-10 relative md:text-xl text-sm text-white md:leading-8 leading-4">
             {ourVesion}
            </span>
            <h1 className="md:text-[100px] text-6xl  absolute leading-10  top-[50%] right-[0] tracking-widest font-bold text-[#555b57]">
              الرؤية
            </h1>
          </div>
          <div className="p-6 w-full relative mt-8">
            <h1 className="z-10 text-white font-bold text-3xl ">القيم</h1>
            <span className="z-10 relative md:text-xl text-sm text-white md:leading-8 leading-4">
           
              {ourValues}
            </span>
            <h1 className="md:text-[100px] text-6xl  absolute leading-10  top-[50%] right-[0] tracking-widest font-bold text-[#555b57]">
              القيم
            </h1>
          </div>
          <div className="p-6 w-full relative mt-8">
            <h1 className="z-10 text-white font-bold text-3xl ">الرسالة</h1>
            <span className="z-10 relative md:text-xl text-sm text-white md:leading-8 leading-4">
              نسعى لأن نكون روادًا في إثراء البيئة المعمارية للقطاع العقاري،
              وعلامة تجارية موثوقة لدى العملاء في المملكة العربية السعودية، من
              خلال تلبية احتياجاتهم الاجتماعية والثقافية والترفيهية والتجارية،
              وتحقيق عوائد مالية مجزية لمستثمرينا.
            </span>
            <h1 className="md:text-[100px] text-6xl  absolute leading-10  top-[50%] right-[0] tracking-widest font-bold text-[#555b57]">
              الرسالة
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurVesion