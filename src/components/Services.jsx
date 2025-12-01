import React from 'react';
import { Package, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <Package size={40} />, title: 'Cargas Generales', desc: 'Transporte de mercadería paletizada y a granel.' },
    { icon: <MapPin size={40} />, title: 'Cobertura Nacional', desc: 'Desde Tucumán hacia todo el territorio argentino.' },
    { icon: <Clock size={40} />, title: 'Justo a Tiempo', desc: 'Compromiso con los plazos de entrega de su cadena logística.' },
    { icon: <ShieldCheck size={40} />, title: 'Seguridad Total', desc: 'Unidades con seguimiento satelital y choferes calificados.' },
  ];

  return (
    <section id="servicios" className="section">
      <div className="container">
        <h2 className="section-title">Servicios</h2>
        <div className="services-grid">
          {services.map((s, index) => (
            <div key={index} className="service-card">
              <div className="icon-box">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
