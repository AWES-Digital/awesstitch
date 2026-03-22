import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <img src="https://framerusercontent.com/images/07MRGUSC57J73KvZAlKUDzPAE.svg" alt="icon" className="w-16 h-16" />
              <img src="https://framerusercontent.com/images/07MRGUSC57J73KvZAlKUDzPAE.svg" alt="icon" className="w-16 h-16" />
            </div>
            <h2 className="font-sans font-black text-6xl md:text-[120px] text-black leading-none uppercase tracking-tighter">
              what we do
            </h2>
            <p className="font-serif text-2xl md:text-3xl text-gray-500 mt-4 max-w-xl">
              Perfectly aligned creative and production expertise to increase digital impact.
            </p>
          </motion.div>
        </div>

        <div className="w-full space-y-16">
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
              className="flex flex-col md:flex-row gap-8 border-t border-black/10 pt-16"
            >
              <div className="w-full md:w-1/3">
                <span className="font-sans font-bold text-lg md:text-xl text-black/40 italic">{'{'}{service.number}{'}'}</span>
                <h3 className="font-serif text-4xl md:text-6xl text-black group-hover:text-primary transition-colors cursor-pointer mt-4">{service.title}</h3>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="text-xs uppercase tracking-widest text-black/50 border border-black/20 px-6 py-3 rounded-full font-bold bg-transparent hover:bg-black hover:text-white transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
