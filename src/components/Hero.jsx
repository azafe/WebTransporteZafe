import React from 'react';

export default function Hero() {
  const mensaje = "Hola, necesito una cotización de transporte.";
  const telefono = "5493815074390";
  const whatsappUrl = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <section id="inicio" className="hero" style={{
      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/img/heroimage.jpg')`
    }}>
      <div className="container">
        <h1>Soluciones Logísticas de Tucumán, a todo el país</h1>
        <p>15 años de experiencia moviendo el desarrollo de Argentina.</p>
        
        <div style={{marginTop: '30px'}}>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary" 
            style={{fontSize: '1.1rem', padding: '15px 30px'}}
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
