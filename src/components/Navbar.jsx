import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Europe/Rome', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed w-full z-50 top-0 left-0 flex items-center justify-between px-6 py-4 md:px-12 transition-colors duration-300 ${scrolled || menuOpen ? 'bg-black text-white' : 'bg-transparent text-white'}`}
      >
        <div className="flex gap-4 text-[11px] font-bold text-primary uppercase tracking-wider z-50">
          <a href="#" className="hover:text-white transition-colors">WA</a>
          <a href="#" className="hover:text-white transition-colors">X</a>
          <a href="#" className="hover:text-white transition-colors">IG</a>
          <a href="#" className="hover:text-white transition-colors">LI</a>
          <a href="#" className="hover:text-white transition-colors">EMAIL</a>
        </div>

        <AnimatePresence>
          {(scrolled || menuOpen) && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-3xl font-bold italic text-primary z-50"
            >
              Arpeggio
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleMenu}
          className="relative w-10 h-10 flex flex-col justify-center items-center gap-[6px] text-primary hover:opacity-70 transition-opacity z-[60]"
        >
          <span className={`w-6 h-[2px] bg-current transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`w-6 h-[2px] bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-[2px] bg-current transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black text-white flex flex-col justify-between p-6 md:p-12 pt-24"
          >
            <div className="flex justify-between items-start mt-12 text-sm text-gray-400">
              <div className="max-w-xs uppercase tracking-wider text-xs">
                We are based in Milano and work remotely.
              </div>
              <div className="text-right">
                <div className="uppercase tracking-wider text-xs">Current local time</div>
                <div className="font-mono text-white mt-1">{time} (GMT+1)</div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-6 md:gap-8 mt-12">
              {['Home', 'About', 'Work', 'Membership', 'Journal', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter hover:text-primary transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex justify-between items-end pb-8">
              <div className="font-serif text-2xl italic text-primary">Arpeggio</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;