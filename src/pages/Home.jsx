import "../style/home-css.css";

const Home = () => {
  return (
    <section id="section-Home" className="sectionMain">
      <section className="container container-home">
        <article className="container-information">
          <h1 className="styleTitle">TALLER AUTOMOTRIZ MOPRIS</h1>
          <h3 className="styleSubTitle">
            «No siempre es posible ser el mejor, pero siempre es posible mejorar
            tu propio rendimiento»
          </h3>
        </article>
        <article className="container-social">
          <figure>
            <a href="#" title="Siguenos en Instagram">
              <img
                src="/ic-insta.svg"
                alt="logo-instagram"
                className="styleImg"
              />
            </a>
          </figure>
          <figure>
            <a href="#" title="Siguenos en Facebook">
              <img
                src="/ic-face.svg"
                alt="logo-facebook"
                className="styleImg"
              />
            </a>
          </figure>
          <figure>
            <a href="#" title="Siguenos en Whatsapp">
              <img
                src="/ic-whats.svg"
                alt="logo-whatsapp"
                className="styleImg"
              />
            </a>
          </figure>
        </article>
        <article className="container-schedule">
          <h3 className="styleTextMain styleParagraph">Horario</h3>
          <h4 className="styleTextMain styleDescription">Lunes - Sabado</h4>
          <h5 className="styleTextMain styleSubDescription">
            7:00 a.m. - 5:00 p.m.
          </h5>
        </article>
      </section>
    </section>
  );
};

export { Home };
