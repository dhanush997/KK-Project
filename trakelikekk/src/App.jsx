import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketStats from './components/MarketStats';
import Calculators from './components/Calculators';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WorkshopBanner from './components/WorkshopBanner';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import CEONote from './components/CEONote';

function App() {
  return (
    <div className="bg-[#0f172a] text-white selection:bg-yellow-500/30">
      {/* <WorkshopBanner /> */}
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <div id="mentorship">
        <CEONote />
      </div>
      <MarketStats />
      <div id="calculators">
        <Calculators />
      </div>
      <Services />
      <Pricing />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
