import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import AboutProduct from "./components/AboutProduct";


import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
      <AboutSection />
      <AboutProduct />
    </>
  );
}

export default App;
