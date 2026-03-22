import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Paris', // GMT+1 approx (CET)
        hour: '2-digit',
        minute: '2-digit',
      });
      setTime(formatter.format(now));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed w-full z-[100] top-0 left-0 flex items-center justify-between p-6 md:px-12 mix-blend-difference text-text"
      >
        <div className="flex gap-4 text-xs font-bold text-primary uppercase tracking-widest z-10">
          <a href="#" className="hover:text-white transition-colors">WA</a>
          <a href="#" className="hover:text-white transition-colors">X</a>
          <a href="#" className="hover:text-white transition-colors">IG</a>
          <a href="#" className="hover:text-white transition-colors">LI</a>
          <a href="#" className="hover:text-white transition-colors">EMAIL</a>
        </div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-bold italic tracking-wider pointer-events-none"
          animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          Arpeggio
        </motion.div>

        <div className="flex items-center gap-8 z-[110]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex justify-center items-center w-8 h-8 hover:opacity-70 transition-opacity"
          >
            <span className={`absolute w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-1'}`} />
            <span className={`absolute w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-1'}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-background text-white flex flex-col justify-between p-6 md:px-12 pt-32 pb-12"
          >
            <div className="flex justify-between items-start w-full">
              <div className="text-sm text-white/50 max-w-xs">
                We are based in Milano and work remotely.
              </div>
              <div className="text-right">
                <div className="text-2xl font-sans font-black">{time}</div>
                <div className="text-sm text-white/50 uppercase tracking-widest mt-1">current Time zone (GMT+1)</div>
              </div>
            </div>

            <nav className="flex flex-col gap-6 text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter">
              <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors hover:translate-x-4 duration-300 inline-block w-max">Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors hover:translate-x-4 duration-300 inline-block w-max">About</a>
              <a href="#work" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors hover:translate-x-4 duration-300 inline-block w-max">Work</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors hover:translate-x-4 duration-300 inline-block w-max">Membership</a>
              <a href="#journal" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors hover:translate-x-4 duration-300 inline-block w-max">Journal</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors hover:translate-x-4 duration-300 inline-block w-max">Contact</a>
            </nav>

            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-white/50">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
              <a href="#" className="hover:text-white transition-colors">404</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
