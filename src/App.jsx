import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn'; 
import Clients from './components/Clients';
// Importamos el botón

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Services />
      <Clients />
      <Footer />
      <WhatsAppBtn /> {/* Lo añadimos aquí para que flote sobre todo */}
    </div>
  );
}

export default App;
