import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-primary relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <div className="w-16 h-16 bg-white rounded-full mx-auto mb-8 flex items-center justify-center">
          <img src="https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg" alt="icon" className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background mb-8 leading-none">
          We transform brands.<br />
          <span className="italic opacity-80">Your success is next.</span>
        </h2>
        <p className="text-background/80 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Start your project now by booking a one-on-one consultation with our expert.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-background text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
            Book a Call
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-background text-background px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-background/10 transition-all duration-300">
            Chat on WhatsApp
          </button>
        </div>
      </motion.div>

      {/* Abstract background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-background rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default CTA;
