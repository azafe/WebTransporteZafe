import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-content">
        <div style={{flex: 1, minWidth: '300px', marginBottom: '30px'}}>
          <h3>Transporte Zafe</h3>
          <p>Soluciones logísticas confiables desde el corazón de Tucumán.</p>
        </div>
        <div style={{flex: 1, minWidth: '300px'}}>
          <h3>Contacto</h3>
          <p style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
            <MapPin size={20} /> San Miguel de Tucumán, Argentina
          </p>
          <p style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
            <Phone size={20} /> +54 381 507-4390 (WhatsApp)
          </p>
          <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Mail size={20} /> contacto@transportezafe.com.ar
          </p>
        </div>
      </div>
      <div style={{marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
        <p>&copy; 2025 Transporte Zafe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
