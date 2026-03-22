import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const [isPro, setIsPro] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-black px-6 md:px-12 lg:px-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-white text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            Membership Plans <span className="text-white/30 font-normal">| pricing</span>
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mt-6 mb-6">
            Your passport to flexible design revisions
          </h2>
          <p className="text-white/60 font-light leading-relaxed max-w-2xl mx-auto text-lg">
            Get unlimited creativity and all premium features with our monthly All-In-One plan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-[3rem] p-4 md:p-8 flex flex-col md:flex-row gap-8"
        >
          {/* Left Column (Images & Toggle) */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={isPro ? 'pro' : 'core'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={isPro ? "https://framerusercontent.com/images/AvA1cgyFsNBzB5fQS5lTHrLbWrc.jpg" : "https://framerusercontent.com/images/PIxpbFpiHq656ZNK0IU4R8BLA.jpg"}
                  alt={isPro ? "Pro Plan" : "Core Plan"}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start text-white mix-blend-difference">
                <div>
                  <h3 className="text-2xl font-serif">Arpeggio</h3>
                  <p className="text-sm font-bold uppercase tracking-widest mt-1">{isPro ? 'Pro Plan' : 'Core Plan'}</p>
                </div>
                <div className="text-right text-xs uppercase tracking-widest max-w-[150px]">
                  * {isPro ? 'Minimal booking period — 2 months.' : 'Pause or cancel whenever you wish.'}
                </div>
              </div>
            </div>

            <div className="flex bg-white/5 border border-white/10 rounded-full p-2">
              <button
                onClick={() => setIsPro(false)}
                className={`flex-1 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 ${!isPro ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
              >
                Core Plan
                <img src="https://framerusercontent.com/images/ZPy0TdYRL1qLmBkkPn8LzAbPuc.svg" alt="icon" className={`w-5 h-5 ${!isPro ? '' : 'filter invert'}`} />
              </button>
              <button
                onClick={() => setIsPro(true)}
                className={`flex-1 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 ${isPro ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
              >
                Pro Plan
                <img src="https://framerusercontent.com/images/GUKyzoGtbPZZB136CVTm1l7vooE.svg" alt="icon" className={`w-5 h-5 ${isPro ? '' : 'filter invert'}`} />
              </button>
            </div>
          </div>

          {/* Right Column (Details) */}
          <div className="w-full md:w-1/2 flex flex-col py-4 px-2 md:px-6">
            <h4 className="text-2xl font-serif text-white mb-6">
              Simple pricing, powerful features, no hidden fees
            </h4>

            <div className="text-6xl md:text-8xl font-sans font-black text-white mb-8 flex items-end gap-2">
              {isPro ? '$8,999' : '$5,499'}
              <span className="text-2xl md:text-3xl text-white/50 font-normal font-sans mb-2 md:mb-4">/month</span>
            </div>

            <p className="text-white/50 text-sm mb-8">
              Schedule a brief call if you need further clarification.
            </p>

            <div className="flex gap-4 mb-12">
              <button className="flex-1 bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-primary hover:text-white transition-all duration-300">
                Select Plan
              </button>
              <button className="flex-1 bg-transparent border border-white/20 text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white/10 transition-all duration-300">
                Quick Call
              </button>
            </div>

            <div className="space-y-6 flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isPro ? 'pro-features' : 'core-features'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {(isPro ? [
                    { title: "Everything in Core", desc: "All features from the Core plan included" },
                    { title: "Double Project Queue", desc: "Two projects can run concurrently at all times" },
                    { title: "Unlimited Design Iterations", desc: "Endless refinements until the project is perfect" },
                    { title: "Priority Support", desc: "Immediate responses and prioritized requests" },
                    { title: "Advanced Framer Development", desc: "Complex interactions and integrations included" }
                  ] : [
                    { title: "First Mockup in 72hrs", desc: "Initial design concepts delivered in 3 days with quality-focused execution" },
                    { title: "Single Project Queue", desc: "Dedicated project queue ensuring focused attention on your requirements" },
                    { title: "Basic Design Iterations", desc: "Three rounds of design refinements to achieve your desired outcomes" },
                    { title: "Dedicated Senior Designer", desc: "Experienced designer assigned to bring your vision to life effectively" },
                    { title: "Standard Development", desc: "Standard development using proven frameworks for reliable results" }
                  ]).map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <img src="https://framerusercontent.com/images/CzPAA8KcrutTg8kNY1lHbENRc.svg" alt="tick" className="w-5 h-5 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="text-white font-bold mb-1">{feature.title}</h5>
                        <p className="text-white/60 font-light text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
