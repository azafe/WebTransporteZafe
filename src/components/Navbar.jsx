import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="logo" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        {/* Usamos tu logo real. Ajustamos el alto a 50px para que entre bien */}
        <img src="/img/logo.jpg" alt="Transporte Zafe Logo" style={{height: '50px', objectFit: 'contain'}} />
        {/* Si el logo ya tiene el nombre escrito, podés borrar la línea de abajo */}
        <span style={{color: '#0f172a'}}>TRANSPORTE ZAFE</span>
      </div>
      <div className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#flota">Flota</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto" className="btn btn-primary">Contactar</a>
      </div>
    </nav>
  );
}