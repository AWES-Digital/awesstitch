import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-background px-6 md:px-12 lg:px-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary text-sm uppercase tracking-widest mb-4 inline-block">Pricing</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Membership Plans
            </h2>
            <p className="text-white/60 font-light leading-relaxed max-w-2xl mx-auto text-lg">
              Your passport to flexible design revisions. Get unlimited creativity and all premium features with our monthly All-In-One plan.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Core Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-white/20 rounded-3xl p-10 bg-white/5 backdrop-blur-sm flex flex-col"
          >
            <h3 className="font-serif text-3xl text-white mb-2">Core Plan</h3>
            <p className="text-white/50 text-sm mb-8">* Pause or cancel whenever you wish.</p>

            <div className="text-5xl font-sans font-black text-white mb-8 flex items-end gap-2">
              $5,499
              <span className="text-lg text-white/40 font-normal">/month</span>
            </div>

            <button className="w-full bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-300 mb-4">
              Select Plan
            </button>
            <button className="w-full bg-transparent border border-white/20 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300 mb-12">
              Quick Call
            </button>

            <ul className="space-y-4 flex-grow">
              {[
                "First Mockup in 72hrs",
                "Single Project Queue",
                "Basic Design Iterations",
                "Dedicated Senior Designer",
                "Standard Development"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-white/80">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-light">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-primary rounded-3xl p-10 bg-primary/5 backdrop-blur-sm flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-bl-xl">
              Most Popular
            </div>
            <h3 className="font-serif text-3xl text-white mb-2">Pro Plan</h3>
            <p className="text-white/50 text-sm mb-8">* Minimal booking period — 2 months.</p>

            <div className="text-5xl font-sans font-black text-white mb-8 flex items-end gap-2">
              $8,999
              <span className="text-lg text-white/40 font-normal">/month</span>
            </div>

            <button className="w-full bg-primary text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 mb-4">
              Select Plan
            </button>
            <button className="w-full bg-transparent border border-white/20 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300 mb-12">
              Quick Call
            </button>

            <ul className="space-y-4 flex-grow">
              {[
                "Everything in Core",
                "Double Project Queue",
                "Unlimited Design Iterations",
                "Priority Support",
                "Advanced Framer Development"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-white/80">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-light">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
