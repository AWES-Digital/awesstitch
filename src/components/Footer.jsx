import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Europe/Rome', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#050505] text-white/50 py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 relative z-10 mb-24">

        {/* Left Column: Location & Time */}
        <div className="md:col-span-3 flex flex-col justify-between">
          <div className="font-serif text-4xl md:text-5xl font-bold italic text-white mb-8">
            Arpeggio
          </div>

          <div className="mt-auto">
            <p className="text-white/60 text-sm font-light mb-8 max-w-[200px] leading-relaxed">
              We are currently based in Milano and work remotely.
            </p>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-3 w-fit">
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Timezone (GMT+1)</span>
              <div className="w-1 h-1 rounded-full bg-primary mx-2"></div>
              <span className="font-mono text-white text-sm tracking-wider">{time}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 ml-2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Center Column: Navigation */}
        <div className="md:col-span-4 flex flex-col md:items-center">
          <div className="w-full md:w-auto">
            <h4 className="text-white font-serif text-2xl mb-8">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#work" className="hover:text-primary transition-colors">Work</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Membership</a></li>
                <li><a href="#journal" className="hover:text-primary transition-colors">Journal</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Newsletter & Socials */}
        <div className="md:col-span-5 flex flex-col gap-12">

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif text-2xl mb-4">Stay in the Loop</h4>
            <p className="text-white/60 text-sm font-light mb-6 max-w-sm">
              Stay informed about our latest news, updates by subscribing to our newsletter. We respect your inbox. No spam, just valuable updates.
            </p>
            <div className="flex w-full max-w-sm border-b border-white/20 pb-2 group focus-within:border-primary transition-colors relative">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none w-full focus:outline-none focus:ring-0 text-white placeholder-white/30 text-sm font-light"
              />
              <button className="text-white/50 group-hover:text-primary hover:text-white transition-colors absolute right-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Socials Grid */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Socials</h4>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-xs font-bold uppercase tracking-widest text-white/40">
              <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">WhatsApp <span className="text-white/20 group-hover:text-primary transition-colors ml-2">→</span></a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">X <span className="text-white/20 group-hover:text-primary transition-colors ml-2">→</span></a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">LinkedIn <span className="text-white/20 group-hover:text-primary transition-colors ml-2">→</span></a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">Instagram <span className="text-white/20 group-hover:text-primary transition-colors ml-2">→</span></a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex justify-between items-center group">Email <span className="text-white/20 group-hover:text-primary transition-colors ml-2">→</span></a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <p>Arpeggio SRL, Via Monte Napoleone 3, 20121 Milano</p>
          <p className="hidden md:block">|</p>
          <p>+39 02 1234 5678</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center mt-4 md:mt-0">
          <p>© 2026 Arpeggio — All rights reserved.</p>
          <p className="hidden md:block">|</p>
          <p>Designed by Tamas</p>
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] font-display font-black text-[25vw] text-white/5 whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter mix-blend-screen">
        ARPEGGIO
      </div>
    </footer>
  );
};

export default Footer;