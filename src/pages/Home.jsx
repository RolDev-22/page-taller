import "../style/home-css.css";

const Home = () => {
  return (
    <section id="section-Home">
      <svg width="0" height="0">
        <clipPath id="clip" clipPathUnits="objectBoundingBox">
          <path d="M0,0.1 L0.25,0.1 A0.05,0.05 0,0 0.30,0.05 L0.30,0 L1,0 L1,1 L0,1 Z" />
        </clipPath>
      </svg>

      <div className="container container-home">Hola home</div>
    </section>
  );
};

export { Home };
