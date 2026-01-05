import shock from "../assets/img/shock.png";
import booster from "../assets/img/booster.png";
import belt from "../assets/img/belt.png";

import car1 from "../assets/img/car1.png";
import car2 from "../assets/img/car2.png";
import car3 from "../assets/img/car3.png";
import car4 from "../assets/img/car4.png";
import car5 from "../assets/img/car5.png";

export default function NewsSection() {
  return (
    <section className="bg-[#f6f6f6] py-20 relative overflow-hidden">

      {/* GEAR BACKGROUND */}
      <div className="absolute right-0 top-0 opacity-10">
        <div className="w-[400px] h-[400px] bg-gray-300 rounded-full" />
      </div>

      <div className="container mx-auto px-4">

        {/* VEHICLES */}
        <div className="flex gap-6 mb-10">
          <img src={car1} className="h-12" />
          <img src={car2} className="h-12" />
          <img src={car3} className="h-12" />
          <img src={car4} className="h-12" />
          <img src={car5} className="h-12" />
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-2">Новости</h2>
        <p className="text-sm text-gray-500 mb-8 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Tincidunt lorem placerat molestie arcu placerat.
        </p>

        {/* NEWS CARDS */}
        <div className="grid grid-cols-3 gap-6">

          {/* CARD */}
          <div>
            <div className="bg-white p-6 mb-4">
              <img src={shock} alt="" className="mx-auto h-28" />
            </div>
            <h3 className="font-semibold text-sm mb-1">
              Новинки амортизаторы
            </h3>
            <p className="text-xs text-gray-400 mb-2">24.06.2022</p>
            <button className="text-sm text-[#c83c44] flex items-center gap-1">
              Подробнее →
            </button>
          </div>

          <div>
            <div className="bg-white p-6 mb-4">
              <img src={booster} alt="" className="mx-auto h-28" />
            </div>
            <h3 className="font-semibold text-sm mb-1">
              Ожидаемое поступление на склад – вакуумный усилитель тормозов
            </h3>
            <p className="text-xs text-gray-400 mb-2">24.06.2022</p>
            <button className="text-sm text-[#c83c44] flex items-center gap-1">
              Подробнее →
            </button>
          </div>

          <div>
            <div className="bg-white p-6 mb-4">
              <img src={belt} alt="" className="mx-auto h-28" />
            </div>
            <h3 className="font-semibold text-sm mb-1">
              Вновь на складе
            </h3>
            <p className="text-xs text-gray-400 mb-2">24.06.2022</p>
            <button className="text-sm text-[#c83c44] flex items-center gap-1">
              Подробнее →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
