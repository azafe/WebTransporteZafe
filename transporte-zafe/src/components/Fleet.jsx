import React, { useState } from 'react';

export default function Fleet() {
  const [activeTab, setActiveTab] = useState('camiones');

  const fleetData = {
    camiones: [
      { 
        id: 1, 
        title: 'Volkswagen 17.280', 
        desc: 'Potencia y confiabilidad para larga distancia.',
        image: '/img/VW17280.jpg' 
      },
      { 
        id: 2, 
        title: 'Mercedes Benz Atego 1726', 
        desc: 'Versatilidad para distribución y carga media.',
        image: '/img/Atego1726.jpg' 
      },
      { 
        id: 3, 
        title: 'Iveco Tector 170E28', 
        desc: 'Eficiencia para logística regional.',
        image: '/img/iveco17280.JPG' 
      },
    ],
    equipos: [
      { 
        id: 4, 
        title: 'Acoplado Cañero / Zafra', 
        desc: 'Especialistas en transporte de caña de azúcar y granos.',
        image: '/img/Acoplado Cañero.jpg' 
      },
      { 
        id: 5, 
        title: 'Batea de Vuelco Trasero', 
        desc: 'Transporte de áridos, piedra y materiales a granel.',
        image: '/img/batea.jpg' 
      },
      { 
        id: 6, 
        title: 'Mercedes Benz 1620', 
        desc: 'Chasis rígido para cargas generales y reparto.',
        image: '/img/mb1620.jpg' 
      },
    ]
  };

  return (
    <section id="flota" className="section" style={{background: '#f8fafc'}}>
      <div className="container">
        <h2 className="section-title">Nuestra Flota</h2>
        
        <div className="tabs">
          <button 
            className={`btn tab-btn ${activeTab === 'camiones' ? 'active' : ''}`}
            onClick={() => setActiveTab('camiones')}
          >
            Camiones
          </button>
          <button 
            className={`btn tab-btn ${activeTab === 'equipos' ? 'active' : ''}`}
            onClick={() => setActiveTab('equipos')}
          >
            Acoplados / Equipos
          </button>
        </div>

        <div className="fleet-grid">
          {fleetData[activeTab].map(item => (
            <div key={item.id} className="fleet-card">
              <div style={{height: '250px', overflow: 'hidden'}}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  onError={(e) => {e.target.style.display='none'}} 
                />
              </div>
              <div className="fleet-info">
                <h3 style={{marginBottom: '10px', fontSize: '1.2rem'}}>{item.title}</h3>
                <p style={{color: '#666'}}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}