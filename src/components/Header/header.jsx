import "./header.css";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const windowWidth = window.innerWidth;
  const refToHeader = useRef(null);
  const [activeMenu, setActiveMenu] = useState(false);

  const showMenu = () => {
    windowWidth <= 1023 ? setActiveMenu(!activeMenu) : setActiveMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 15
        ? refToHeader.current.classList.add("addFilter")
        : refToHeader.current.classList.remove("addFilter");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }),
    [];

  return (
    <header ref={refToHeader} className={`${activeMenu ? "showMenu" : ""}`}>
      <figure className="figure-logo">
        <a href="#section-Home">
          <img loading="lazy" src="./pg_logo.png" alt="Logo Empresarial" />
        </a>
      </figure>
      <nav className="nav-header">
        <ul>
          <li>
            <a href="#section-Home" onClick={showMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#section-Service" onClick={showMenu}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#section-About" onClick={showMenu}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#section-Contact" onClick={showMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-menu">
        <button className="btn-menu" onClick={showMenu}></button>
      </div>
    </header>
  );
}
