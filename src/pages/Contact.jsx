import "../style/contact-css.css";

const Contact = ({ formContact, mapContact }) => {
  return (
    <section id="section-Contact">
      <section className="container container-contact">
        <section className="title-contact animationEntry pupAnimation ">
          <h2 className="styleTitle">Contactanos</h2>
          <h3 className="styleSubTitle">Sera un gusto recibir tu mensaje</h3>
        </section>
        <section className="container-form animationEntry pupAnimation">
          <h2 className="styleTextMain styleParagraph">
            Formluario de contacto
          </h2>
          {formContact}
        </section>
        <section className="container-map animationEntry pupAnimation">
          <h2 className="styleTextMain styleParagraph">No te pierdas</h2>
          <p className="styleMain-p ">Te invitamos a visitarnos</p>
          <figure>{mapContact}</figure>
        </section>
      </section>
    </section>
  );
};

export { Contact };
