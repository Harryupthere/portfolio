import { motion } from 'framer-motion';
import { Code2, Blocks, Lightbulb, Globe } from 'lucide-react';
import { Database,Palette } from "lucide-react";

import './Services.scss';

const services = [
  {
    icon: Blocks,
    title: 'Smart Contract Development',
    description: 'Secure and efficient smart contracts built with Solidity, audited for reliability and gas optimization.',
  },
  {
    icon: Globe,
    title: 'DApp Integration',
    description: 'Seamless Web3 integration with modern frontends, wallet connections, and blockchain interactions.',
  },
  {
    icon: Lightbulb,
    title: 'Blockchain Consultancy',
    description: 'Strategic guidance on blockchain architecture, tokenomics, and decentralized system design.',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Beautiful, responsive interfaces built with React, TypeScript, and modern web technologies.',
  },
   {
    icon: Database, // You can replace with a more suitable icon if available
    title: 'Backend Development',
    description: 'Robust backend solutions using Node.js and NestJS, with seamless database integration and scalable APIs.',
  },
  {
    icon: Palette, // You can replace with a design-related icon if available
    title: 'Figma Designing',
    description: 'Modern UI/UX design in Figma, delivering intuitive and visually appealing prototypes for web and mobile.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="services__header"
        >
          <h2 className="services__title">Services</h2>
          <p className="services__subtitle">What I Offer</p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="services__card"
              >
                <div className="services__icon">
                  <Icon size={40} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
