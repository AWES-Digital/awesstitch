import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const items = [
    { text: "Design that captivates today & inspires tomorrow.", isImage: false },
    { src: "https://framerusercontent.com/images/VuqEkIrQxoTipMXJSbTnHBSaA.jpg", isImage: true }, // car
    { src: "https://framerusercontent.com/images/uSPgoh0MtolSWTMPKMiKMirms.jpg", isImage: true }, // pouch
    { src: "https://framerusercontent.com/images/uriIjealJVIEZXk2DjQGcYk4CFg.jpg", isImage: true }, // VR
    { src: "https://framerusercontent.com/images/YxbSrYfjMP6Ke0bJjeHywJJuTWE.png", isImage: true }, // B&W
    { src: "https://framerusercontent.com/images/TbuqxGSIEs5tyOMvSINECn1RI.jpeg", isImage: true }, // 3D cube
    { src: "https://framerusercontent.com/images/VEEJ9tGEaIdfvfsByCbHeBR5uU.jpeg", isImage: true }, // iPhone mockup
  ];

  return (
    <div className="relative flex flex-col z-30 bg-background overflow-hidden">
      <div className="relative overflow-hidden whitespace-nowrap bg-primary py-4 text-background z-30">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...Array(10)].fill("Freedom beyond the traditional project scope").map((text, i) => (
            <span key={i} className="mx-4 text-xl font-sans font-bold uppercase tracking-widest flex items-center gap-8">
              {text}
              <span className="w-2 h-2 bg-background rounded-full inline-block" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative overflow-hidden whitespace-nowrap bg-background text-white border-b border-white/10 z-30">
        <motion.div
          className="flex whitespace-nowrap items-center h-[50vh] min-h-[400px]"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="mx-4 h-[80%] flex items-center">
              {item.isImage ? (
                <img src={item.src} alt="project preview" className="h-full w-auto object-cover rounded-xl" />
              ) : (
                <span className="text-6xl md:text-8xl font-serif text-white whitespace-pre-wrap leading-tight mx-8 max-w-lg">
                  Design that <span className="italic">captivates today</span> & inspires tomorrow.
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
