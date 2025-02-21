import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { Services } from './components/Services';
import { ClientLogos } from './components/clients/ClientLogos';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalStrategy from './pages/DigitalStrategy';
import Websites from './pages/Websites';
import BusinessAudit from './pages/BusinessAudit';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';
import { SEO } from './components/SEO';

const HomePage = () => (
  <>
    <SEO />
    <Navbar />
    <Hero />
    <Services />
    <About />
    <ClientLogos />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/digitale-strategie" element={<DigitalStrategy />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/consulting-advies" element={<BusinessAudit />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;