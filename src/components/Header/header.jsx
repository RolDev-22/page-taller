import "./header.css";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const refToNav = useRef(null);

  function showMenu() {
    setShowNav(!showNav);
  }

  useEffect(() => {
    const addEffectHeader = () => {
      if (window.scrollY >= 100) {
        refToNav.current.classList.add("addEffect");
      } else {
        refToNav.current.classList.remove("addEffect");
      }
    };

    window.addEventListener("scroll", addEffectHeader);

    return () => {
      window.removeEventListener("scroll", addEffectHeader);
    };
  }),
    [];

  return (
    <header className={showNav ? "show" : ""}>
      <figure className="figure-logo">
        <a href="/">
          <img loading="lazy" src="./pg_logo.png" alt="Logo Empresarial" />
        </a>
      </figure>
      <nav ref={refToNav} className="nav-header">
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
