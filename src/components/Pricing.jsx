import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('core');

  return (
    <section id="pricing" className="py-32 px-6 md:px-12 lg:px-24 bg-black text-white relative">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mb-12">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Membership Plans | pricing</span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl lg:text-[100px] leading-[0.9] tracking-tight max-w-5xl mb-8 mx-auto">
              Your passport to flexible<br/>
              <span className="italic">design</span> revisions
            </h2>

            <p className="text-white/50 text-xl font-serif italic max-w-2xl mt-8">
              Get unlimited creativity and all premium features with our monthly All-In-One plan.
            </p>
          </motion.div>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 p-2 rounded-full inline-flex border border-white/10">
            <button
              onClick={() => setActiveTab('core')}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'core' ? 'bg-primary text-black' : 'text-white/60 hover:text-white'}`}
            >
              Core Plan
            </button>
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'pro' ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}
            >
              Pro Plan
            </button>
          </div>
        </div>

        {/* Pricing Card Area */}
        <div className="max-w-xl mx-auto flex justify-center w-full">
          <motion.div
            key={activeTab} // re-animate on tab change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full border border-white/20 rounded-3xl p-10 md:p-14 bg-[#0A0A0A] flex flex-col items-center text-center"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-6">
              {activeTab === 'core' ? 'Core Plan' : 'Pro Plan'}
            </span>

            <div className="text-5xl md:text-7xl font-display font-black text-white mb-2 flex items-baseline justify-center">
              {activeTab === 'core' ? '$5,499' : '$8,999'}
              <span className="text-lg md:text-2xl text-white/40 font-serif italic ml-2">/month</span>
            </div>

            <p className="text-white/40 text-sm mb-12">
              * Minimal booking period — 2 months.
            </p>

            <ul className="space-y-5 w-full text-left mb-16 border-t border-white/10 pt-12">
              {[
                "Pause or cancel anytime",
                "Unlimited design requests",
                "Dedicated project manager",
                "Weekly strategic meetings",
                "Priority support channel"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-white/80">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-bold tracking-wide text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="w-full flex flex-col gap-4">
              <button className="w-full bg-transparent border border-white text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-300">
                select plan
              </button>
              <a href="#" className="w-full text-center text-white/60 hover:text-white font-bold uppercase tracking-widest text-xs py-4 transition-colors">
                quick call
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;