import { motion } from 'framer-motion';
import './Motivation.scss';

const Motivation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="motivation" className="motivation">
      <div className="motivation__particles"></div>
      
      <div className="motivation__content">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="motivation__quote-container"
        >
          <div className="motivation__quote">
            "Let your code flow like clouds — calm, vast, and full of infinite possibilities."
          </div>
          <div className="motivation__author">— Harry Up There</div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          onClick={() => scrollToSection('contact')}
          className="motivation__cta"
        >
          Let's Work Together
        </motion.button>
      </div>
    </section>
  );
};

export default Motivation;
