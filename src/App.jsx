import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Work from './components/Work';
import Metrics from './components/Metrics';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Journal from './components/Journal';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick));
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-text selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Metrics />
        <Services />
        <Pricing />
        <FAQ />
        <Testimonials />
        <Journal />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
