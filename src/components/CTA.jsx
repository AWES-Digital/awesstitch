import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden border-t border-white/10 flex flex-col items-center">

      {/* Top Main CTA Area */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-24 mb-32 flex flex-col md:flex-row items-center md:items-start justify-between gap-16 relative z-10">

        {/* Left Side: Headlines */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-3/5"
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">let's talk | contact</span>
          </div>

          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-4 tracking-tight max-w-3xl">
            We transform brands.
          </h2>
          <h2 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-white/50 max-w-3xl">
            Your success is next.
          </h2>
        </motion.div>

        {/* Right Side: Description and Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-2/5 flex flex-col md:items-end md:text-right mt-4 md:mt-24"
        >
          <p className="text-white/60 text-lg md:text-xl font-serif italic max-w-md mb-12">
            Start your project now by booking a one-on-one consultation with our expert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="w-full sm:w-auto bg-primary text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 text-center">
              book a call
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 text-center">
              chat on whatsapp
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Orange Element */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40 z-0 overflow-hidden flex justify-end">
        <div className="w-[800px] h-[800px] bg-primary rounded-full mix-blend-screen filter blur-[150px] translate-x-1/3 -translate-y-1/4"></div>
      </div>

      {/* Bottom Scrolling Partners Area */}
      <div className="w-full border-t border-white/10 pt-16 flex flex-col items-center">
        <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-12 text-center">
          Meet the partners who are part of our success story
        </p>

        <div className="relative overflow-hidden w-full flex items-center h-24 mb-16">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

          <motion.div
            className="flex gap-16 md:gap-32 min-w-max items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Medium speed continuous scroll
            }}
          >
            {/* Logos Strip - Repeated for infinite effect */}
            {[...Array(2)].map((_, arrayIndex) => (
              <React.Fragment key={arrayIndex}>
                {[
                  "Acme Corp", "Globex", "Soylent Corp", "Initech", "Umbrella Corp", "Massive Dynamic"
                ].map((partner, i) => (
                  <div key={i} className="text-white/30 font-display text-2xl md:text-4xl font-black uppercase tracking-widest whitespace-nowrap hover:text-white/60 transition-colors">
                    {partner}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;