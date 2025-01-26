
const StepsOfWorking = () => {
    const data=[
        {id:1,
            title:"دراسة المشروع "
        }
    ]
  return (
    <section className="bg-gray-50 py-10">
      {/* Top Timeline */}
      <div className="flex justify-between items-center w-[80%] mx-auto mb-8">

        <span className="flex-1 h-[1px] bg-gray-400"></span>
        <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
        <span className="flex-1 h-[1px] bg-gray-400"></span>
        <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
        <span className="flex-1 h-[1px] bg-gray-400"></span>
        <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
        <span className="flex-1 h-[1px] bg-gray-400"></span>
      </div>

      {/* Main Content */}
      <div className="relative w-[80%] mx-auto overflow-hidden rounded-lg bg-gradient-to-r from-gray-50 to-gray-200">
        {/* Image */}
        <img
          src="/path/to/your/image.jpg"
          alt="Modern Building"
          className="w-full object-cover rounded-lg"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50 text-white flex flex-col justify-center items-end p-10">
          <h3 className="text-2xl font-bold mb-4">إدارة المقاولات</h3>
          <ul className="space-y-2 text-lg">
            <li>إدارة كافة أعمال المشروع</li>
            <li>التكاليف والجودة</li>
            <li>إدارة العقود والمشتريات</li>
            <li>أعمال الاختبار والتشغيل</li>
            <li>استلام المشروع وتسليمه</li>
          </ul>
        </div>

        {/* Large Number */}
        <div className="absolute top-0 left-0 text-gray-300 text-[12rem] font-bold opacity-20 p-10">
          08
        </div>
      </div>
    </section>
  );
  
}

export default StepsOfWorking