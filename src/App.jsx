import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'; // Subimos Servicios
import Fleet from './components/Fleet';       // Subimos Flota
import Clients from './components/Clients';   // Tu nuevo "CV"
import About from './components/About';       // Bajamos la historia al final
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      {/* BLOQUE DE VENTA DIRECTA */}
      <Services /> 
      <Fleet />
      
      {/* BLOQUE DE CONFIANZA */}
      <Clients />
      <About />
      
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;