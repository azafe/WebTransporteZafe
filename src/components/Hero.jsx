import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Fondo con el gradiente integrado en CSS */}
      <div className="hero-background"></div>

      <div className="hero-content">
        <span className="hero-tag">Logística Profesional</span>
        
        <h1 className="hero-title">
          CONECTAMOS EL NORTE <br />
          CON <span className="hero-highlight">TODO EL PAÍS</span>
        </h1>
        
        <p className="hero-subtitle">
          Más de 15 años brindando soluciones de transporte seguras y eficientes para las industrias líderes de Tucumán.
        </p>
        
        <a href="#contacto" className="hero-btn">
          Solicitar Cotización <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
