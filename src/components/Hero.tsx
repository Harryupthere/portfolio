import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-clouds.jpg';
import profileImage from '@/assets/profile.png';
import './Hero.scss';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__background" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero__overlay"></div>
      </div>
      
      <div className="hero__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero__profile"
        >
          <img src={profileImage} alt="Harsh Chouhan" className="hero__profile-image" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero__title"
        >
          Harry Up There
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero__subtitle"
        >
          Blockchain Developer | Web3 Enthusiast | MERN & Solidity Expert
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero__tagline"
        >
          "Building decentralized futures with peace, purpose, and precision."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero__cta"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="hero__button hero__button--primary"
          >
            Hire Me
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="hero__button hero__button--secondary"
          >
            View Projects
          </button>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hero__scroll-arrow"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
