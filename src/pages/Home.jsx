import Hero from "../components/Hero";
import Categories from "../components/Categories";
import AboutCompany from "../components/AboutCompany";
import NewsSection from "../components/NewsSection";
import SafetySection from "../components/SafetySection";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <AboutCompany />
      <NewsSection />
      <SafetySection />
    </>
  );
}
