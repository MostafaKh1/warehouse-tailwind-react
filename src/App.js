// animations Aos
import Aos from "aos";
import "aos/dist/aos.css";

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
