import React, { useEffect } from "react";
import AOS from "aos";

/* images */
import logo from "../assets/img/logo.png";
import pdf from "../assets/img/pdf.svg";
import vk from "../assets/img/vk.svg";
import telegram from "../assets/img/telegram.svg";

import phone from "../assets/img/phone.svg";
import clock from "../assets/img/clock.svg";
import location from "../assets/img/location.svg";

import visa from "../assets/img/visa.svg";
import mastercard from "../assets/img/mastercard.svg";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-gray-100 pt-16">
      <div className="max-w-[1440px] mx-auto px-5">
        {/* top */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b">
          {/* logo & actions */}
          <div data-aos="fade-right">
            <img src={logo} alt="logo" className="h-10 mb-4" />
            <p className="text-xs text-gray-500 mb-5">
              ПРОДАЖА ЗАПАСНЫХ ЧАСТЕЙ
              <br /> ГАЗ, ВАЗ, ГАЗель
            </p>

            <div className="space-y-3">
              <a className="flex items-center gap-2 text-sm text-red-500">
                <img src={pdf} alt="pdf" className="w-4" />
                Скачать каталог
              </a>
              <a className="flex items-center gap-2 text-sm text-red-500">
                <img src={pdf} alt="pdf" className="w-4" />
                Запросить прайс
              </a>
            </div>

            <div className="flex gap-4 mt-6">
              <img src={vk} alt="vk" className="w-5 cursor-pointer" />
              <img src={telegram} alt="tg" className="w-5 cursor-pointer" />
            </div>
          </div>

          {/* menu 1 */}
          <Menu
            title="Меню"
            items={["Каталог", "О компании", "Партнерам", "Новости", "Контакты"]}
          />

          {/* menu 2 */}
          <Menu
            title="Запчасти"
            items={[
              "Трансмиссия",
              "Система охлаждения",
              "Электрика",
              "Система отопления",
              "Амортизаторы",
            ]}
          />

          {/* menu 3 */}
          <Menu
            title="Узлы"
            items={[
              "Сцепление и тормозная система",
              "Ролики, натяжители и приводные ремни",
              "Ремкомплекты и рулевое управление",
              "Двигатель и КПП",
            ]}
          />

          {/* contacts */}
          <div data-aos="fade-left" className="space-y-5">
            <Contact
              icon={phone}
              text={
                <>
                  7 (831) 418-58-57 <br />7 (831) 418-58-56
                </>
              }
            />
            <Contact
              icon={clock}
              text={
                <>
                  8:30 – 16:30 <br />
                  сб, вс – выходной
                </>
              }
            />
            <Contact
              icon={location}
              text={
                <>
                  г. Нижний Новгород <br />
                  Чаадаева 1У
                </>
              }
            />
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm text-gray-500">
          <span>© 2016 – 2022 pravt. Все права защищены</span>

          <div className="flex items-center gap-6">
            <span className="cursor-pointer">Политика безопасности</span>
            <div className="flex gap-2">
              <img src={visa} alt="visa" className="h-6" />
              <img src={mastercard} alt="mc" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* helpers */

function Menu({ title, items }) {
  return (
    <div data-aos="fade-up">
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        {items.map((item, i) => (
          <li key={i} className="hover:text-red-500 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Contact({ icon, text }) {
  return (
    <div className="flex gap-3 text-sm text-gray-600">
      <img src={icon} alt="" className="w-5 h-5 mt-1" />
      <div>{text}</div>
    </div>
  );
}
