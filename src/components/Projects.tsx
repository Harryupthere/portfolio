import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ExternalLink, Github, X } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

import projectImage1 from '@/assets/projectImage1.png';
import projectImage2 from '@/assets/projectImage2.png';
import projectImage3 from '@/assets/projectImage3.png';
import projectImage4 from '@/assets/projectImage4.png';
import projectImage5 from '@/assets/projectImage5.png';
import projectImage6 from '@/assets/projectImage6.png';
import projectImage7 from '@/assets/projectImage7.png';
import projectImage8 from '@/assets/projectImage8.png';
import projectImage9 from '@/assets/projectImage9.png';
import projectImage10 from '@/assets/projectImage10.png';
import projectImage11 from '@/assets/projectImage11.png';
import adminPanelImage from '@/assets/adminPanelImage.png';
import aztechreward from '@/assets/aztechreward.png';
import tradlive from '@/assets/tradelive.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.scss';

Modal.setAppElement('#root');

const projects = [

  {
    id: 1,
    title: 'Art Fungible – NFT Marketplace',
    description:
      'A premium multi-chain NFT marketplace where top artists mint and sell digital artwork on Ethereum and Base. Features include wallet connectivity, lazy minting, secure NFT transfers, royalty automation, and IPFS storage. Art Fungible also offers a unique feature where buyers receive physical artwork linked to their NFTs. With optimized Web3 interactions and artist dashboards, the platform delivers a smooth minting and trading experience for both creators and collectors.',
    image: projectImage1,
    techStack: ['Solidity', 'Next.js', 'Web3.js', 'IPFS', 'Base', 'Ethereum'],
    github: '',
    demo: 'https://artfungible.io/',
  },

  {
    id: 2,
    title: 'Mr Mint – ICO & Walk-to-Earn Ecosystem',
    description:
      'Mr Mint is a feature-rich ICO platform built on BSC with multiple utilities including Walk & Earn, NFT systems, gaming modules, and rewards. Users can buy $MNT tokens using Web3 wallet connectivity, track vesting, and participate in reward programs. The platform includes automated distribution, referral logic, dynamic pricing, and real-time purchase tracking. It bridges fitness and blockchain by rewarding physical steps with token benefits.',
    image: projectImage2,
    techStack: ['Solidity', 'React', 'Web3.js', 'BSC', 'Node.js'],
    github: '',
    demo: 'https://www.mrmint.io/',
  },

  {
    id: 3,
    title: 'Equalizer Exchange – DEX & Governance',
    description:
      'A decentralized exchange offering swapping, liquidity pools, governance voting, and bribe mechanics. Users can connect wallets, trade tokens, stake, and participate in protocol-level decision-making. The platform supports live token pricing, auto-routing for optimized swaps, automatic contract calls, and secure smart-contract interactions. Equalizer Exchange delivers a complete DeFi experience with AMM mechanics and community-driven governance.',
    image: projectImage3,
    techStack: ['Solidity', 'React', 'Web3.js', 'DEX', 'AMM'],
    github: '',
    demo: 'https://equalizer.exchange/',
  },

  {
    id: 4,
    title: 'Mr Mint Mystery Box – NFT Mining Game',
    description:
      'A gamified NFT platform where users purchase mystery boxes containing computer-part NFTs. When a user completes a full system, they can start mining MNT tokens through automated smart contracts. The platform includes randomized NFT reveals, wallet connectivity, reward dashboards, mining stats, and NFT inventory tracking. Mystery Box merges gaming with real token utility through blockchain-powered randomness and mining mechanisms.',
    image: projectImage4,
    techStack: ['Solidity', 'React', 'Web3.js', 'BSC', 'IPFS'],
    github: '',
    demo: 'https://nft.mrmint.io/',
  },

  {
    id: 5,
    title: 'Bidex NFT – Marketplace with Lazy Minting',
    description:
      'A modern NFT marketplace built around lazy minting, enabling creators to mint NFTs only when a purchase is made. Features include wallet connectivity, creator dashboards, automated royalty tracking, bidding, and optimized buying/selling flows. With secure smart contracts and gas-efficient mechanics, Bidex NFT offers a scalable and friendly environment for trading digital assets.',
    image: projectImage5,
    techStack: ['Solidity', 'Next.js', 'Web3.js', 'IPFS'],
    github: '',
    demo: 'https://www.bidexnft.io/',
  },

  {
    id: 6,
    title: 'Ponzu3 – Token Swap ICO',
    description:
      'Ponzu3 is a simple and intuitive ICO swap interface where users can exchange supported cryptocurrencies for Ponzu tokens. The system features wallet integration, automated token approvals, real-time conversion calculations, transaction verification, and secure purchase flow. Designed with a focus on speed and simplicity, Ponzu3 offers a clean user experience powered by accurate Web3 interaction.',
    image: projectImage6,
    techStack: ['Solidity', 'React', 'Web3.js'],
    github: '',
    demo: 'https://ponzu3-eta.vercel.app/',
  },

  {
    id: 7,
    title: 'Tito Token – ICO & Token Locking',
    description:
      'Tito Token is an ICO platform where users can buy and lock tokens for a selected duration to earn boosted returns. The app supports multi-token purchasing, wallet connectivity, smart-contract–driven locking logic, vesting timers, and real-time pricing. Users can choose lock periods, complete purchases, and track their locked tokens through an intuitive dashboard.',
    image: projectImage7,
    techStack: ['Solidity', 'React', 'Web3.js', 'BSC'],
    github: '',
    demo: 'https://tito-token.vercel.app/',
  },

  {
    id: 8,
    title: 'UNI Meta – Decentralized Communication System',
    description:
      'UNI Meta is a decentralized communication platform that uses wallet-based identity instead of traditional logins. It features secure messaging, MLM structure logic, real-time updates, and a mobile-first interface. With Web3 authentication, automated smart-contract actions, and responsive UI components, UNI Meta redefines communication through blockchain-powered verification.',
    image: projectImage8,
    techStack: ['Solidity', 'React', 'Web3.js', 'Node.js'],
    github: '',
    demo: 'https://akram-mlm.vercel.app/',
  },

  {
    id: 9,
    title: 'Read Riches – Stock Learning Platform',
    description:
      'Read Riches is a stock market learning platform where admins can upload and update detailed study content on Indian stocks. Users can explore strategies, chart patterns, market indicators, and analysis summaries. The platform includes structured lessons, searchable content, chart references, and a clean UI designed to help beginners understand the stock market easily.',
    image: projectImage9,
    techStack: ['Next.js', 'Node.js', 'MongoDB'],
    github: '',
    demo: 'https://www.readriches.com/',
  },

  {
    id: 10,
    title: 'AurumFX – Live Forex Pricing Dashboard',
    description:
      'AurumFX is a single-page forex dashboard showing live currency pricing, market trends, and quick predictions. Built with fast and lightweight components, it delivers real-time updates in a clean tabular format. Users can instantly track major forex pairs and monitor short-term movements with a simple, responsive UI designed for quick access.',
    image: projectImage10,
    techStack: ['Next.js', 'API Integration', 'Node.js'],
    github: '',
    demo: 'https://aurum-fx-one.vercel.app/',
  },

  {
    id: 11,
    title: 'Laxmi Coin – Astrology Token Utility',
    description:
      'Laxmi Coin is a utility token platform where users can purchase tokens and use them to book astrologer consultations. The platform integrates wallet connectivity, smart-contract–based transactions, automated booking logic, and a smooth token-purchase flow. It connects traditional astrology services with blockchain transparency and tokenized payments.',
    image: projectImage11,
    techStack: ['Solidity', 'React', 'Web3.js', 'BSC'],
    github: '',
    demo: 'https://laxmicoin.com/',
  },
  {
  id: 12,
  title: 'AZTech Rewards - All in one platform to educate yourself about anything you want and earn rewards',
  description:
    'AZTech Rewards is an educational platform where users can learn about various topics and earn rewards for their progress. The platform features interactive courses, quizzes, and a reward system that incentivizes learning. Users can track their progress, earn points, and redeem them for rewards, creating a fun and engaging learning experience.',
  image: aztechreward,
  techStack: ['Node.js', 'React.js', 'MySQL', 'ChatGPT api','Stripe','BoomFy','Redis', 'AdminLTE / Custom UI'],
  github: '',
  demo: 'http://aztechreward.com/',
},
  {
  id: 13,
  title: 'TradeLive24 – Fiat trading edu platform',
  description:
    'TradeLive24 is an educational platform focused on live trading of fiat currencies. It offers real-time market data, interactive charts, and educational content to help users learn about forex trading. The platform includes features like live price tracking, strategy guides, and a user-friendly interface designed to make learning about forex markets accessible and engaging.',
  image: tradlive,
  techStack: ['Nest.js', 'React.js', 'MySQL', 'ChatGPT api','Stripe', 'AdminLTE / Custom UI'],
  github: '',
  demo: 'https://www.tradelive24.com/',
},
 {
  id: 14,
  title: 'Universal Admin Panel – Full Project Control Dashboard',
  description:
    'A fully controlled, multi-module admin panel built to manage every blockchain project from a single dashboard. This panel includes user management, KYC verification, NFT & token monitoring, ICO controls, transaction tracking, wallet activity, and real-time analytics. Admins can update homepage content, manage collections, modify token prices, trigger airdrops, approve withdrawals, and control project settings with secure role-based access. The dashboard is integrated with Web3 for direct contract actions, live data fetching, automated updates, and error logging. Designed with clean UI/UX, fast performance, and a scalable structure supporting multiple projects like NFT marketplaces, ICO platforms, DEX systems, and mining dashboards.',
  image: adminPanelImage,
  techStack: ['Next.js', 'Node.js', 'MongoDB', 'Web3.js', 'Solidity', 'AdminLTE / Custom UI'],
  github: '',
  demo: '',
}


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
