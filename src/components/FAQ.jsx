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
      title: "Who will I be working with?",
      content: "You'll be assigned a dedicated design expert and have access to a team of specialists to ensure your projects are handled with care and expertise."
    },
    {
      title: "How do I get started?",
      content: "Simply book a quick call or chat with us on WhatsApp to discuss your project needs, or visit our contact page for more traditional communication."
    },
    {
      title: "How do revisions work?",
      content: "We offer unlimited design iterations, working closely with you to refine the project until it meets your expectations and objectives."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white text-sm uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                Popular Queries <span className="text-white/30 font-normal">| faq</span>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-3xl">
            <img src="https://framerusercontent.com/images/9XUqcBlTv9ViIXqj7oIJ1UxwJo.png" alt="Office team" className="w-full h-full object-cover filter grayscale" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
            <h3 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Still looking for answers or need a good chat?
            </h3>
            <p className="text-white/60 font-light text-lg">
              Our team will guide you through our design process, project specifications and cost estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
              <button className="flex-1 bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-primary hover:text-white transition-all duration-300">
                Book a Call
              </button>
              <button className="flex-1 bg-transparent border border-white/20 text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest w-full text-center sm:text-left">Anything left out?</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
