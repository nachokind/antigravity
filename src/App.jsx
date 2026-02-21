import React from 'react';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import StatsSection from './components/StatsSection';
import QuoteSection from './components/QuoteSection';
import CTASection from './components/CTASection';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <GallerySection />
      <StatsSection />
      <QuoteSection />
      <CTASection />
    </div>
  );
}

export default App;
