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
              <img src="https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg" alt="icon" className="w-5 h-5 filter invert" />
              Popular Queries
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mt-6 mb-8">
              Quick and clear answers to your key questions
            </h2>
            <p className="text-white/60 font-light leading-relaxed max-w-sm mb-8">
              Get the clarity you need about our design process and services.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-2/3">
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
    </section>
  );
};

export default FAQ;
