import React from 'react';

export default function FleetCard({ image, title, desc }) {
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
        <p>{desc}</p>
      </div>
    </div>
  );
}
