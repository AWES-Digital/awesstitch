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
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://framerusercontent.com/images/w6NNFyzCMggSpvqzWqXMDUO7k.jpeg"
          alt="Girl in white smoke"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
      </motion.div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <span className="font-serif italic text-3xl md:text-5xl lg:text-7xl font-light text-white opacity-90 block mb-4">
            The Creative Agency—
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="overflow-hidden w-full flex justify-center"
        >
          <h1 className="font-sans font-black text-[12vw] leading-none text-primary tracking-tighter m-0 p-0 drop-shadow-2xl mix-blend-screen uppercase">
            ARPEGGIO
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-sm tracking-widest uppercase"
        >
          <span className="animate-pulse">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
