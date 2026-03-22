import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(from + (to - from) * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const Metrics = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black relative border-y border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white text-sm uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Our Achievements <span className="text-white/30 font-normal">| metrics & milestones</span>
            </span>
            <p className="text-white/60 font-light leading-relaxed max-w-sm mt-8 mb-8">
              Behind every statistic pulses a human story. Transforming industries, pixel by perfect pixel.
            </p>
            <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
              Watch Reel
            </button>
          </motion.div>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
          {[
            { value: 67, suffix: "", label: "Projects Completed 2020" },
            { value: 43, suffix: "+", label: "Clients Served Worldwide" },
            { value: 12, suffix: "+", label: "Design Awards & Recognitions" },
            { value: 16, suffix: "+", label: "Campaigns Launched" },
            { value: 3, suffix: "", label: "Colours not used in 2025", special: true },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col border-l border-white/10 pl-6 ${stat.special ? 'col-span-2' : ''}`}
            >
              <h3 className="font-sans font-black text-5xl md:text-7xl mb-4 flex items-baseline text-white">
                <AnimatedCounter to={stat.value} duration={2} />
                <span className="text-2xl md:text-4xl ml-1 text-white/50">{stat.suffix}</span>
              </h3>
              <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest max-w-[150px] leading-tight font-bold">
                {stat.label}
              </p>
              {stat.special && (
                <div className="flex gap-2 mt-4 text-2xl">
                  <span role="img" aria-label="pacman">ᗧ</span>
                  <span role="img" aria-label="pacman-ghost">👻</span>
                  <span role="img" aria-label="pacman-dot">•</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
