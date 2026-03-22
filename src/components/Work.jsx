import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: "Boreal VR Headset",
    client: "Nordvision",
    category: "VR Headset Product Design",
    image: "https://framerusercontent.com/images/34eFxOxTlERiyh4olFSqHf4W74Q.jpeg"
  },
  {
    title: "Velocity Motors",
    client: "Velocity Motors Group",
    category: "Automotive Website Revamp",
    image: "https://framerusercontent.com/images/VuqEkIrQxoTipMXJSbTnHBSaA.jpg"
  },
  {
    title: "Stride Apex",
    client: "Stride Athletics",
    category: "Digital Product Design",
    image: "https://framerusercontent.com/images/UKdZZdm3ILb0gEvplierCay0A.jpeg"
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="relative w-screen h-[60vh] overflow-hidden group cursor-pointer border-t border-white/20">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      </motion.div>

      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-10">
        <div className="w-full flex justify-end">
          <div className="text-right">
            <h4 className="text-white text-xl md:text-3xl font-serif">{project.client}</h4>
            <p className="text-white/70 text-sm uppercase tracking-widest mt-2">{project.category}</p>
          </div>
        </div>

        <div>
          <h3 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className="bg-black">
      <div className="w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Work;
