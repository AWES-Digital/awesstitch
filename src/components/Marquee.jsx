import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const items = [
    { src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1287&auto=format&fit=crop", alt: "sport car top view" },
    { src: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1315&auto=format&fit=crop", alt: "black pouch on velvet" },
    { src: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1470&auto=format&fit=crop", alt: "girl in VR glasses" },
    { src: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1470&auto=format&fit=crop", alt: "modern B&W art" },
    { src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1470&auto=format&fit=crop", alt: "red/black 3D cube" },
    { src: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1374&auto=format&fit=crop", alt: "iPhone grid mockup" }
  ];

  return (
    <div className="relative overflow-hidden w-full bg-black py-8 z-30 flex items-center h-48 md:h-64">
      <motion.div
        className="flex gap-4 md:gap-8 min-w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Medium speed, infinite loop
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="w-48 h-32 md:w-64 md:h-48 flex-shrink-0 overflow-hidden rounded-xl">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;