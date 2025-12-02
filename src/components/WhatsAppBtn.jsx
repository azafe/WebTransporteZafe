import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBtn() {
  const telefono = "5493815074390";
  const mensaje = "Hola, estoy en su web y quiero consultar por transporte.";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat en WhatsApp">
      <MessageCircle size={32} />
    </a>
  );
}
