import "../style/about-css.css";

const About = () => {
  return (
    <section id="section-About">
      <section className="container container-about">
        <section className="presentation-about mainStyle">
          <article className="animationEntry leftAnimation">
            <h2 className="styleTitleH2">Sobre Nosotros</h2>
            <h3 className="styleTitleH3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              corporis delectus, illum saepe quod quo est ducimus? Tenetur nisi,
              distinctio quam impedit voluptas eligendi
            </h3>
          </article>
          <figure className="animationEntry rigthAnimation">
            <img src="/bg-about.jpg" alt="imagen sobre nosotros" />
          </figure>
        </section>
        <section className="description-about mainStyle">
          <article className="description animationEntry leftAnimation">
            <img src="/ic-expe.svg" alt="logo-descriptivo" />
            <h2 className="styleTitleH2">Experiencia</h2>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex
              officia accusamus sed nemo autem dolorem magni? Vero, officia?
              Nulla, amet corrupti. Voluptas soluta nulla eum nihil tempore amet
              quas!
            </h4>
          </article>
          <article className="description animationEntry showAnimation">
            <img src="/ic-cality.svg" alt="logo-descriptivo" />
            <h2 className="styleTitleH2">Servicio de calidad</h2>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex
              officia accusamus sed nemo autem dolorem magni? Vero, officia?
              Nulla, amet corrupti. Voluptas soluta nulla eum nihil tempore amet
              quas!
            </h4>
          </article>
          <article className="description animationEntry rigthAnimation">
            <img src="/ic-profes.svg" alt="logo-descriptivo" />
            <h2 className="styleTitleH2">Profesionales</h2>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex
              officia accusamus sed nemo autem dolorem magni? Vero, officia?
              Nulla, amet corrupti. Voluptas soluta nulla eum nihil tempore amet
              quas!
            </h4>
          </article>
        </section>
      </section>
    </section>
  );
};

export { About };
