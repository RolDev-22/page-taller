import "../style/contact-css.css";

const Contact = ({ formContact, mapContact }) => {
  return (
    <section id="section-Contact">
      <section className="container container-contact">
        <section className="title-contact animationEntry pupAnimation">
          <h2 className="styleTitle">Contactanos</h2>
          <h3 className="styleSubTitle">Sera un gusto recibir tu mensaje</h3>
        </section>
        <section className="info-contact animationEntry pupAnimation">
          <section className="info-data">
            <div className="containerData">
              <figure className="contentIconStile">
                <img
                  src="/ic-phone.svg"
                  alt="icono telefono"
                  className="styleImg"
                />
              </figure>
              <span>2788-88-88</span>
            </div>
            <div className="containerData">
              <figure className="contentIconStile">
                <img
                  src="/ic-what.svg"
                  alt="icono whatsapp"
                  className="styleImg"
                />
              </figure>
              <span>8888-88-88</span>
            </div>
            <div className="containerData">
              <figure className="contentIconStile">
                <img src="/ic-mail.svg" alt="icono mail" className="styleImg" />
              </figure>
              <span>mps@gmail.com</span>
            </div>
          </section>
          <section className="containerSchedule">
            <h3 className="styleTextMain styleParagraph">Horario</h3>
            <h4 className="styleTextMain styleDescription">Lunes - Sabado</h4>
            <h5 className="styleTextMain styleSubDescription">
              7:00 a.m. - 5:00 p.m.
            </h5>
          </section>
        </section>
        <section className="container-form animationEntry pupAnimation">
          <h2 className="styleTextMain styleParagraph">
            Formluario de contacto
          </h2>
          {formContact}
        </section>
        <section className="container-map animationEntry pupAnimation">
          <h2 className="styleTextMain styleParagraph">No te pierdas</h2>
          <h4 className="styleTextMain styleParagraph ">
            Te invitamos a visitarnos
          </h4>
          <h6 className="styleTextMain styleDescription">
            <figure>
              <img
                className="styleImg"
                src="/ic-mark.svg"
                alt="logo marker point"
              />
            </figure>
            450m sur del nuevo pali, Puerto Cortes
          </h6>
          <figure>{mapContact}</figure>
        </section>
      </section>
    </section>
  );
};

export { Contact };
