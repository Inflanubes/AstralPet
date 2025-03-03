import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          CARTA ASTRAL <br />
          <span className="highlight">PERSONALIZADA</span> <br />
          PARA TU MASCOTA
        </h1>
        <p>
          ¿Alguna vez has sentido que tu mascota y tú tienen un vínculo especial? ¿Te has preguntado por qué actúa de
          cierta manera o cómo mejorar su bienestar?
        </p>
        <p>
          Con nuestra Carta Astral para Mascotas, descubrirás su personalidad, sus necesidades emocionales y la
          conexión única que comparte contigo a través de la astrología.
        </p>
        <button className="cta-button">
          ¡Pídela ya! <span className="cta-arrow">➜</span>
        </button>
      </div>
    </section>
  );
} 
