import "../styles/AtributeSection.css";
import { FaPaw, FaShieldAlt, FaClock } from "react-icons/fa";

export default function CustomSection() {
  return (
    <section className="custom-section">
      {/* Parte blanca */}
      <div className="white-section">
        <h2 className="section-main-title">SIEMPRE CONECTADOS</h2>
        <div className="info-blocks-container">
          <div className="info-block">
            <FaPaw className="icon" />
            <h3>Información 100% Personalizada</h3>
            <p>
              Cada carta astral se crea de forma única, basada en la fecha de nacimiento de tu mascota, para ofrecerte un análisis exclusivo y preciso.
            </p>
          </div>
          <div className="info-block">
            <FaShieldAlt className="icon" />
            <h3>Seguridad y Privacidad</h3>
            <p>
              Tus datos y los de tu mascota son confidenciales. Nos comprometemos a manejarlos con el máximo respeto y protección.
            </p>
          </div>
          <div className="info-block">
            <FaClock className="icon" />
            <h3>Entrega Rápida y Garantizada</h3>
            <p>
              Recibe la carta astral en un plazo de 48 horas, con un diseño profesional y fácil de interpretar.
            </p>
          </div>
        </div>
      </div>

      {/* Parte lila */}
      <div className="purple-section">
        <div className="left">
          <h2>¿Listo para empezar?</h2>
        </div>
        <div className="right">
          <p>
            Pide ya la carta astral personalizada de tu mascota y pon nuestros consejos en práctica. Cuida de tu mayor tesoro de la manera más adecuada a su personalidad.
          </p>
          <button className="cta-button">Cómprala ya <span>&#10132;</span></button>
        </div>
      </div>
    </section>
  );
}
