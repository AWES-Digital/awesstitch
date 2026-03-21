import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-white/50 py-16 px-6 md:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

        {/* Brand & Newsletter */}
        <div className="md:col-span-2">
          <div className="font-serif text-3xl font-bold italic tracking-wider text-white mb-6">
            Arpeggio
          </div>
          <p className="text-white/60 text-sm font-light mb-8 max-w-sm">
            Stay informed about our latest news, updates by subscribing to our newsletter. We respect your inbox. No spam, just valuable updates.
          </p>
          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-b border-white/20 px-4 py-2 w-full focus:outline-none focus:border-primary text-white placeholder-white/30 transition-colors"
            />
            <button className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors ml-4 flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm font-light uppercase tracking-widest">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#work" className="hover:text-primary transition-colors">Work</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Membership</a></li>
            <li><a href="#journal" className="hover:text-primary transition-colors">Journal</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6">Socials</h4>
          <ul className="space-y-4 text-sm font-light uppercase tracking-widest">
            <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">Instagram <span className="text-white group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all">-&gt;</span></a></li>
            <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">Twitter <span className="text-white group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all">-&gt;</span></a></li>
            <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">LinkedIn <span className="text-white group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all">-&gt;</span></a></li>
            <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">WhatsApp <span className="text-white group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all">-&gt;</span></a></li>
            <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">Email <span className="text-white group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all">-&gt;</span></a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light uppercase tracking-widest relative z-10">
        <p>Arpeggio SRL Via Monte Napoleone 3 20121 Milano</p>
        <p>© 2026 Arpeggio — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-red-500 block"></span>
          Offline
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[25vw] text-white/5 whitespace-nowrap pointer-events-none select-none mix-blend-screen z-0">
        ARPEGGIO
      </div>
    </footer>
  );
};

export default Footer;
