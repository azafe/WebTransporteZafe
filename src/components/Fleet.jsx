import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FleetCard from './FleetCard';

export default function Fleet() {
  const [activeTab, setActiveTab] = useState('camiones');
  const scrollRef = useRef(null);

  const fleetData = {
    camiones: [
      { id: 1, title: 'Volkswagen 17.280', desc: 'Potencia y confiabilidad para larga distancia.', capacity: 'Carga útil: 17 Ton | Pallets: 12', image: '/img/VW17280.jpg' },
      { id: 2, title: 'Mercedes Benz Atego 1726', desc: 'Versatilidad para distribución y carga media.', capacity: 'Carga útil: 10 Ton | Pallets: 10', image: '/img/Atego1726.jpg' },
      { id: 3, title: 'Iveco Tector 170E28', desc: 'Eficiencia para logística regional.', capacity: 'Carga útil: 12 Ton | Pallets: 12', image: '/img/iveco17280.JPG' },
    ],
    equipos: [
      { id: 4, title: 'Acoplado Cañero / Zafra', desc: 'Especialistas en transporte de caña de azúcar y granos.', capacity: 'Capacidad: 45 m³ | A granel', image: '/img/Acoplado Cañero.jpg' },
      { id: 5, title: 'Batea de Vuelco Trasero', desc: 'Transporte de áridos, piedra y materiales a granel.', capacity: 'Capacidad: 25 m³', image: '/img/batea.jpg' },
      { id: 6, title: 'Mercedes Benz 1620', desc: 'Chasis rígido para cargas generales y reparto.', capacity: 'Carga útil: 14 Ton', image: '/img/mb1620.jpg' },
    ]
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="flota" className="section" style={{background: '#f8fafc'}}>
      <div className="container">
        <h2 className="section-title">Nuestra Flota</h2>
        <div className="tabs">
          <button className={`btn tab-btn ${activeTab === 'camiones' ? 'active' : ''}`} onClick={() => setActiveTab('camiones')}>Camiones</button>
          <button className={`btn tab-btn ${activeTab === 'equipos' ? 'active' : ''}`} onClick={() => setActiveTab('equipos')}>Acoplados / Equipos</button>
        </div>
        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={() => scroll('left')}><ChevronLeft size={24} /></button>
          <div className="carousel-container" ref={scrollRef}>
            {fleetData[activeTab].map(item => (
              <div key={item.id} className="carousel-item">
                <FleetCard image={item.image} title={item.title} desc={item.desc} capacity={item.capacity} />
              </div>
            ))}
          </div>
          <button className="carousel-btn next" onClick={() => scroll('right')}><ChevronRight size={24} /></button>
        </div>
        <p style={{textAlign: 'center', marginTop: '10px', fontSize: '0.9rem', color: '#999', display: 'block', md: 'none'}}>Desliza para ver más ↔</p>
      </div>
    </section>
  );
}
