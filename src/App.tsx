import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { ServicesNew } from './components/services/ServicesNew';
import { ClientLogos } from './components/clients/ClientLogos';
import Cases from './components/Cases';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <ServicesNew />
      {/* <ClientLogos /> */}
      <Cases />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;