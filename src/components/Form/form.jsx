import "./form.css";

export default function Form() {
  return (
    <form
      action={(e) => {
        e.preventDefault;
      }}
      className="form-contact">
      <div className="container-input">
        <label className="styleTextMain styleParagraph" htmlFor="input-name">
          Nombre Completo
        </label>
        <input
          type="text"
          name="input-name"
          className="inputClass"
          id="input-name"
          placeholder="Nombre Completo"
          required
        />
      </div>
      <div className="container-input">
        <label className="styleTextMain styleParagraph" htmlFor="input-mail">
          Correo Electrónico
        </label>
        <input
          type="email"
          name="input-mail"
          className="inputClass"
          id="input-mail"
          placeholder="Ejmp@dominio.com"
          required
        />
      </div>
      <div className="container-input">
        <label className="styleTextMain styleParagraph" htmlFor="input-subject">
          Motivo
        </label>
        <input
          type="text"
          name="input-subject"
          className="inputClass"
          id="input-subject"
          placeholder="Motivo del mensaje"
          required
        />
      </div>
      <div className="container-input">
        <label className="styleTextMain styleParagraph" htmlFor="input-message">
          Mensaje
        </label>
        <textarea
          name="input-message"
          className="inputClass"
          id="input-message"
          placeholder="Redacta tu mensaje"
          required></textarea>
      </div>
      <button className="styleBtn btn-form">Enviar</button>
    </form>
  );
}
