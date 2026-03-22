import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white text-black relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <h2 className="font-display font-black text-[12vw] md:text-[120px] leading-none uppercase tracking-tighter w-full mb-8">
            what we do
          </h2>
          <p className="text-gray-500 text-xl md:text-3xl font-serif italic max-w-4xl">
            Perfectly aligned creative and production expertise to increase digital impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 mb-32">
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
              className="flex flex-col border-t border-black/10 pt-8"
            >
              <span className="font-bold text-primary text-sm mb-8">{'{'}{service.number}{'}'}</span>
              <h3 className="font-serif text-3xl md:text-4xl text-black font-bold mb-6">{service.title}</h3>
              <p className="text-gray-500 font-serif italic leading-relaxed mb-10 text-lg">
                {service.desc}
              </p>
              <ul className="flex flex-col gap-4">
                {service.tags.map((tag, j) => (
                  <li key={j} className="text-sm font-bold tracking-wide flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between border-t border-black/10 pt-16 gap-8"
        >
          <h3 className="font-serif text-4xl md:text-6xl text-black">Ready to create?</h3>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors duration-300 w-full sm:w-auto text-center">
              View our work
            </button>
            <button className="bg-transparent border border-black/20 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto text-center">
              Explore plans
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;