import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
