import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: "The Evolution of Micro-Interactions",
    date: "Wednesday, February 26, 2025",
    author: "Flavio Montanari",
    image: "https://framerusercontent.com/images/ic6wNHJ9iUBQwJWfxFDngHWoAoQ.jpeg"
  },
  {
    title: "Digital Ecology in Practice",
    date: "Wednesday, January 1, 2025",
    author: "Clara Söderberg",
    image: "https://framerusercontent.com/images/rqCVfLnFzHvBhssFlJGSeSIff4U.jpeg"
  },
  {
    title: "Typography Trends",
    date: "Tuesday, January 14, 2025",
    author: "Tomasso Fiorelli",
    image: "https://framerusercontent.com/images/fhzk6SLsvsdAQCWSJfM5OXQTERg.png"
  }
];

const Journal = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <img src="https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg" alt="icon" className="w-5 h-5 filter invert" />
              Insights & Innovation
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white">
              Journal
            </h2>
            <p className="text-white/60 font-light leading-relaxed max-w-sm mt-6">
              Straight from the newsroom. Handpicked collection of design insights and industry perspectives.
            </p>
          </motion.div>
          <a href="#" className="mt-8 md:mt-0 pb-2 border-b border-white/30 text-white hover:text-primary hover:border-primary transition-colors uppercase tracking-widest text-sm font-bold">
            View all posts
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-white/5 relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center text-white/40 text-xs uppercase tracking-widest mb-4">
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-primary transition-colors duration-500 mb-4">
                    {post.title}
                  </h3>
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-widest border-t border-white/10 pt-4 mt-auto">
                  Written by <span className="text-white/60 ml-2 font-normal">{post.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
