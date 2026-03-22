import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white text-black relative border-t border-black/10">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Client Stories | testimonials</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Inspiring client experiences
          </h2>
          <p className="text-gray-500 font-serif italic text-xl md:text-2xl">
            Join us and become our next success story
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start mb-32"
        >
          {/* Left: Image & Watch Video */}
          <div className="w-full md:w-5/12 relative group">
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
                alt="Deborah Keith"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Watch Video Button - centered on image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button className="flex items-center gap-4 bg-white/90 backdrop-blur-sm text-black px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 rounded-full border border-black group-hover:border-white flex items-center justify-center transition-colors duration-300">
                  <svg width="10" height="12" viewBox="0 0 14 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-0.5">
                    <path d="M13.2384 7.15392C13.8967 7.54019 13.8967 8.48427 13.2384 8.87053L1.51654 15.7516C0.849206 16.1434 0 15.6622 0 14.8933L0 1.13117C0 0.362228 0.849204 -0.119028 1.51653 0.272827L13.2384 7.15392Z" />
                  </svg>
                </div>
                watch video
              </button>
            </div>
          </div>

          {/* Right: Quote */}
          <div className="w-full md:w-7/12 flex flex-col pt-8">
            {/* Star Rating */}
            <div className="flex gap-2 mb-12">
              {[1,2,3,4,5].map(star => (
                <svg key={star} className="w-6 h-6 text-black fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-tight lg:leading-[1.1] mb-16 relative">
              <span className="absolute -left-8 -top-8 text-primary/20 text-[120px] font-serif leading-none">"</span>
              The innovative approach and fast delivery were exactly what we needed. The team was collaborative and brought our ideas to life beautifully.
            </p>

            <div className="flex items-center gap-4">
               <div>
                  <h4 className="font-serif text-2xl font-bold mb-2">Deborah Keith</h4>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Account Director, GlobalTech</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full"
        >
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors duration-300 w-full sm:w-auto text-center">
            membership plans
          </button>
          <button className="bg-transparent border border-black/20 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto text-center">
            view projects
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;