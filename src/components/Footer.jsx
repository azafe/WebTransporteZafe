import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  // Mensaje predeterminado para WhatsApp
  const mensaje = "Hola Transporte Zafe, vi su sitio web y quisiera consultar por un servicio de transporte.";
  // Tu número con formato internacional (54 9 ...)
  const telefono = "5493815074390"; 
  const whatsappUrl = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <footer id="contacto" className="footer">
      <div className="container footer-content">
        <div style={{flex: 1, minWidth: '300px', marginBottom: '30px'}}>
          <h3>Transporte Zafe</h3>
          <p>Soluciones logísticas confiables desde el corazón de Tucumán.</p>
        </div>
        
        <div style={{flex: 1, minWidth: '300px'}}>
          <h3>Contacto</h3>
          
          <div style={{marginBottom: '15px'}}>
            <p style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px', fontWeight: 'bold'}}>
              <MapPin size={20} color="#eab308"/> Ubicación
            </p>
            <p style={{marginLeft: '30px'}}>San Miguel de Tucumán, Argentina</p>
          </div>

          <div style={{marginBottom: '15px'}}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Phone size={20} color="#eab308"/> 
              <span style={{borderBottom: '1px solid #eab308'}}>+54 381 507-4390 (Clic para chatear)</span>
            </a>
          </div>

          <div>
            <a href="mailto:contacto@transportezafe.com.ar" style={{textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Mail size={20} color="#eab308" /> 
              <span>contacto@transportezafe.com.ar</span>
            </a>
          </div>
        </div>
      </div>
      
      <div style={{marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
        <p>&copy; 2025 Transporte Zafe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}