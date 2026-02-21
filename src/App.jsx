import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import StatsSection from './components/StatsSection';
import QuoteSection from './components/QuoteSection';
import CTASection from './components/CTASection';
import Header from './components/Header';
import DriverProfile from './pages/DriverProfile';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <StatsSection />
      <QuoteSection />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/driver/:id" element={<DriverProfile />} />
      </Routes>
    </div>
  );
}

export default App;
