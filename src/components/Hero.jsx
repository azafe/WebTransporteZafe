import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: "url('/img/heroimage.jpg')" }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          SOLUCIONES LOGÍSTICAS <br /> DE TUCUMÁN AL PAÍS
        </h1>
        <p className="hero-subtitle">
          15 años conectando el desarrollo del Norte Argentino con seguridad y eficiencia.
        </p>
        <a href="#contacto" className="hero-btn">
          Cotizar Ahora
        </a>
      </div>
    </section>
  );
};

export default Hero;
