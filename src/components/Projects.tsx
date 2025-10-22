import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ExternalLink, Github, X } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.scss';

Modal.setAppElement('#root');

const projects = [
  {
    id: 1,
    title: 'DeFi Lending Platform',
    description: 'A decentralized lending and borrowing platform built with Solidity and React. Features include collateralized loans, interest rate calculations, and automated liquidations.',
    image: project1,
    techStack: ['Solidity', 'React', 'Web3.js', 'Hardhat', 'IPFS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Smart Contract Auditor',
    description: 'An automated tool for analyzing smart contracts, detecting vulnerabilities, and providing security recommendations for Web3 projects.',
    image: project2,
    techStack: ['Node.js', 'Solidity', 'TypeScript', 'Express', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 3,
    title: 'NFT Marketplace',
    description: 'A full-featured NFT marketplace with minting, trading, and auction capabilities. Integrated with IPFS for decentralized storage.',
    image: project3,
    techStack: ['React', 'Solidity', 'Ethers.js', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects__header"
        >
          <h2 className="projects__title">Projects</h2>
          <p className="projects__subtitle">Recent Work</p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="projects__swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="projects__card"
                onClick={() => openModal(project)}
              >
                <div className="projects__card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="projects__card-content">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-description">
                    {project.description.substring(0, 100)}...
                  </p>
                  <button className="projects__card-btn">View Details</button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="projects__modal"
        overlayClassName="projects__modal-overlay"
      >
        {selectedProject && (
          <div className="projects__modal-content">
            <button onClick={closeModal} className="projects__modal-close">
              <X size={24} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="projects__modal-image"
            />

            <h3 className="projects__modal-title">{selectedProject.title}</h3>
            <p className="projects__modal-description">{selectedProject.description}</p>

            <div className="projects__modal-tech">
              <h4>Tech Stack:</h4>
              <div className="projects__modal-tech-list">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="projects__modal-tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="projects__modal-links">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__modal-link"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__modal-link"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
