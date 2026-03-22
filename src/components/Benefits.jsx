import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <img src="https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg" alt="icon" className="w-5 h-5 filter invert" />
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mt-6 mb-4">
              Benefits
            </h2>
            <p className="text-white/60 font-light leading-relaxed max-w-sm">
              Partnership, Not Just Projects. Skip the hiring maze - get an entire creative powerhouse at your fingertips.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Top Left Card (Premium Plans) - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[400px] overflow-hidden relative group"
          >
            <div className="relative z-10 flex justify-between items-start">
              <div className="bg-black/10 backdrop-blur-md rounded-full px-4 py-2">
                <span className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black inline-block"></span> Premium Plans
                </span>
              </div>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-4xl font-serif text-black mb-2">Monthly comprehensive package for unlimited creative opportunities</h3>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-60 mix-blend-multiply group-hover:scale-110 transition-transform duration-700">
              <img src="https://framerusercontent.com/images/kMKd9NTvf9O2me1pvCl9a31nIXc.jpg" alt="Hand holding card" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Top Right Card (Design Dashboard) - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-primary rounded-3xl p-8 flex flex-col justify-between min-h-[400px] overflow-hidden relative group"
          >
            <div className="relative z-10">
              <span className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-black inline-block"></span> Design Dashboard
              </span>
              <h3 className="text-3xl font-serif text-black mb-2">Monitor progress and manage requests effortlessly</h3>
            </div>
            <div className="relative z-10 mt-8 rounded-xl overflow-hidden shadow-2xl group-hover:translate-y-[-10px] transition-transform duration-500">
               <img src="https://framerusercontent.com/images/KKPNqFmYKU78dG8kH5H2wLfBfL4.png" alt="Dashboard Mockup" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Bottom Left Card (Affordable Pricing) - spans 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <span className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-black inline-block"></span> Affordable Pricing
              </span>
              <h3 className="text-2xl font-serif text-black leading-tight">Enjoy clear and predictable costs with consistent monthly rates</h3>
            </div>
            <div className="absolute inset-0 opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500">
              <img src="https://framerusercontent.com/images/dYt9qWfUVyoLg8A9R9c2qRsm1OI.jpeg" alt="Girl photo" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Bottom Middle Card (Stats) - spans 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center gap-8 min-h-[300px]"
          >
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-2">New Partnership</p>
              <div className="text-5xl font-sans font-black text-white">33+</div>
              <p className="text-white/40 text-xs mt-1">Joined our creative network</p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-2">Client Growth</p>
              <div className="text-5xl font-sans font-black text-primary">128%</div>
              <p className="text-white/40 text-xs mt-1">Compared to the previous year</p>
            </div>
          </motion.div>

          {/* Bottom Right Card (Satisfaction) - spans 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#FFE500] rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group text-black"
          >
            <div className="relative z-10">
              <span className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-black inline-block"></span> Satisfaction Rate
              </span>
              <div className="text-6xl font-sans font-black text-black">90%</div>
              <p className="text-black/60 text-xs mt-2 uppercase tracking-widest font-bold">From project feedback</p>
            </div>
            <div className="absolute right-0 bottom-0 w-3/4 opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-500">
               <img src="https://framerusercontent.com/images/IghUEBaXpIGtCVxOruDBuHtavPA.jpeg" alt="Cute cat in hoodie" className="w-full h-auto object-cover rounded-tl-3xl" />
            </div>
          </motion.div>

          {/* Additional bottom right card (Flexible & Scalable) - spans 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group text-black"
          >
            <div className="relative z-10">
              <span className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-black inline-block"></span> Flexible & Scalable
              </span>
              <h3 className="text-2xl font-serif text-black leading-tight">Easily adjust your service level as your business grows.</h3>
            </div>
            <div className="absolute inset-0 opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500">
               <img src="https://framerusercontent.com/images/ZlPtxSMUZxnXeIIN6vosudMPA.jpeg" alt="Young guy jumping" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
