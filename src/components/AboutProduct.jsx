import { useState, useEffect, useRef } from "react";
import "../styles/AboutProduct.css";

const steps = [
  {
    id: "01",
    title: "Signo solar",
    text: "Su esencia y personalidad principal. Define su carácter general y su forma de comportarse en el día a día.",
    color: "#2b9595",
  },
  {
    id: "02",
    title: "Ascendente",
    text: "Su primera impresión y cómo se relaciona con los demás. Indica cómo se muestra ante el mundo.",
    color: "#bdbdff",
  },
  {
    id: "03",
    title: "Influencia de los planetas",
    text: "Mercurio: Cómo se comunica y aprende.<br /><br />Venus: Cómo demuestra afecto y qué le gusta.<br /><br />Marte: Su nivel de energía y cómo maneja la acción o el instinto.<br /><br />Júpiter y Saturno: Lecciones de vida y propósito.",
    color: "#0e4156",
  },
  {
    id: "04",
    title: "Recomendaciones personalizadas",
    text: "Consejos prácticos según su personalidad astrológica. Rutina ideal, actividades recomendadas y más.",
    color: "#cf8b2e",
  },
];

export default function AboutProduct() {
  const sectionRef = useRef(null);
  const cardsaContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling...");

      if (!sectionRef.current || !cardsaContainerRef.current) return;
  
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const lastCard = cardsaContainerRef.current.lastElementChild;
      const lastCardBottom = lastCard.getBoundingClientRect().bottom;
  
      setIsSticky(sectionTop <= 0 && lastCardBottom > window.innerHeight);
  
      const containerHeight = cardsaContainerRef.current?.offsetHeight || 1;
      const scrollProgress = Math.abs(sectionRef.current.getBoundingClientRect().top - window.innerHeight / 2);

      let index = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor((scrollProgress / (containerHeight / steps.length))))
      );
      
      // Si el usuario llega a la última tarjeta, mostrar todas
      if (index === steps.length - 1) {
        index = steps.length; // Permitir que todas las tarjetas sean visibles
      }
      
      console.log("Section Top:", sectionTop);
      console.log("Last Card Bottom:", lastCardBottom);
      console.log("Container Height:", containerHeight);
      console.log("New Active Index:", index);
      console.log("Scroll Progress:", scrollProgress);
  
      setActiveIndex(index);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section ref={sectionRef} className="new-section">
      <div className="left-content">
        <div className={`text-content ${isSticky ? "sticky" : ""}`}>
          <h2 className="section-title">¿QUÉ TIENE LA CARTA ASTRAL?</h2>
          <h3 className="section-subtitle">Vamos por partes...</h3>
        </div>
        <div className="cardsa-container" ref={cardsaContainerRef}>
          {steps.map((step, index) => (
            <div key={step.id} className={`carda ${index <= activeIndex ? "active" : ""}`}>
              <h3 style={{ color: step.color }}>{step.title}</h3>
              <p style={{ color: "black" }} dangerouslySetInnerHTML={{ __html: step.text }}></p>
            </div>
          ))}
        </div>
      </div>
      <div className="right-content">
        <div className="fixed-image">
          <img src="https://res.cloudinary.com/dflvexboa/image/upload/v1741173333/AstralPetWeb/azt5whxjcibivuoh3awj.png" alt="Carta Astral" />
        </div>
      </div>
    </section>
  );
}
