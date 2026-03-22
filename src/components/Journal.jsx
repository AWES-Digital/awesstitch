import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: "The Evolution of Micro-Interactions",
    subtitle: "UX Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Digital Ecology in Practice",
    subtitle: "Sustainability",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Typography Trends",
    subtitle: "Brand Identity",
    image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1374&auto=format&fit=crop"
  },
  {
    title: "AI-Driven Design",
    subtitle: "Innovation",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1374&auto=format&fit=crop"
  }
];

const Journal = () => {
  return (
    <section id="journal" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white text-black relative">
      <div className="max-w-[1400px] mx-auto overflow-hidden">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Insights & Innovation | journal</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
              Straight from<br />the newsroom
            </h2>
          </div>
        </motion.div>

        {/* Horizontal Article Row */}
        <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
          <div className="flex gap-6 min-w-max">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col w-[280px] md:w-[350px] snap-start"
              >
                <div className="overflow-hidden rounded-3xl aspect-[4/5] bg-gray-100 relative mb-6">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-widest">{post.subtitle}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-serif text-black group-hover:text-primary transition-colors duration-500">
                  {post.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-12 md:mt-16 flex justify-center md:justify-end gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors duration-300">
            trending
          </button>
          <button className="bg-transparent border border-black/20 text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300">
            weekly top
          </button>
        </div>
      </div>
    </section>
  );
};

export default Journal;