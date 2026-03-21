import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const items = [
    "Design that captivates today & inspires tomorrow.",
    "Freedom beyond the traditional project scope.",
    "Design that captivates today & inspires tomorrow.",
    "Freedom beyond the traditional project scope.",
    "Design that captivates today & inspires tomorrow.",
    "Freedom beyond the traditional project scope.",
  ];

  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-primary py-4 text-background z-30">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...items, ...items].map((text, i) => (
          <span key={i} className="mx-8 text-2xl md:text-4xl font-sans font-black uppercase tracking-wider flex items-center gap-8">
            {text}
            <span className="w-3 h-3 bg-background rounded-full inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
