import React from 'react';
import './Clients.css';

const Clients = () => {
  // Estos nombres de archivo coinciden con tu captura de VS Code
  const clients = [
    { name: 'Grupo Los Balcanes', logo: '/img/grupolosbalcanes.png' },
    { name: 'Argentilemon', logo: '/img/argentilemon.png' },
    { name: 'Quilmes', logo: '/img/quilmes.png' },
    { name: 'Ingenio Santa Rosa', logo: '/img/santarosa.png' }
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <h3 className="clients-title">Empresas que confían en nosotros</h3>
        <p className="clients-subtitle">
          15 años impulsando el desarrollo de las industrias líderes del Norte.
        </p>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <img 
                src={client.logo} 
                alt={`Logo de ${client.name}`} 
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
