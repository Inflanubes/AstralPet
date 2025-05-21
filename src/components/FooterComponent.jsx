import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/FooterComponent.css";
import { Terms } from "./Terms";
import { Privacy } from "./Privacy";
import { Legal } from "./Legal";
import LegalModal from "./LegalModal";

const FooterComponent = () => {
  const [modalContent, setModalContent] = useState(null);
  const closeModal = () => setModalContent(null);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <h1 className="footer-title">ASTRAL PET</h1>
          <div className="footer-columns">
            <div className="footer-column">
              <h3>QUICK LINKS</h3>
              <ul>
                <li><Link to="hero" smooth={true} duration={500} spy={true} offset={-70}>Home</Link></li>
                <li><Link to="about-product" smooth={true} duration={500} spy={true} offset={-70}>Producto</Link></li>
                <li><Link to="about" smooth={true} duration={500} spy={true} offset={-70}>Sobre nosotros</Link></li>
                <li><Link to="security" smooth={true} duration={500} spy={true} offset={-70}>Seguridad</Link></li>
                <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-70}>Contacto</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>SOCIAL</h3>
              <ul>
                <li><a href="https://www.instagram.com/astralpets" target="_blank" rel="noreferrer">Instagram</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>CONTACT</h3>
              <p>contact@astralpet.es</p>
            </div>

            <div className="footer-column">
              <h3>POLÍTICAS</h3>
              <ul>
                <li><button onClick={() => setModalContent("terms")} className="footer-link-btn">Términos y Condiciones</button></li>
                <li><button onClick={() => setModalContent("privacy")} className="footer-link-btn">Política de Privacidad</button></li>
                <li><button onClick={() => setModalContent("legal")} className="footer-link-btn">Aviso Legal</button></li>
              </ul>
            </div>
          </div>
          <p className="footer-note">©Be Banana LLC.</p>
        </div>
      </footer>

      {/* Modal que aparece al hacer clic */}
      <LegalModal isOpen={!!modalContent} onClose={closeModal}>
        {modalContent === "terms" && <Terms />}
        {modalContent === "privacy" && <Privacy />}
        {modalContent === "legal" && <Legal />}
      </LegalModal>
    </>
  );
};

export default FooterComponent;
