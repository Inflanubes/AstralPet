import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import AboutProduct from "./components/AboutProduct";
import AtributeSection from "./components/AtributeSection";
import FooterComponent from "./components/FooterComponent";

import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <ProductSection />
      <section id="about-product">
        <AboutProduct />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="security">
        <AtributeSection />
      </section>
      <section id="contact">
        <FooterComponent />
      </section>
    </>
  );
}

export default App;
