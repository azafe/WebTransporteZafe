import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>

      <div className="hero-content">
        <span className="hero-tag">Logística Profesional</span>
        
        <h1 className="hero-title">
          CONECTAMOS <br /> EL NORTE AL <br />
          <span className="hero-highlight">PAÍS</span>
        </h1>
        
        {/* Eliminamos el texto largo para limpiar la visual */}
        
        <a href="#contacto" className="hero-btn">
          Cotizar Ahora
        </a>
      </div>
    </section>
  );
};

export default Hero;
