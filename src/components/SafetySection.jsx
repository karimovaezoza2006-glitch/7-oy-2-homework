import React, { useEffect } from "react";
import AOS from "aos";

/* images */
import visa from "../assets/img/visa.svg";
import mastercard from "../assets/img/mastercard.svg";
import tirsan from "../assets/img/tirsan.svg";

import badge from "../assets/img/badge.svg";
import truck from "../assets/img/truck.svg";
import price from "../assets/img/price.svg";
import manager from "../assets/img/manager.svg";

export default function SafetySection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-5">
        {/* title */}
        <h2
          data-aos="fade-up"
          className="text-center text-2xl md:text-3xl font-bold text-red-500 uppercase mb-14"
        >
          Безопасность, комфорт, надежность!
        </h2>

        {/* top cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* left */}
          <div
            data-aos="fade-right"
            className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 leading-relaxed"
          >
            Вся продукция изготовлена в соответствии с Директивой Европейского
            парламента и Совета Европейского Союза 2007/46/EC от 5 сентября 2007 г.
            <br />
            <br />
            Вся продукция, которая требует подтверждения безопасности
            использования на территории РФ и Таможенного союза имеет
            подтверждение соответствия требованиям техническим регламентам:
            ТР ТС 018/2011 и ТР ТС 010/2011
          </div>

          {/* center */}
          <div
            data-aos="zoom-in"
            className="bg-white border rounded-xl p-6"
          >
            <h3 className="font-semibold mb-4">Варианты оплаты:</h3>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>– Оплата наличными</li>
              <li>
                – Для юридических лиц возможен безналичный расчет с НДС, для
                ближнего зарубежья без НДС
              </li>
            </ul>

            <h4 className="font-semibold mb-3">Также принимаем к оплате:</h4>

            <div className="flex items-center gap-3">
              <img src={visa} alt="visa" className="h-6" />
              <img src={mastercard} alt="mastercard" className="h-6" />
            </div>
          </div>

          {/* right */}
          <div
            data-aos="fade-left"
            className="rounded-xl p-6 text-white bg-gradient-to-r from-[#4c4a74] to-[#58a6a0] flex flex-col justify-between"
          >
            <img src={tirsan} alt="tirsan" className="h-10 mb-4 w-fit" />
            <p className="text-sm leading-relaxed opacity-90">
              Так же, наша компания является официальным представителем TIRSAN
              KARDAN (Турция) на территории Нижегородской области.
              <br />
              <br />
              Продукция успешно присутствует на российском рынке свыше 9 лет.
            </p>
          </div>
        </div>

        {/* bottom features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Feature
            icon={badge}
            title="Гарантия качества"
            aos="fade-up"
          />
          <Feature
            icon={truck}
            title="Быстрая доставка"
            aos="fade-up"
            delay={100}
          />
          <Feature
            icon={price}
            title="Конкурентные цены"
            aos="fade-up"
            delay={200}
          />
          <Feature
            icon={manager}
            title="Персональный менеджер"
            aos="fade-up"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, aos, delay = 0 }) {
  return (
    <div
      data-aos={aos}
      data-aos-delay={delay}
      className="flex items-start gap-4"
    >
      <img src={icon} alt={title} className="w-10 h-10" />
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
    </div>
  );
}
