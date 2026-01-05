import aboutImg from "../assets/img/about.png";
import logo from "../assets/img/logo.png";

export default function AboutCompany() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 gap-10 items-start">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Warehouse"
            className="w-full h-[360px] object-cover"
          />

          {/* Logo overlay */}
          <div className="absolute top-0 left-0 bg-[#c83c44] p-6">
            <img src={logo} alt="PRAVT" className="h-10" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-2xl font-bold mb-6">О компании</h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            На протяжении 6 лет компания «Автозапчасть» занимается поставками
            автозапчастей ГАЗ, УАЗ, ПАЗ, ВАЗ, КамАЗ. Мы специализируемся на
            продвижении своего бренда ТМ PRAVT – сертифицированная торговая
            марка российской компании. Наша география расширяется по всей
            России и ближнему зарубежью. Мы стали узнаваемы.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            На сегодняшний день ассортимент нашей продукции более 600 позиций.
            С каждым годом прогресс увеличения ассортимента составляет не менее
            чем на 35%. Производственные мощности партнеров компании расположены
            на территории КНР.
          </p>

          <button className="flex items-center gap-2 text-sm font-medium text-[#c83c44]">
            Подробнее <span className="text-lg">→</span>
          </button>
        </div>

      </div>

      {/* SLIDER DOTS (static) */}
      <div className="flex gap-2 mt-6">
        <span className="w-6 h-[2px] bg-[#c83c44]" />
        <span className="w-6 h-[2px] bg-gray-300" />
        <span className="w-6 h-[2px] bg-gray-300" />
      </div>
    </section>
  );
}
