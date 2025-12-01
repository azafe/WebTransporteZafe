import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="hero" style={{
      // Aquí usamos tu imagen 'heroimage.jpg'
      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/img/heroimage.jpg')`
    }}>
      <div className="container">
        <h1>Soluciones Logísticas de Tucumán, a todo el país</h1>
        <p>15 años de experiencia moviendo el desarrollo de Argentina.</p>
        <a href="#contacto" className="btn btn-primary" style={{fontSize: '1.2rem'}}>Contactar Ahora</a>
      </div>
    </section>
  );
}