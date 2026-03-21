import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <img src="https://framerusercontent.com/images/07MRGUSC57J73KvZAlKUDzPAE.svg" alt="icon" className="w-5 h-5 filter invert" />
              What we do
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mt-6 mb-8">
              Perfectly aligned creative and production expertise to increase digital impact.
            </h2>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-300">
                View our work
              </button>
              <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
                Explore plans
              </button>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-2/3 space-y-16">
          {[
            {
              number: "01",
              title: "Branding —",
              desc: "From strategy to execution, we create authentic brand experiences that connect with your audience and foster lasting relationships.",
              tags: ["Brand Strategy", "Brand Identity", "Visual Identity", "Style Foundation", "Art Direction", "Brand Guidelines"]
            },
            {
              number: "02",
              title: "Digital —",
              desc: "We combine strategic thinking with creative design to deliver digital solutions that enhance user experience and drive engagement.",
              tags: ["Digital Strategy", "UX Design", "Concept Design", "Website & Mobile Design", "User Testing", "Motion Design"]
            },
            {
              number: "03",
              title: "Development —",
              desc: "Using cutting-edge technology, we build robust and scalable solutions that bring your digital vision to reality.",
              tags: ["Full Stack Development", "Framer Development", "Website Development", "CMS Integration", "SEO Optimization", "UI/UX Check"]
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col border-t border-white/10 pt-8"
            >
              <div className="flex justify-between items-baseline mb-6">
                <span className="font-serif text-3xl md:text-4xl text-white/40 italic">{'{'}{service.number}{'}'}</span>
                <h3 className="font-serif text-4xl md:text-5xl text-white text-right group-hover:text-primary transition-colors cursor-pointer">{service.title}</h3>
              </div>
              <p className="text-white/60 font-light leading-relaxed max-w-xl ml-auto text-right mb-8">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-3 justify-end">
                {service.tags.map((tag, j) => (
                  <span key={j} className="text-xs uppercase tracking-widest text-white/50 border border-white/20 px-4 py-2 rounded-full font-bold bg-white/5 hover:bg-primary hover:text-white transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
