import "../style/home-css.css";

const Home = () => {
  return (
    <section id="section-Home">
      <svg width="0" height="0">
        <clipPath id="tallerClip" clipPathUnits="objectBoundingBox">
          <path
            d="
      M 0,0.22
      L0.20,0.22
      A .05 .05 0 0 0
      0.25,0.17
      L0.25,0
      L1,0
      L1,1
      L0,1
      L0,0.22
      Z"
          />
        </clipPath>
      </svg>
      <div className="container container-home">
        <article className="container-information">
          <h2>TALLER AUTOMOTRIZ MOPRIS</h2>
          <h3>
            «No siempre es posible ser el mejor, pero siempre es posible mejorar
            tu propio rendimiento»
          </h3>
        </article>
        <article className="container-schedule">
          <h3>Horario</h3>
          <h4>Lunes - Sabado</h4>
          <h5>7:00 a.m. - 5:00 p.m.</h5>
        </article>
        <article className="container-social">
          <figure>
            <a href="#" title="Siguenos en Instagram">
              <img src="/ic-insta.svg" alt="logo-instagram" />
            </a>
          </figure>
          <figure>
            <a href="#" title="Siguenos en Facebook">
              <img src="/ic-face.svg" alt="logo-facebook" />
            </a>
          </figure>
          <figure>
            <a href="#" title="Siguenos en Whatsapp">
              <img src="/ic-whats.svg" alt="logo-whatsapp" />
            </a>
          </figure>
        </article>
      </div>
    </section>
  );
};

export { Home };
