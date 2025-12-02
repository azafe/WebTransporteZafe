import React from 'react';
import './Clients.css';

const Clients = () => {
  const experiences = [
    { 
      name: 'Argenti Lemon', 
      logo: '/img/argentilemon.png',
      tasks: [
        'Transporte de limón en Bins en semilargo.',
        'Logística de limón a granel para industria.'
      ]
    },
    { 
      name: 'Grupo Los Balcanes', 
      logo: '/img/grupolosbalcanes.png',
      tasks: [
        'Transporte de caña de azúcar con equipo cañero.',
        'Distribución de bolsas de azúcar utilizando semilargo.'
      ]
    },
    { 
      name: 'Ingenio Santa Rosa', 
      logo: '/img/santarosa.png',
      tasks: [
        'Transporte de caña de azúcar con equipo cañero.'
      ]
    },
    { 
      name: 'Cervecería y Maltería Quilmes', 
      logo: '/img/quilmes.png',
      tasks: [
        'Transporte de cajones de cerveza en semilargo.'
      ]
    }
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <h3 className="clients-title">Clientes que confiaron</h3>
         
        </div>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="card-logo-box">
                <img 
                  src={exp.logo} 
                  alt={`Cliente ${exp.name}`} 
                  className="card-logo"
                />
              </div>
              <div className="card-content">
                <h4 className="card-client-name">{exp.name}</h4>
                <ul className="card-tasks">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
