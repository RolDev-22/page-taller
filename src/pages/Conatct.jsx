import "../style/contact-css.css";

const Contact = () => {
  return (
    <section id="section-Contact">
      <section className="container container-contact">
        <section className="title-contact animationEntry pupAnimation ">
          <h2 className="styleTitleH2">Contactanos</h2>
          <h3 className="styleTitleH3">Sera un gusto recibir tu mensaje</h3>
        </section>
        <section className="container-form animationEntry pupAnimation">
          <h2 className="styleTitleH2">Formluario de contacto</h2>
          <form action="/" className="form-contact ">
            <div className="container-input">
              <label htmlFor="input-name">Nombre Completo</label>
              <input type="text" name="input-name" id="input-name" />
            </div>
            <div className="container-input">
              <label htmlFor="input-mail">Correo Electrónico</label>
              <input type="text" name="input-mail" id="input-mail" />
            </div>
            <div className="container-input">
              <label htmlFor="input-subject">Motivo</label>
              <input type="text" name="input-subject" id="input-subject" />
            </div>
            <div className="container-input">
              <label htmlFor="input-message">Mensaje</label>
              <textarea name="input-message" id="input-message"></textarea>
            </div>
            <button className="btn-form">Enviar</button>
          </form>
        </section>
        <section className="container-mapa animationEntry pupAnimation">
          <h2 className="styleTitleH2">Contactanos</h2>
          <p className="styleMain-p ">Te invitamos a visitarnos</p>
          <figure>
            <canvas className="canvas-map"></canvas>
            <figcaption>Mapa dinámico con opciones de zoom</figcaption>
          </figure>
        </section>
      </section>
    </section>
  );
};

export { Contact };
