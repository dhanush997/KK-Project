import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketStats from './components/MarketStats';
import Services from './components/Services';
import Footer from './components/Footer';
import WorkshopBanner from './components/WorkshopBanner';

function App() {
  return (
    <div className="bg-[#0f172a] text-white selection:bg-yellow-500/30">
      <WorkshopBanner />
      <Navbar />
      <Hero />
      <MarketStats />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
