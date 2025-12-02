import React from 'react';
import './WhatsAppBtn.css';

export default function WhatsAppBtn() {
  const telefono = "5493815074390";
  const mensaje = "Hola, estoy en su web y quiero consultar por transporte.";
  
  // Usamos comillas invertidas normales sin miedo, gracias al 'EOF'
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float" 
      aria-label="Chat en WhatsApp"
    >
      <img 
        src="/img/logowp.png" 
        alt="WhatsApp" 
        className="whatsapp-icon" 
      />
    </a>
  );
}
