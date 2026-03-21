import React from 'react';
import { motion } from 'framer-motion';

const Metrics = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background relative border-y border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <img src="https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg" alt="icon" className="w-5 h-5 filter invert" />
              Our Achievements
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mt-6 mb-8">
              Metrics &<br />
              <span className="italic text-white/50">milestones</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed max-w-sm mb-8">
              Behind every statistic pulses a human story. Transforming industries, pixel by perfect pixel.
            </p>
            <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
              Watch Reel
            </button>
          </motion.div>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
          {[
            { value: "20", suffix: "+", label: "Clients Served Worldwide" },
            { value: "51", suffix: "+", label: "Design Awards & Recognitions" },
            { value: "99", suffix: "+", label: "Campaigns Launched" },
            { value: "35", suffix: "%", label: "Customer Engagement", highlight: true },
            { value: "24", suffix: "%", label: "Revenue Growth", highlight: true },
            { value: "99", suffix: "", label: "Colours not used in 2025" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col border-l border-white/10 pl-6"
            >
              <h3 className={`font-sans font-black text-5xl md:text-7xl mb-4 flex items-baseline ${stat.highlight ? 'text-primary' : 'text-white'}`}>
                {stat.value}
                <span className="text-2xl md:text-4xl ml-1 text-white/50">{stat.suffix}</span>
              </h3>
              <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest max-w-[150px] leading-tight font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
