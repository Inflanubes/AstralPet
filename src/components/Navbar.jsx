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
          <img src="https://res.cloudinary.com/dflvexboa/image/upload/v1740918138/AstralPetWeb/yloewrategn0lbhjik2w.png" alt="Logo" className="logo" />
          <span className="brand-name">ASTRALPET</span>
        </div>

        {/* Menú de navegación */}
        <div className={`menu ${menuOpen ? "mobile-menu open" : "hidden md:flex"}`}>
          <Link to="home" smooth duration={500} className="menu-item">Home</Link>
          <Link to="about" smooth duration={500} className="menu-item">Qué es</Link>
          <Link to="team" smooth duration={500} className="menu-item">Sobre nosotros</Link>
          <Link to="contact" smooth duration={500} className="menu-item">Contacto</Link>
        </div>

        {/* Botón de contacto */}
        <Link to="contact" smooth duration={500} className="contact-button hidden md:block">
          Contact
        </Link>

        {/* Botón menú móvil */}
        <button className="menu-toggle md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}
