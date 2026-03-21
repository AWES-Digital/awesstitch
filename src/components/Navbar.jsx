import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 top-0 left-0 flex items-center justify-between p-6 md:px-12 mix-blend-difference text-text"
    >
      <div className="font-serif text-2xl font-bold italic tracking-wider">
        Arpeggio
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-6 text-sm uppercase tracking-widest">
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Membership</a>
        </div>
        <button className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
