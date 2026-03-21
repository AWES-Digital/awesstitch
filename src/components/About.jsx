import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-6 block">
            About Us
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            One subscription,<br />
            <span className="italic text-white/50">unlimited</span> design iterations.
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            We perfectly align creative and production expertise to increase digital impact.
            Skip the hiring maze and get an entire creative powerhouse at your fingertips.
          </p>
          <button className="mt-12 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-300">
            Explore Plans
          </button>
        </motion.div>

        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden group">
          <motion.div style={{ y }} className="w-full h-[120%] -top-[10%] absolute">
            <img
              src="https://framerusercontent.com/images/YxbSrYfjMP6Ke0bJjeHywJJuTWE.png"
              alt="Modern B&W art"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
