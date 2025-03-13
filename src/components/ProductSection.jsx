import { useState, useEffect, useRef } from "react";
import "../styles/ProductSection.css";

const steps = [
  {
    id: "01",
    title: "¿Cómo funciona?",
    text: "Solo necesitas enviarnos la fecha y, si la tienes, la hora y lugar de nacimiento de tu mascota en el formulario que te pasaremos. En pocos días, recibirás un informe personalizado con toda la información que necesitas para conocerlo mejor y fortalecer vuestra unión.",
    color: "bg-[#0e717d]",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "¿Qué incluye tu Carta Astral?",
    text: "Análisis de su carta natal y cómo influye en su comportamiento, características principales de su personalidad, consejos personalizados para mejorar su bienestar y comunicación, relación energética entre tú y tu mascota.",
    color: "bg-[#bdbdff]",
    textColor: "text-[#0e717d]",
  },
  {
    id: "03",
    title: "¿Por qué hacer una Carta Astral para tu mascota?",
    text: "Entenderás mejor su carácter y sus reacciones, podrás mejorar su bienestar con consejos específicos, fortalecerás tu vínculo con él/ella, descubrirás la misión especial que tiene en tu vida.",
    color: "bg-[#0b3c4a]",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "Un regalo para los dos",
    text: "Dicen que los animales no hablan, pero quien ha amado a una mascota sabe que no necesitan palabras para comunicarse. Una carta astral no es solo un análisis, es comprender lo que vinieron a enseñarnos y fortalecer aún más ese vínculo único que nos une a ellos.",
    color: "bg-[#cf8b2e]",
    textColor: "text-[#0b3c4a]",
  },
];

export default function ProductSection() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTextFixed, setIsTextFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardsContainerRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
      const lastCard = cardsContainerRef.current.lastElementChild;
      const lastCardBottom = lastCard.getBoundingClientRect().bottom;

      if (sectionTop <= 0 && lastCardBottom > window.innerHeight) {
        setIsTextFixed(true);
      } else {
        setIsTextFixed(false);
      }

      const containerHeight = cardsContainerRef.current.offsetHeight;
      const index = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor((-sectionTop / containerHeight) * steps.length))
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="product-section bg-white rounded-3xl">
      {/* La parte izquierda (texto) ahora solo se fija cuando debe */}
      <div className={`product-info ${isTextFixed ? "fixed-text" : ""}`}>
        <p className="section-subtitle">CARTA ASTRAL</p> 
        <p className="title">Cómo adquirirla y en qué consiste.</p>
        <p className="description">
          <strong>¿Cómo la consigo?</strong><br />
          Tras realizar la compra recibirás un enlace al formulario donde ingresarás los datos de tu mascota. Una vez completado, recibirás en tu email el documento digital con la carta astral de tu mascota.
        </p>
        <p className="description">
          Ahora solo tienes que imprimirlo o guardarlo y sobre todo… ¡No olvides seguir nuestros consejos de cuidados!
        </p>
        {/* Botón modificado para abrir el enlace */}
        <button className="cta" onClick={() => window.open("https://form.typeform.com/to/RknAmWzy", "_blank")}>
          ¡Pídela ya!
        </button>
      </div>

      {/* Tarjetas, estas siguen su scroll normal */}
      <div className="cards-container" ref={cardsContainerRef}>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`card ${step.color} ${step.textColor} ${index === activeIndex ? "opaque" : "translucent"}`}
            style={{
              transform: `translateY(${Math.max(0, (activeIndex - index) * 100)}px)`,
              position: index === activeIndex ? "sticky" : "relative",
              top: index === activeIndex ? "120px" : "auto",
              marginBottom: "50px", 
              padding: "20px"
            }}
          >
            <span className="step-number" style={{ fontSize: "34px", marginBottom: "80px" }}>{step.id}</span>
            <h3 className="step-title" style={{ fontSize: "20px"}}>{step.title}</h3>
            <p className="step-text" style={{ fontSize: "17px" }}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
