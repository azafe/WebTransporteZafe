import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar container">
        {/* Logo: Ahora solo muestra la imagen del logo si existe, o el texto solo */}
        <div className="logo">
          <img 
            src="/img/logo.jpg" 
            alt="Transporte Zafe" 
            style={{height: '45px', objectFit: 'contain'}} 
            onError={(e) => {
              e.target.style.display='none';
              // Si falla la imagen, mostramos el texto del span siguiente
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="logo-text" style={{display: 'none'}}>TRANSPORTE ZAFE</span>
        </div>

        {/* Links de Escritorio */}
        <div className="nav-links desktop">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#flota">Flota</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto" className="btn btn-primary">Contactar</a>
        </div>

        {/* Botón Hamburguesa */}
        <button className="menu-btn" onClick={toggleMenu} aria-label="Abrir menú">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Menú Desplegable (Móvil) Mejorado */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={toggleMenu}>Inicio</a>
        <a href="#nosotros" onClick={toggleMenu}>Nosotros</a>
        <a href="#flota" onClick={toggleMenu}>Flota</a>
        <a href="#servicios" onClick={toggleMenu}>Servicios</a>
        <a href="#contacto" className="btn btn-primary" onClick={toggleMenu} style={{textAlign: 'center', marginTop: '10px'}}>Contactar</a>
      </div>
    </>
  );
}
