import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "navbar-scrolled" : "navbar-default"}`}>
      <div className="navbar-container">
        {/* Logo y nombre */}
        <div className="logo-container">
          <img 
            src="https://res.cloudinary.com/dflvexboa/image/upload/v1740994866/AstralPetWeb/uscwnx5kj4o6u5egrbqj.png" 
            alt="Logo" 
            className="logo" 
          />
          <span className="brand-name">ASTRALPET</span>
        </div>

        {/* Menú de navegación */}
        <div className={`menu ${menuOpen ? "mobile-menu open" : "hidden md:flex"}`}>
          <Link to="hero" smooth={true} duration={500} spy={true} hashSpy={true} offset={-70} className="menu-item">Home</Link>
          <Link to="about-product" smooth={true} duration={500} spy={true} hashSpy={true} offset={-70} className="menu-item">Producto</Link>
          <Link to="about" smooth={true} duration={500} spy={true} hashSpy={true} offset={-70} className="menu-item">Sobre nosotros</Link>
          <Link to="security" smooth={true} duration={500} spy={true} hashSpy={true} offset={-70} className="menu-item">Seguridad</Link>
          <Link to="contact" smooth={true} duration={500} spy={true} hashSpy={true} offset={-70} className="menu-item">Contacto</Link>
        </div>

        {/* Botón menú móvil */}
        <button className="menu-toggle md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}



