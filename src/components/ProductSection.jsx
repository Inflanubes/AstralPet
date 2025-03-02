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
    text: "\u2022 Análisis de su carta natal y cómo influye en su comportamiento.\n\u2022 Características principales de su personalidad.\n\u2022 Consejos personalizados para mejorar su bienestar y comunicación.\n\u2022 Relación energética entre tú y tu mascota.\n\u2022 Documento digital detallado y personalizado.",
    color: "bg-[#bdbdff]",
    textColor: "text-[#0e717d]",
  },
  {
    id: "03",
    title: "¿Por qué hacer una Carta Astral para tu mascota?",
    text: "\u2022 Entenderás mejor su carácter y sus reacciones.\n\u2022 Podrás mejorar su bienestar con consejos específicos.\n\u2022 Fortalecerás tu vínculo con él/ella.\n\u2022 Descubrirás la misión especial que tiene en tu vida.",
    color: "bg-[#0b3c4a]",
    textColor: "text-white",
  },
  {
    id: "04",
    title: "Un regalo para los dos",
    text: "Dicen que los animales no hablan, pero quien ha amado a una mascota sabe que no necesitan palabras para comunicarse. Una carta astral no es solo un análisis, es comprender lo que vinieron a enseñarnos y de fortalecer aún más ese vínculo único que nos une a ellos.",
    color: "bg-[#cf8b2e]",
    textColor: "text-[#0b3c4a]",
  },
];

export default function ProductSection() {
  const sectionRef = useRef(null);
  const [stuckIndex, setStuckIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
      if (sectionTop <= 0 && sectionBottom >= window.innerHeight) {
        setStuckIndex((prevIndex) => (prevIndex < steps.length - 1 ? prevIndex + 1 : prevIndex));
      } else {
        setStuckIndex(-1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="product-section" ref={sectionRef}>
      <div className="product-info">
        <h2 className="title">Cómo adquirirla y en qué consiste.</h2>
        <p className="description">
          <strong>¿Cómo la consigo?</strong><br />
          Tras realizar la compra recibirás un enlace al formulario donde ingresarás los datos de tu mascota.
          Una vez completado, recibirás en tu email el documento digital con la carta astral de tu mascota.
        </p>
        <button className="cta">¡Pídela ya!</button>
      </div>
      <div className="cards-container">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`card ${step.color} ${step.textColor} ${index === stuckIndex ? "opaque" : "translucent"}`}
          >
            <span className="step-number">{step.id}</span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
