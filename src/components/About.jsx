import React from 'react';
import { motion } from 'framer-motion';

const BentoCell = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className={`rounded-3xl overflow-hidden relative ${className}`}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-[#F5F5F5] text-black">
      <div className="max-w-[1400px] mx-auto">

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
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Why choose us | benefits</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight max-w-4xl">
              Elevate your brand<br />with our expertise
            </h2>
          </div>
          <p className="text-gray-500 font-serif italic text-xl md:text-2xl max-w-md">
            Discover the advantages of partnering with Arpeggio for your design needs.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24 auto-rows-[400px]">

          {/* Cell 1: Premium Plans */}
          <BentoCell className="bg-white col-span-1 lg:col-span-2 p-8 md:p-12 flex flex-col justify-between" delay={0.1}>
            <div className="z-10 relative">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Premium Plans</span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl max-w-sm mb-4">Unlimited design iterations.</h3>
            </div>
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1364&auto=format&fit=crop"
              alt="Hand holding card"
              className="absolute right-0 bottom-0 w-2/3 h-full object-cover object-left-top opacity-90 mix-blend-multiply"
            />
          </BentoCell>

          {/* Cell 2: Design Dashboard */}
          <BentoCell className="bg-primary col-span-1 p-8 md:p-12 text-black flex flex-col justify-between" delay={0.2}>
            <div className="z-10 relative">
              <span className="bg-black/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Design Dashboard</span>
              <h3 className="font-serif text-3xl md:text-4xl mb-4">Manage projects effortlessly.</h3>
            </div>
            <div className="w-full h-48 bg-black/5 rounded-xl border border-black/10 mt-auto relative overflow-hidden">
              <div className="absolute top-4 left-4 right-4 bottom-[-20px] bg-white rounded-t-lg shadow-lg flex flex-col p-4">
                 <div className="w-full h-8 bg-gray-100 rounded-md mb-2 flex items-center px-3 gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                 </div>
                 <div className="flex-1 bg-gray-50 rounded-md border border-gray-100"></div>
              </div>
            </div>
          </BentoCell>

          {/* Cell 3: Affordable Pricing */}
          <BentoCell className="bg-white col-span-1 p-8 md:p-12 flex flex-col justify-between" delay={0.3}>
            <div className="z-10 relative">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Affordable Pricing</span>
              <h3 className="font-serif text-3xl md:text-4xl mb-4">Enjoy clear and predictable costs.</h3>
            </div>
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1287&auto=format&fit=crop" alt="Girl sitting" className="w-full h-full object-cover opacity-20 grayscale" />
            </div>
          </BentoCell>

          {/* Cell 4: Process Carousel */}
          <BentoCell className="bg-black text-white col-span-1 lg:col-span-2 p-8 md:p-12 flex flex-col justify-between overflow-hidden" delay={0.4}>
            <div className="z-10 relative flex justify-between items-start">
              <div>
                <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Streamlined Process</span>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl max-w-sm mb-4">From concept to launch.</h3>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">←</button>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">→</button>
              </div>
            </div>

            <div className="flex gap-4 mt-8 overflow-x-auto pb-4 scrollbar-hide">
              {[
                { step: "01", title: "Kickoff", icon: "S", bg: "bg-blue-500" },
                { step: "02", title: "Design & Dev", icon: "F", bg: "bg-pink-500" },
                { step: "03", title: "Review", icon: "N", bg: "bg-gray-100 text-black" }
              ].map((item, i) => (
                <div key={i} className="min-w-[200px] flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/40 font-mono text-sm">{item.step}</span>
                    <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center font-bold text-xs`}>{item.icon}</div>
                  </div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                </div>
              ))}
            </div>
          </BentoCell>

        </div>

        {/* Bottom Stats & Tools & Photo Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6"
        >
          {/* Stats */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4 md:gap-6">
            <div className="flex-1 bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <h4 className="font-display text-5xl md:text-7xl font-bold mb-2 text-primary">33+</h4>
              <p className="font-bold uppercase tracking-widest text-xs text-gray-500">New Partnership</p>
            </div>
            <div className="flex-1 bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <h4 className="font-display text-5xl md:text-7xl font-bold mb-2">128%</h4>
              <p className="font-bold uppercase tracking-widest text-xs text-gray-500">Client Growth</p>
            </div>
          </div>

          {/* Satisfaction Rate */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center">
            <h4 className="font-display text-5xl md:text-7xl font-bold mb-2">90%</h4>
            <p className="font-bold uppercase tracking-widest text-xs text-gray-500">Satisfaction Rate</p>
          </div>

          {/* Tools Strip */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-8 flex flex-col justify-center overflow-hidden relative">
            <p className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-6 text-center">Tools & Integrations</p>
            <div className="flex items-center justify-center gap-4 whitespace-nowrap overflow-hidden">
               <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-lg">F</div>
               <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-lg">X</div>
               <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-lg">S</div>
               <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-lg">N</div>
            </div>
          </div>
        </motion.div>

        {/* Missing Photo Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {/* Flexible & Scalable */}
          <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex items-end h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop"
              alt="Flexible"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Flexible & Scalable</span>
              <h3 className="font-serif text-3xl text-white">Adapting to your specific business requirements.</h3>
            </div>
          </div>

          {/* Dedicated Assistance */}
          <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex items-end h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop"
              alt="Assistance"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Dedicated Assistance</span>
              <h3 className="font-serif text-3xl text-white">Consistent support throughout your journey.</h3>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;