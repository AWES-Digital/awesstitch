import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Noah Kristiansen",
    role: "Head of Projects, TWBE",
    quote: "The team transformed our brand with stunning visuals and innovative designs. Their responsiveness and creativity exceeded our expectations.",
    image: "https://framerusercontent.com/images/bTiA8lcD9mDhGq0Wl9d2pRny3s.jpg"
  },
  {
    name: "Sophia Williams",
    role: "Marketing Manager, Austrian Air",
    quote: "The innovative approach and fast delivery were exactly what we needed. The team was collaborative and brought our ideas to life beautifully.",
    image: "https://framerusercontent.com/images/LQE9zAV3E0j3FdIaWQHoNPoYcs.jpeg"
  },
  {
    name: "Nicolás Sánchez",
    role: "Content Strategist, Greenbay",
    quote: "The creativity and professionalism were unmatched. Our project was delivered on time and captured exactly what we envisioned.",
    image: "https://framerusercontent.com/images/iPOHoy2h1Qc5n8G5ICwcHNkbmQ.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden relative border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-secondary text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <img src="https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg" alt="icon" className="w-5 h-5 filter invert" />
            Client Stories
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mt-6 mb-8">
            Inspiring client experiences
          </h2>
          <p className="text-white/60 font-light leading-relaxed max-w-2xl mx-auto text-lg">
            Join us and become our next success story.
          </p>
        </motion.div>

        <div className="w-full flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex-shrink-0 w-full sm:w-[400px] snap-center bg-white/5 border border-white/10 p-8 rounded-3xl"
            >
              <div className="flex gap-1 mb-8">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 font-serif text-xl italic leading-relaxed mb-8 min-h-[120px]">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover filter grayscale" />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-white/50 text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
