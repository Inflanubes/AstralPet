import React from "react";
import { Link } from "react-scroll";
import "../styles/FooterComponent.css";

const FooterComponent = () => {
  return (
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
              <li><a href="https://www.instagram.com/astralpes">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>CONTACT</h3>
            <p>contact@astralpet.es</p>
          </div>
          <div className="footer-column">
            <h3>POLICY</h3>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-note">©Be Banana LLC.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;


