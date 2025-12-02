import React from 'react';
import { Weight } from 'lucide-react'; // Icono de peso

export default function FleetCard({ image, title, desc, capacity }) {
  return (
    <div className="fleet-card">
      <div className="fleet-img-container">
        <img 
          src={image} 
          alt={title} 
          className="fleet-img"
          onError={(e) => {e.target.style.display='none'}} 
        />
      </div>
      <div className="fleet-info">
        <h3>{title}</h3>
        <p className="fleet-desc">{desc}</p>
        
        {/* Nueva sección de Especificaciones */}
        {capacity && (
          <div className="fleet-specs">
            <Weight size={18} />
            <span>{capacity}</span>
          </div>
        )}
      </div>
    </div>
  );
}
