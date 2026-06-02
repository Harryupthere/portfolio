import { motion } from "framer-motion";
import meditationImage from "@/assets/meditation.jpg";
import { FileDown } from "lucide-react";
import "./About.scss";

const skills = [
  // Frontend
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "Bootstrap",
  "Tailwind CSS",

  // Backend
  "Node.js",
  "Express.js",
  "NestJS",
  "REST APIs",
  "JWT Authentication",

  // Databases & Caching
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",

  // Blockchain
  "Solidity",
  "Web3.js",
  "Ethers.js",
  "Smart Contracts",
  "DApp Development",
  "Blockchain Architecture",
  "Token Development",
  "ERC-20",
  "ERC-721",
  "ERC-1155",
  "NFT Marketplaces",
  "ICO Development",
  "Staking Protocols",
  "Vesting Contracts",
  "Multisig Wallets",
  "DeFi Protocols",
  "DAO Development",
  "Gas Optimization",
  "Smart Contract Auditing",
  "Upgradeable Contracts",
  "OpenZeppelin",

  // Blockchain Tools
  "Hardhat",
  "Foundry",
  "Truffle",
  "Remix IDE",
  "Ganache",
  "IPFS",
  "Pinata",

  // Networks
  "Ethereum",
  "Base",
  "Polygon",
  "BNB Chain",
  "Arbitrum",
  "Optimism",

  // Payments
  "Stripe",
  "Razorpay",
  "CoinPayments",
  "Crypto Payment Integration",

  // Queues & Real-Time
  "BullMQ",
  "RabbitMQ",
  "Socket.IO",
  "WebSockets",

  // Cloud & DevOps
  "AWS",
  "CloudFront",
  "S3",
  "Nginx",
  "PM2",
  "Docker",
  "Linux",

  // Version Control
  "Git",
  "GitHub",
  "GitLab",

  // Testing
  "Mocha",
  "Chai",
  "Jest",

  // Security
  "Smart Contract Security",
  "Reentrancy Protection",
  "Access Control",
  "OWASP Security Practices"
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about__header"
        >
          <h2 className="about__title">About Me</h2>
          <p className="about__subtitle">Developer with Purpose</p>
        </motion.div>

        <div className="about__content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="about__text"
          >
            <p className="about__bio">
              Hi, I'm <strong>Harsh Chouhan</strong>, also known as{" "}
              <strong>Harry</strong>. I'm a blockchain developer who believes in
              building the future with calmness and clarity.
            </p>
            <p className="about__bio">
              My journey in Web3 is guided by purpose — creating decentralized
              solutions that empower users and bring transparency to the digital
              world. I blend technical expertise with a peaceful mindset,
              ensuring every line of code serves a greater purpose.
            </p>
            <p className="about__bio">
              When I'm not coding smart contracts or building DApps, you'll find
              me exploring spiritual practices, meditation, and finding
              inspiration in the clouds above.
            </p>

            {/* <button className="about__resume-btn"> */}
            <a
              href="/Harsh-Chouhan-Resume.pdf"
              download="Harsh-Chouhan-Resume.pdf"
              className="about__resume-btn"
            >
              <FileDown size={20} />
              Download Resume
            </a>
            {/* </button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="about__image"
          >
            <img src={meditationImage} alt="Meditation" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="about__skills"
        >
          <h3 className="about__skills-title">Technical Skills</h3>
          <div className="about__skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                viewport={{ once: true }}
                className="about__skill-chip"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
