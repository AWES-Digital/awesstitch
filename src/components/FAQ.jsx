import React from 'react';
import Accordion from './Accordion';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqItems = [
    {
      title: "What can I expect within 48 hours?",
      content: "You'll receive an initial mockup or design draft, giving you a first look at our creative direction for your project."
    },
    {
      title: "How does the subscription model work?",
      content: "Our subscription model offers unlimited design requests for a flat monthly fee, allowing you to submit projects as needed without additional costs."
    },
    {
      title: "Can I pause my subscription if needed?",
      content: "Yes, our flexible subscription allows you to pause or adjust your plan at any time to accommodate your business needs."
    },
    {
      title: "Who will I be working with on my projects?",
      content: "You'll be assigned a dedicated design expert and have access to a team of specialists to ensure your projects are handled with care and expertise."
    },
    {
      title: "How do I get started with Arpeggio?",
      content: "Simply book a quick call or chat with us on WhatsApp to discuss your project needs, or visit our contact page for more traditional communication."
    },
    {
      title: "How do revisions work?",
      content: "We offer unlimited design iterations, working closely with you to refine the project until it meets your expectations and objectives."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#050505] relative border-t border-white/10">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32">
        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Popular Queries | faq</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-white mt-6 mb-8 leading-tight tracking-tight max-w-sm">
              Quick and clear answers to your key questions
            </h2>
            <p className="text-white/40 font-serif italic text-xl leading-relaxed max-w-sm">
              Get the clarity you need about our design process and services.
            </p>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </div>

      {/* Still looking for answers section */}
      <div className="max-w-[1400px] mx-auto bg-black rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 z-10">
          <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">Still looking for answers?</h3>
          <p className="text-white/50 text-lg mb-12 max-w-md">Our team is always ready to assist you. Reach out to us with any questions or concerns.</p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="bg-primary text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300 w-full sm:w-auto text-center">
              book a call
            </button>
            <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center">
              contact us
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-[400px] rounded-2xl overflow-hidden relative z-10">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" alt="Team working" className="w-full h-full object-cover grayscale opacity-80" />
        </div>
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 z-0 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default FAQ;