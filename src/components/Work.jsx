import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Boreal VR Headset",
    client: "Nordvision",
    category: "VR Headset Product Design",
    image: "https://framerusercontent.com/images/34eFxOxTlERiyh4olFSqHf4W74Q.jpeg"
  },
  {
    title: "Stride Apex",
    client: "Stride Athletics",
    category: "Digital Product Design",
    image: "https://framerusercontent.com/images/UKdZZdm3ILb0gEvplierCay0A.jpeg"
  },
  {
    title: "Velocity Motors",
    client: "Velocity Motors Group",
    category: "Automotive Website Revamp",
    image: "https://framerusercontent.com/images/VuqEkIrQxoTipMXJSbTnHBSaA.jpg"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-32 bg-black px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary text-sm uppercase tracking-widest mb-4 block">Selected Work</span>
            <h2 className="font-serif text-5xl md:text-7xl text-white">
              Design that<br />
              <span className="text-white/40 italic">captivates</span> today<br />
              & inspires tomorrow.
            </h2>
          </motion.div>
          <a href="#" className="mt-8 md:mt-0 pb-2 border-b border-white/30 text-white hover:text-primary hover:border-primary transition-colors uppercase tracking-widest text-sm font-bold">
            View all projects
          </a>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col md:flex-row gap-8 md:gap-16 items-center"
            >
              <div className={`w-full md:w-3/5 overflow-hidden rounded-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[60vh] md:h-[80vh] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className={`w-full md:w-2/5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                <span className="text-white/40 text-xs uppercase tracking-widest mb-4 block">{project.client} / {project.category}</span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white group-hover:text-primary transition-colors duration-500 mb-8">
                  {project.title}
                </h3>
                <div className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-bold text-white border border-white/20 px-6 py-3 rounded-full group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  View Project
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
