import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Paris', // GMT+1 approx (CET)
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(formatter.format(now));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-black text-white/50 pt-32 pb-8 px-6 md:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 mb-32">
        {/* Left Column (Brand & Location) */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <img src="https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg" alt="icon" className="w-8 h-8 filter invert" />
            <span className="text-white text-lg max-w-[200px] leading-snug">We are currently based in Milano and work remotely.</span>
          </div>

          <div className="mt-8">
            <div className="text-5xl font-sans font-black text-white">{time || "--:--:--"}</div>
            <div className="flex items-center gap-2 mt-2 text-white/50 text-xs uppercase tracking-widest font-bold">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter invert opacity-50"><path fillRule="evenodd" clipRule="evenodd" d="M8 15.5C11.866 15.5 15 12.366 15 8.5C15 4.63401 11.866 1.5 8 1.5C4.13401 1.5 1 4.63401 1 8.5C1 12.366 4.13401 15.5 8 15.5ZM8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM1.15781 9.48834C1.35249 11.0232 2.05284 12.4109 3.09849 13.4884L3.65597 12.2858C4.08419 11.3621 4.95462 10.7061 5.96813 10.5447C6.09559 10.5244 6.22384 10.4912 6.35368 10.4447C7.4523 10.0514 8.01956 8.84656 7.62635 7.74794C7.47898 7.33615 7.20649 6.99222 6.85807 6.75841C6.20816 6.32244 5.97519 5.43828 6.32975 4.75782C6.42571 4.57367 6.55169 4.40698 6.70327 4.26574L6.91183 4.07137C7.26629 3.74108 7.73489 3.55556 8.22222 3.55556H8.77778C9.5539 3.55556 10.2798 3.93181 10.7226 4.5638L10.8804 4.78917L12.0192 6.64327C12.2882 7.081 12.8256 7.29177 13.3308 7.15788C13.4897 7.1158 13.6334 7.03816 13.7533 6.92906L14.4984 6.25055C14.7176 6.93666 14.8333 7.66986 14.8333 8.42398C14.8333 8.6366 14.8143 8.84542 14.7775 9.04938L14.4082 9.04944C13.8407 9.04953 13.3001 9.30932 12.9366 9.75704C12.3922 10.4275 12.4939 11.413 13.1644 11.9575L13.8043 12.4769C13.1026 13.4344 12.1624 14.1953 11.0833 14.6859L11.0833 14.5422C11.0833 13.7845 10.4691 13.1703 9.71144 13.1703C9.53936 13.1703 9.38006 13.2045 9.2393 13.2647C9.23192 13.2678 9.22453 13.271 9.21715 13.2743C8.45521 13.6067 7.57018 13.2558 7.24075 12.4907C7.03961 12.0234 6.74519 11.6095 6.37618 11.2744C5.97223 10.9075 5.43424 10.7061 4.88392 10.7061L3.92167 10.7061L3.59378 9.8864C3.39864 9.39855 2.95191 9.04838 2.42777 8.97305C1.94056 8.90299 1.43936 8.8673 0.925482 8.8673C0.902947 8.8673 0.880433 8.86745 0.857941 8.86775C0.875323 9.07662 0.975411 9.28293 1.15781 9.48834Z" fill="currentColor"/></svg>
              Timezone (GMT+1)
            </div>
          </div>
        </div>

        {/* Middle Column (Links) */}
        <div className="md:col-span-4 flex flex-col gap-6 font-serif text-3xl md:text-5xl text-white">
          <a href="#home" className="hover:text-primary transition-colors hover:translate-x-2 duration-300 w-max">Home</a>
          <a href="#work" className="hover:text-primary transition-colors hover:translate-x-2 duration-300 w-max">Work</a>
          <a href="#about" className="hover:text-primary transition-colors hover:translate-x-2 duration-300 w-max">About</a>
          <a href="#pricing" className="hover:text-primary transition-colors hover:translate-x-2 duration-300 w-max">Membership</a>
          <a href="#journal" className="hover:text-primary transition-colors hover:translate-x-2 duration-300 w-max">Journal</a>
          <a href="#contact" className="hover:text-primary transition-colors hover:translate-x-2 duration-300 w-max">Contact</a>
        </div>

        {/* Right Column (Legal & Socials) */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-white/50 mb-16">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-white transition-colors">404</a>
            <a href="#" className="hover:text-white transition-colors">More Templates</a>
          </div>

          <div className="flex flex-col gap-4 text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter text-white">
            <a href="#" className="hover:text-primary transition-colors flex items-center justify-between group">
              Whatsapp
              <span className="text-white group-hover:text-primary transition-colors text-4xl">↗</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center justify-between group">
              X
              <span className="text-white group-hover:text-primary transition-colors text-4xl">↗</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center justify-between group">
              Linkedin
              <span className="text-white group-hover:text-primary transition-colors text-4xl">↗</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center justify-between group">
              Instagram
              <span className="text-white group-hover:text-primary transition-colors text-4xl">↗</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center justify-between group">
              Email
              <span className="text-white group-hover:text-primary transition-colors text-4xl">↗</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-light uppercase tracking-widest relative z-10 text-white/50">
        <div className="flex flex-col gap-2">
          <p>Arpeggio SRL Via Monte Napoleone 3 20121 Milano</p>
          <a href="tel:085608890" className="hover:text-white transition-colors">(08) 560 8890</a>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <p className="max-w-xs text-left md:text-right">Arpeggio SRL is a company registered in Italy. Design and development services are provided by Arpeggio SRL.</p>
          <p>© 2026 Arpeggio — All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 border border-white/20 rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-red-500 block"></span>
          Offline
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[25vw] text-white/5 whitespace-nowrap pointer-events-none select-none mix-blend-screen z-0 overflow-hidden w-full text-center">
        ARPEGGIO
      </div>
    </footer>
  );
};

export default Footer;
