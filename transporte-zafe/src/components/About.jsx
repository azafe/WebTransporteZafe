import React from 'react';

export default function About() {
  return (
    <section id="nosotros" className="section" style={{background: 'white'}}>
      <div className="container">
        <h2 className="section-title">Nuestra Trayectoria</h2>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
            En <strong>Transporte Zafe</strong>, entendemos que cada carga es un compromiso. 
            Con base en San Miguel de Tucumán y más de <strong>15 años de experiencia</strong> en el rubro, 
            hemos consolidado una logística eficiente para conectar el Norte Argentino con los principales puertos y centros de consumo del país.
          </p>
          <p style={{fontSize: '1.1rem'}}>
            Nos especializamos en brindar seguridad, puntualidad y un trato personalizado, 
            entendiendo las necesidades específicas de las industrias azucarera, citrícola y comercial.
          </p>
        </div>
      </div>
    </section>
  );
}
