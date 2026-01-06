import React, { useEffect } from "react";
import AOS from "aos";

/* icons */
import phone from "../../assets/img/phone.svg";
import clock from "../../assets/img/clock.svg";
import location from "../../assets/img/location.svg";
import mail from "../../assets/img/mail.svg";
import vk from "../../assets/img/vk.svg";
import telegram from "../../assets/img/telegram.svg";

export default function ContactsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-14">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* breadcrumb */}
        <div
          data-aos="fade-down"
          className="text-sm text-gray-400 mb-6"
        >
          Главная <span className="mx-2">•</span>
          <span className="text-red-500">Контакты</span>
        </div>

        {/* title */}
        <h1
          data-aos="fade-up"
          className="text-3xl font-bold mb-12"
        >
          Контакты
        </h1>

        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-10 items-start">
          {/* LEFT INFO */}
          <div
            data-aos="fade-right"
            className="space-y-9"
          >
            {/* phone */}
            <Info
              icon={phone}
              title="Отдел продаж:"
              text={
                <>
                  <span className="font-semibold text-xl block">
                    7 (831) 418-58-57
                  </span>
                  <span className="font-semibold text-xl block">
                    7 (831) 418-58-56
                  </span>
                </>
              }
            />

            {/* time */}
            <Info
              icon={clock}
              title="Время работы:"
              text={
                <>
                  <span className="font-semibold text-xl block">
                    8:30 – 16:30
                  </span>
                  <span className="text-gray-500 text-base">
                    сб, вс – выходной
                  </span>
                </>
              }
            />

            {/* address */}
            <Info
              icon={location}
              title="Адрес:"
              text={
                <>
                  <span className="font-semibold text-xl block">
                    г. Нижний Новгород
                  </span>
                  <span className="text-lg block">Чаадаева 1У</span>
                  <a
                    href="https://yandex.ru/maps"
                    target="_blank"
                    className="text-blue-500 text-sm mt-1 inline-block"
                  >
                    Проложить маршрут
                  </a>
                </>
              }
            />

            {/* email */}
            <Info
              icon={mail}
              title="Email:"
              text={
                <a
                  href="mailto:pravto@pravto.biz"
                  className="text-blue-500 font-semibold text-lg"
                >
                  pravto@pravto.biz
                </a>
              }
            />

            {/* socials */}
            <div className="flex gap-5 pl-12">
              <img
                src={vk}
                alt="vk"
                className="w-6 cursor-pointer hover:opacity-70"
              />
              <img
                src={telegram}
                alt="telegram"
                className="w-6 cursor-pointer hover:opacity-70"
              />
            </div>
          </div>

          {/* RIGHT MAP (KATTA, RASMDAGIDEK) */}
          <div
            data-aos="fade-left"
            className="w-full h-[520px] xl:h-[600px] rounded-xl overflow-hidden"
          >
            <iframe
              title="map"
              src="https://yandex.ru/map-widget/v1/?ll=43.937977%2C56.317923&z=16&l=map"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* COMPONENT */

function Info({ icon, title, text }) {
  return (
    <div className="flex gap-5 items-start">
      <img src={icon} alt="" className="w-9 h-9 mt-1" />
      <div>
        <p className="text-gray-500 mb-1">{title}</p>
        <div className="text-black leading-snug">{text}</div>
      </div>
    </div>
  );
}
