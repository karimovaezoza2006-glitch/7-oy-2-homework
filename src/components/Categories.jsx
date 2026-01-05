import CategoryCard from "./CategoryCard";

// svg rasmlar
import engine from "../assets/img/engine.png";
import fuel from "../assets/img/fuel.svg";
import cooling from "../assets/img/cooling.svg";
import clutch from "../assets/img/clutch.svg";
import gearbox from "../assets/img/gearbox.svg";
import cardan from "../assets/img/cardan.svg";
import axle from "../assets/img/axle.svg";
import suspension from "../assets/img/suspension.svg";
import wheels from "../assets/img/wheels.svg";
import brakes from "../assets/img/brakes.svg";
import steering from "../assets/img/steering.svg";
import electric from "../assets/img/electric.svg";
import heating from "../assets/img/heating.svg";

const categories = [
  { title: "Двигатель", img: engine, color: "#f97316" },
  { title: "Система питания", img: fuel, color: "#f97316" },
  { title: "Система охлаждения", img: cooling, color: "#ef4444" },
  { title: "Сцепление", img: clutch, color: "#86efac" },

  { title: "Коробка передач", img: gearbox, color: "#22c55e" },
  { title: "Карданный вал", img: cardan, color: "#22c55e" },
  { title: "Мост передний и задний", img: axle, color: "#fca5a5" },
  { title: "Подвеска", img: suspension, color: "#ef4444" },

  { title: "Колеса и ступицы", img: wheels, color: "#ef4444" },
  { title: "Тормоза", img: brakes, color: "#38bdf8" },
  { title: "Рулевое управление", img: steering, color: "#7dd3fc" },
  { title: "Электро-оборудование", img: electric, color: "#0284c7" },

  { title: "Отопление и вентиляция", img: heating, color: "#1e40af" },
];

export default function Categories() {
  return (
    <section className="container mx-auto px-4 py-14">

      {/* Title */}
      <h2 className="text-2xl font-bold mb-8">
        Продажа запасных частей для авто
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}

        {/* KATALOG BANNER */}
        <div className="col-span-3 bg-[#c83c44] text-white p-10 relative overflow-hidden">
          <h3 className="text-xl font-semibold mb-6">
            Каталог запасных частей
          </h3>

          <button className="flex items-center gap-2 text-sm font-medium">
            Перейти <span className="text-xl">→</span>
          </button>

          {/* Fon rasmlar */}
          <div className="absolute right-0 bottom-0 ">
            <img
              src={clutch}
              alt=""
              className="h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
