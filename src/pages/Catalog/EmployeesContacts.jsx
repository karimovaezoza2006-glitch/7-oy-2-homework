import React, { useEffect } from "react";
import AOS from "aos";

export default function EmployeesContacts() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* TITLE */}
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-14">
          Контакты сотрудников
        </h2>

        {/* ===== ДИРЕКТОРА (2 В РЯД) ===== */}
        <Section title="Директора">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12">
            <Person
              name="ЕДАПИН"
              surname="ДМИТРИЙ ГЕННАДЬЕВИЧ"
              role="Директор"
            />
            <Person
              name="ЖДАНКИН"
              surname="АЛЕКСЕЙ ВАСИЛЬЕВИЧ"
              role="Коммерческий директор"
            />
          </div>
        </Section>

        {/* ===== ОТДЕЛ ПРОДАЖ (4 В РЯД) ===== */}
        <Section title="Отдел продаж">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-14">
            <Person
              name="КРАСИЛЬНИКОВА"
              surname="ВИКТОРИЯ АЛЕКСАНДРОВНА"
              role="Рук. отдела продаж"
              phone="+7 930 626 00 89"
            />
            <Person
              name="САПУНОВА"
              surname="ЕКАТЕРИНА ЕВГЕНЬЕВНА"
              role="Менеджер по продажам"
              phone="+7 904 794 98 82"
            />
            <Person
              name="ГУЛЯЕВА"
              surname="НАДЕЖДА АНДРЕЕВНА"
              role="Менеджер по продажам"
              phone="+7 987 559 04 48"
            />
            <Person
              name="МАКАРЕНКОВА"
              surname="ЕЛЕНА ВЛАДИМИРОВНА"
              role="Менеджер по продажам"
              phone="+7 (831) 418-58-57"
            />
          </div>
        </Section>

        {/* ===== 4 ОТДЕЛА В ОДНУ ЛИНИЮ ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-16 mt-16">
          <MiniSection title="Отдел снабжения">
            <Person
              name="ИСАЕВ"
              surname="АНДРЕЙ ИГОРЕВИЧ"
              role="Рук. отдела снабжения"
              phone="+7 910 104 92 61"
            />
          </MiniSection>

          <MiniSection title="Транспортный отдел">
            <Person
              name="ЛЕДНЕВ"
              surname="ДМИТРИЙ ИГОРЕВИЧ"
              role="Рук. складского комплекса"
              phone="+7 952 779 21 20"
            />
          </MiniSection>

          <MiniSection title="КРО">
            <Person
              name="КУВШИНОВА"
              surname="СВЕТЛАНА ВАЛЕРЬЕВНА"
              role="Рук. отдела развития"
              phone="+7 920 295 25 10"
            />
          </MiniSection>

          <MiniSection title="Отдел развития">
            <Person
              name="ЦАРЕВ"
              surname="АЛЕКСЕЙ СЕРГЕЕВИЧ"
              role="Рук. отдела развития"
              phone="+7 999 076 36 89"
            />
          </MiniSection>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <div className="mb-20">
      <h3 data-aos="fade-right" className="text-red-500 text-lg mb-10">
        {title}
      </h3>
      {children}
    </div>
  );
}

function MiniSection({ title, children }) {
  return (
    <div>
      <h3 data-aos="fade-right" className="text-red-500 text-lg mb-10">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Person({ name, surname, role, phone }) {
  return (
    <div data-aos="fade-up" className="flex gap-6">
      {/* RED LINE */}
      <span className="w-[4px] bg-red-500 rounded-sm" />

      {/* CONTENT */}
      <div>
        <p className="font-extrabold text-base">{name}</p>
        <p className="text-sm mb-2">{surname}</p>

        <p className="text-red-500 text-sm mb-3">{role}</p>

        {phone && (
          <>
            <p className="text-sm font-medium">{phone}</p>
            <p className="text-xs text-gray-400">
              Viber, Whatsapp, Telegram
            </p>
          </>
        )}
      </div>
    </div>
  );
}
