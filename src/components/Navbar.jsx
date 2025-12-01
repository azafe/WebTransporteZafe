import React, { useState } from 'react';
import { Truck, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar container">
        {/* Logo */}
        <div className="logo">
          {/* Tu logo real */}
          <img src="/img/logo.jpg" alt="TZ" style={{height: '40px', objectFit: 'contain'}} onError={(e) => e.target.style.display='none'}/>
          {/* Icono y texto de respaldo si falla la imagen */}
          <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
             {!document.querySelector('img[src="/img/logo.jpg"]')?.complete && <Truck size={28} color="#eab308" />}
             <span className="logo-text">TRANSPORTE ZAFE</span>
          </span>
        </div>

        {/* Links de Escritorio (Desktop) */}
        <div className="nav-links desktop">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#flota">Flota</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto" className="btn btn-primary">Contactar</a>
        </div>

        {/* Botón Hamburguesa (Móvil) */}
        <button className="menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú Desplegable (Móvil) */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={toggleMenu}>Inicio</a>
        <a href="#nosotros" onClick={toggleMenu}>Nosotros</a>
        <a href="#flota" onClick={toggleMenu}>Flota</a>
        <a href="#servicios" onClick={toggleMenu}>Servicios</a>
        <a href="#contacto" className="btn btn-primary" onClick={toggleMenu} style={{textAlign: 'center'}}>Contactar</a>
      </div>
    </>
  );
}
