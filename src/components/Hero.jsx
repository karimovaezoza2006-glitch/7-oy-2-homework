import heroImg from "../assets/img/hero.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#2b2f36] to-[#1e2228] text-white">
      <div className="container mx-auto px-4 py-20 flex items-center">

     

        {/* IMAGE */}
        <div >
          <img src={heroImg} alt="Автозапчасти" />
        </div>

      </div>
    </section>
  );
}
