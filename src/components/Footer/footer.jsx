import "./footer.css";

export default function Footer() {
  return (
    <footer className="animationEntry showAnimation">
      <section className="containerFooter">
        <section className="topFooter">
          <figure className="figureComponent logo styleComponent">
            <img className="styleImg" src="/pg_logo.png" alt="" />
          </figure>
          <article className="styleComponent">
            <h4>
              "Quizas ahora no estes donde deseas pero, mira atras y observa
              cuanto haz avanzado"
            </h4>
          </article>
          <article className="styleComponent artSocial">
            <div className="containerSocial">
              <figure className="figureComponent">
                <a href="#" target="_blank" aria-label="Redireccion a Facebook">
                  <img
                    src="/ic-face.svg"
                    alt="icono facebook"
                    className="styleImg"
                  />
                </a>
              </figure>
              <span>Facebook</span>
            </div>
            <div className="containerSocial">
              <figure className="figureComponent">
                <a
                  href="#"
                  target="_blank"
                  aria-label="Redireccion a Instagram">
                  <img
                    src="/ic-insta.svg"
                    alt="icono instagram"
                    className="styleImg"
                  />
                </a>
              </figure>
              <span>Instagram</span>
            </div>
            <div className="containerSocial">
              <figure className="figureComponent">
                <a href="#" target="_blank" aria-label="Redireccion a Whatsapp">
                  <img
                    src="/ic-whats.svg"
                    alt="icono whatsapp"
                    className="styleImg"
                  />
                </a>
              </figure>
              <span>Whatsapp</span>
            </div>
          </article>
        </section>
        <h3 className="styleSubDescription">
          &copy; 2026 Mopris Automotriz, todos los derechos reservados
        </h3>
      </section>
    </footer>
  );
}
