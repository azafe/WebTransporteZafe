import React from 'react';

export default function About() {
  return (
    <section id="nosotros" className="section" style={{background: 'white'}}>
      <div className="container">
        <h2 className="section-title">Nuestra Trayectoria</h2>
        
        <div className="about-grid">
          {/* Columna Izquierda: Texto */}
          <div className="about-text">
            <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
              En <strong>Transporte Zafe</strong>, entendemos que cada carga es un compromiso. 
              Con base en San Miguel de Tucumán y más de <strong>15 años de experiencia</strong> en el rubro, 
              hemos consolidado una logística eficiente para conectar el <strong>Norte Argentino</strong> con los principales puertos y centros de consumo del país.
            </p>
            <p style={{fontSize: '1.1rem'}}>
              Nos especializamos en brindar seguridad, puntualidad y un trato personalizado, 
              entendiendo las necesidades específicas de las <strong>industrias azucarera, citrícola y comercial</strong>.
            </p>
            <div style={{marginTop: '20px'}}>
               <a href="#contacto" style={{color: '#eab308', fontWeight: 'bold', textDecoration: 'none'}}>Conocer más sobre nosotros →</a>
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="about-img-container">
            {/* Usamos heroimage como provisional, o si tienes una foto de equipo mejor */}
            <img src="/img/heroimage.jpg" alt="Equipo Transporte Zafe" className="about-img" />
          </div>
        </div>

      </div>
    </section>
  );
}
