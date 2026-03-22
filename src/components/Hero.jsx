import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-background">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/10 z-10" />
        <img
          src="https://framerusercontent.com/images/w6NNFyzCMggSpvqzWqXMDUO7k.jpeg"
          alt="Girl in white smoke"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="absolute top-32 right-12 md:right-32 z-20 hidden md:block">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/2NvHXrAhnCJIeGZlfCQ3g1h9Te0.svg"
            alt="Agency Label"
            className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
          />
          <img src="https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg" alt="dot" className="w-8 h-8" />
        </div>
      </div>

      <div className="absolute top-1/3 left-6 md:left-12 z-20 max-w-[200px]">
        <p className="text-white font-sans font-bold uppercase tracking-widest text-xs leading-relaxed">
          One subscription,<br />unlimited design iterations.
        </p>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="overflow-hidden w-full flex justify-center mb-2"
        >
          <span className="font-serif italic text-4xl md:text-6xl lg:text-[5rem] font-light text-white block">
            The Creative Agency—
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="overflow-hidden w-full flex justify-center"
        >
          <h1 className="font-sans font-black text-[15vw] leading-[0.85] text-primary tracking-tighter m-0 p-0 uppercase block w-full text-center">
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
