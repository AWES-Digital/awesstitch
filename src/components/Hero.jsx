import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Woman with white sunglasses and blue smoke hair"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Top Center Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute top-32 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-24 h-24 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider text-center p-2 leading-tight"
      >
        Agency Label
      </motion.div>

      {/* Small Label Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
      >
        <p className="text-white text-xs font-bold uppercase tracking-widest max-w-[150px] text-right">
          One subscription, unlimited design iterations.
        </p>
      </motion.div>

      {/* Bottom Text Overlay */}
      <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-20 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <span className="font-serif italic text-4xl md:text-5xl lg:text-5xl font-light text-white opacity-90 block mb-[-20px] md:mb-[-40px] z-30 relative ml-4">
            The Creative Agency—
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="overflow-hidden w-full"
        >
          <h1 className="font-display font-black text-[15vw] md:text-[18vw] lg:text-[160px] leading-[0.8] text-primary tracking-tighter m-0 p-0 uppercase w-full">
            ARPEGGIO
          </h1>
        </motion.div>
      </div>

      {/* Bottom Right Decorative Dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-16 right-12 z-20 w-4 h-4 rounded-full bg-primary hidden md:block"
      />
    </section>
  );
};

export default Hero;