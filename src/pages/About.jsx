import "../style/about-css.css";

const About = () => {
  return (
    <section id="section-About">
      <section className="container container-about">
        <section className="presentation-about mainStyle">
          <article className="animationEntry leftAnimation">
            <h2 className="styleTitle">Sobre Nosotros</h2>
            <h3 className="styleSubTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              corporis delectus, illum saepe quod quo
            </h3>
          </article>
          <figure className="animationEntry rigthAnimation">
            <img src="/bg-about.jpg" alt="imagen sobre nosotros" />
          </figure>
        </section>
        <section className="description-about mainStyle">
          <article className="animationEntry leftAnimation">
            <figure className="contentIconStile">
              <img
                className="styleImg"
                src="/ic-expe.svg"
                alt="logo-descriptivo"
              />
            </figure>
            <h2 className="styleTitle">Experiencia</h2>
            <h4 className="styleTextMain styleParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex
              officia accusamus sed nemo autem dolorem magni? Vero, officia?
              Nulla, amet corrupti. Voluptas soluta nulla eum nihil tempore amet
              quas!
            </h4>
          </article>
          <article className="animationEntry showAnimation">
            <figure className="contentIconStile">
              <img
                className="styleImg"
                src="/ic-cality.svg"
                alt="logo-descriptivo"
              />
            </figure>
            <h2 className="styleTitle">Calidad</h2>
            <h4 className="styleTextMain styleParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex
              officia accusamus sed nemo autem dolorem magni? Vero, officia?
              Nulla, amet corrupti. Voluptas soluta nulla eum nihil tempore amet
              quas!
            </h4>
          </article>
          <article className="animationEntry rigthAnimation">
            <figure className="contentIconStile">
              <img
                className="styleImg"
                src="/ic-profes.svg"
                alt="logo-descriptivo"
              />
            </figure>
            <h2 className="styleTitle">Profesional</h2>
            <h4 className="styleTextMain styleParagraph">
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
