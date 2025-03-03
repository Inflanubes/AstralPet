import "../styles/AboutSection.css";

export default function AboutUs() {
  return (
    <section className="about-us">
      {/* Imagen como fondo en lugar de elemento img */}
      <div className="about-image-container"></div>

      {/* Contenido de texto */}
      <div className="about-content">
        <h2 className="about-title">SOBRE NOSOTROS</h2>
        <p className="about-text">
          Al principio nos costó adaptarnos a nuestro perro de acogida, lo probé todo hasta que descubrí su carta astral. Desde entonces dejé de luchar contra él y empecé a adaptarme. Cambié su rutina, ajusté mi manera de comunicarme… y poco a poco, todo cambió. Donde antes había frustración, ahora había comprensión y unión entre nosotros.
        </p>
        <button className="about-button">Pide la tuya</button>
      </div>
    </section>
  );
}
