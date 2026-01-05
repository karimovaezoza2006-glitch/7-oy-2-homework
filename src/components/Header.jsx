import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow">
      <div className="container mx-auto flex items-center justify-between h-[90px] px-4">

        {/* LOGO */}
        <img src={logo} alt="PRAM" className="h-20" />

        {/* NAV */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <NavLink to="/catalog">КАТАЛОГ</NavLink>
          <NavLink to="/">ГЛАВНАЯ</NavLink>
          <NavLink to="/about">О КОМПАНИИ</NavLink>
          <NavLink to="/partners">ПАРТНЕРАМ</NavLink>
          <NavLink to="/news">НОВОСТИ</NavLink>
          <NavLink to="/contacts">КОНТАКТЫ</NavLink>
        </nav>

      </div>
    </header>
  );
}
