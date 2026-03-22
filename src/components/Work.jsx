import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: "Boreal VR Headset",
    client: "Nordvision",
    category: "VR Headset Product Design",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop", // Man wearing VR headset photo
    bgColor: "bg-[#002f2f]" // Dark cyan teal background
  },
  {
    title: "Velocity Motors",
    client: "Velocity Motors Group",
    category: "Automotive Website Revamp",
    image: "https://images.unsplash.com/photo-1503376712341-ea781bc67500?q=80&w=2070&auto=format&fit=crop", // Dark automotive night scene
    bgColor: "bg-[#050505]"
  },
  {
    title: "Stride Apex",
    client: "Stride Athletics",
    category: "Digital Product Design",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop", // Model in orange coat
    bgColor: "bg-[#2a1100]"
  }
];

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect on the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`relative w-[100vw] h-screen overflow-hidden ${project.bgColor} flex items-center justify-center`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
      </motion.div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-16 lg:p-24">
        {/* Top Right: Client */}
        <div className="w-full flex justify-end">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-xs md:text-sm uppercase tracking-widest font-bold font-sans"
          >
            {project.client} / {project.category}
          </motion.p>
        </div>

        {/* Bottom Left: Title & Separator */}
        <div className="w-full flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-[1px] bg-white/30 mb-8 origin-left"
          />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none tracking-tight max-w-4xl"
            >
              {project.title}
            </motion.h3>

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center gap-4 text-xs md:text-sm uppercase tracking-widest font-bold text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 w-fit whitespace-nowrap"
            >
              View Project
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className="bg-black w-full overflow-hidden flex flex-col">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default Work;