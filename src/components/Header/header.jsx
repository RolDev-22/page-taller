import "./header.css";
import React, { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  const showMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header className={`${activeMenu ? "showMenu" : ""}`}>
      <figure className="figure-logo">
        <a href="#section/Home">
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
              Sobre Nosotros
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
