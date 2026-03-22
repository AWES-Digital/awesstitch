import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const CountUp = ({ to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(to.substring(0, to.match(/\D/)?.index || to.length));
      if (start === end) return;

      let totalMilSecDur = parseInt(duration);
      let incrementTime = (totalMilSecDur / end) * 1000;

      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + to.substring(end.toString().length));
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Metrics = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Our Achievements | metrics & milestones</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight tracking-tight max-w-2xl">
              Behind every statistic pulses a human story
            </h2>

            <p className="text-white/50 text-xl font-light leading-relaxed max-w-lg mb-16">
              Transforming industries, pixel by perfect pixel
            </p>

            <button className="flex items-center gap-4 text-white hover:text-primary transition-colors duration-300 group w-fit">
              <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-primary flex items-center justify-center transition-colors duration-300">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2384 7.15392C13.8967 7.54019 13.8967 8.48427 13.2384 8.87053L1.51654 15.7516C0.849206 16.1434 0 15.6622 0 14.8933L0 1.13117C0 0.362228 0.849204 -0.119028 1.51653 0.272827L13.2384 7.15392Z" />
                </svg>
              </div>
              <span className="font-bold uppercase tracking-widest text-sm">watch reel</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-12">
          {/* Award Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-black"
          >
            <div>
              <p className="font-bold uppercase tracking-widest text-xs mb-4">BEST INTEGRATED CAMPAIGN 2024</p>
              <h3 className="font-serif text-4xl md:text-5xl leading-tight">Boreal VR<br/>Campaign</h3>
            </div>
            <a href="#" className="font-bold uppercase tracking-widest text-xs border-b border-black pb-1 hover:opacity-60 transition-opacity whitespace-nowrap">
              view project
            </a>
          </motion.div>

          {/* Stats Rows */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-16 border-t border-white/10 pt-12">
            {[
              { label: "CUSTOMER ENGAGEMENT", value: "35", suffix: "%", colSpan: 1 },
              { label: "REVENUE GROWTH", value: "24", suffix: "%", colSpan: 1 },
              { label: "PROJECTS COMPLETED", value: "67", suffix: "", colSpan: 1 },
              { label: "CLIENTS SERVED WORLDWIDE", value: "43", suffix: "+", colSpan: 1 },
              { label: "DESIGN AWARDS", value: "12", suffix: "+", colSpan: 1 },
              { label: "CAMPAIGNS LAUNCHED", value: "16", suffix: "+", colSpan: 1 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                className={`col-span-${stat.colSpan} flex flex-col`}
              >
                <h4 className="font-display text-5xl md:text-7xl font-bold text-white mb-2 leading-none flex items-baseline">
                  <CountUp to={stat.value} duration={2} suffix={stat.suffix} />
                </h4>
                <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Fun Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="border-t border-white/10 pt-8 mt-4 flex items-center justify-between"
          >
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs">COLOURS NOT USED IN 2025: <span className="text-white text-xl ml-2">3</span></p>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-primary" style={{ clipPath: 'polygon(100% 74%, 44% 48%, 100% 21%, 100% 0, 0 0, 0 100%, 100% 100%)' }}></div>
              <div className="w-6 h-6 rounded-full bg-[#00E5FF]" style={{ clipPath: 'polygon(100% 74%, 44% 48%, 100% 21%, 100% 0, 0 0, 0 100%, 100% 100%)' }}></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Metrics;