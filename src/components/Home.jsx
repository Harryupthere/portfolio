import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <Header />
            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className="my-discription">
                                <div>
                                    <h1>Hello!<span>&#128075;</span>
                                        <br />
                                        This is <span>Harsh</span>
                                    </h1>
                                    <h2>
                                        Blockchain Developer🚀
                                    </h2>
                                    <p>Passionate about transforming ideas into decentralized realities. With a mastery of Web3 technologies, I craft innovative solutions that redefine the digital landscape. Let's build the future, one block at a time. 💻🔗 #BlockchainMagic #Web3Wizardry </p>
                                    <div className="home-btn">
                                        <Button
                                            variant="primary"
                                            href="Harsh%20Chouhan%20Resume.pdf"
                                            target="_blank"
                                        >
                                            Resume <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="my-picture">
                                <div className="pro-pic">
                                    {/* <img src="images/kuni-anime.jpg" className="harsh"/> */}
                                    <div className="my-img">
                                        <div className="harsh-img"></div>
                                    </div>
                                    <img src="images/harsh-image3.png" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className="light-bg">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="my-work">
                                <h2 className="main-heading">My latest projects</h2>
                            </div>
                            <div className="projects-box">
                                <Row>
                                    <Col md={4}>
                                        <Link to="https://mrmint.io/" target="_blank">
                                            <div className="projects">
                                                <div className="box">
                                                    
                                                    <iframe
                                                        src="https://mrmint.io"
                                                        width="100%"
                                                        height="200"
                                                        style={{ border: 'none' }}
                                                        title="Mr Mint Project"
                                                    />
                                                    <h3>Mr Mint</h3>
                                                    <p>Project: MrMint ICO Platform </p>
                                                    <p>Role: Blockchain and Web3 developer</p>
                                                    <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>

                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={4}>
                                        <Link to="https://equalizer.exchange/" target="_blank">
                                            <div className="projects">
                                                <div className="box">
                                                    <iframe
                                                        src="https://equalizer.exchange"
                                                        width="100%"
                                                        height="200"
                                                        style={{ border: 'none' }}
                                                        title="Equalizer Exchange"
                                                    />
                                                    <h3>Equalizer Exchange</h3>
                                                    <p>Project: Equalizer Exchange</p>
                                                    <p>Role: Blockchain and Web3 developer</p>
                                                    <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>

                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={4}>
                                        <Link to="https://dappwin.io/" target="_blank">
                                            <div className="projects">
                                                <div className="box">
                                                    <iframe
                                                        src="https://dappwin.io"
                                                        width="100%"
                                                        height="200"
                                                        style={{ border: 'none' }}
                                                        title="Dapp win"
                                                    />
                                                    <h3>Dapp Win</h3>
                                                    <p>Project: Dapp Win</p>
                                                    <p>Role: Blockchain and full stack developer</p>
                                                    <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>

                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col md={4}>
                                        <Link to="https://artfungible.io/" target="_blank">
                                            <div className="projects">
                                                <div className="box">
                                                    <iframe
                                                        src="https://artfungible.io"
                                                        width="100%"
                                                        height="200"
                                                        style={{ border: 'none' }}
                                                        title="Art Fungible"
                                                    />
                                                    <h3>Art Fungible</h3>
                                                    <p>Project: Art fungible NFT Marketplace</p>
                                                    <p>Role: Blockchain and full stack developer</p>
                                                    <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>

                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={4}>
                                        <Link to="https://sportsmint.io/" target="_blank">
                                            <div className="projects">
                                                <div className="box">
                                                    <iframe
                                                        src="https://sportsmint.io"
                                                        width="100%"
                                                        height="200"
                                                        style={{ border: 'none' }}
                                                        title="Sports mint"
                                                    />
                                                    <h3>Sports mint</h3>
                                                    <p>Project: Sports mint NFT fantacy game</p>
                                                    <p>Role: Blockchain and full stack developer</p>
                                                    <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>

                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={4}>
                                        <Link to="https://tito-token.vercel.app/" target="_blank">
                                            <div className="projects">
                                                <div className="box">
                                                    <iframe
                                                        src="https://tito-token.vercel.app"
                                                        width="100%"
                                                        height="200"
                                                        style={{ border: 'none' }}
                                                        title="Tito Token"
                                                    />
                                                    <h3>Tito Token</h3>
                                                    <p>Project: Tito Token</p>
                                                    <p>Role: Blockchain and full stack developer</p>
                                                    <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>

                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="additional-projects">
                                <h3>
                                    I've also worked on numerous admin panels and other unlisted projects, demonstrating my versatility and adaptability across various blockchain applications.
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}

            <section className="light-bg">
    <Container>
        <Row>
            <Col md={12}>
                <div className="my-work">
                    <h2 className="main-heading">My latest projects</h2>
                </div>
                <div className="projects-box">
                    <Row>
                        <Col md={4}>
                            <Link to="https://mrmint.io/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://mrmint.io"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Mr Mint Project"
                                        />
                                        <h3>Mr Mint</h3>
                                        <p>Project: MrMint ICO Platform </p>
                                        <p>Role: Blockchain and Web3 developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://equalizer.exchange/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://equalizer.exchange"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Equalizer Exchange"
                                        />
                                        <h3>Equalizer Exchange</h3>
                                        <p>Project: Equalizer Exchange</p>
                                        <p>Role: Blockchain and Web3 developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://dappwin.io/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://dappwin.io"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Dapp win"
                                        />
                                        <h3>Dapp Win</h3>
                                        <p>Project: Dapp Win</p>
                                        <p>Role: Blockchain and full stack developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Link to="https://artfungible.io/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://artfungible.io"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Art Fungible"
                                        />
                                        <h3>Art Fungible</h3>
                                        <p>Project: Art fungible NFT Marketplace</p>
                                        <p>Role: Blockchain and full stack developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://sportsmint.io/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://sportsmint.io"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Sports mint"
                                        />
                                        <h3>Sports Mint</h3>
                                        <p>Project: Sports mint NFT fantasy game</p>
                                        <p>Role: Blockchain and full stack developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://tito-token.vercel.app/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://tito-token.vercel.app"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Tito Token"
                                        />
                                        <h3>Tito Token</h3>
                                        <p>Project: Tito Token</p>
                                        <p>Role: Blockchain and full stack developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>

                    {/* New Row for Additional Projects */}
                    <Row className="mt-4">
                        <Col md={4}>
                            <Link to="https://musioo-nino.vercel.app/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://musioo-nino.vercel.app/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Musioo Nino"
                                        />
                                        <h3>Musioo Nino</h3>
                                        <p>Project: Musioo Nino</p>
                                        <p>Role: Full stack developer</p>
                                        <p>Tech used: React.js, Node.js, MongoDB</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://bitcoinverse.tech/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://bitcoinverse.tech/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Bitcoin Verse"
                                        />
                                        <h3>Bitcoin Verse</h3>
                                        <p>Project: Bitcoin Verse</p>
                                        <p>Role: Blockchain developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://aavvee-clone.vercel.app/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://aavvee-clone.vercel.app/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Aavvee Clone"
                                        />
                                        <h3>Aavvee Clone</h3>
                                        <p>Project: Aavvee Clone</p>
                                        <p>Role: Full stack developer</p>
                                        <p>Tech used: React.js, Node.js, MongoDB</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Link to="https://uniswap-sumobot-dapp.vercel.app/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://uniswap-sumobot-dapp.vercel.app/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Uniswap Sumobot Dapp"
                                        />
                                        <h3>Uniswap Sumobot Dapp</h3>
                                        <p>Project: Uniswap Sumobot Dapp</p>
                                        <p>Role: Blockchain developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://btc-prediction-dapp.vercel.app/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://btc-prediction-dapp.vercel.app/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="BTC Prediction Dapp"
                                        />
                                        <h3>BTC Prediction Dapp</h3>
                                        <p>Project: BTC Prediction Dapp</p>
                                        <p>Role: Blockchain developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://multi-wallet-notepad.vercel.app/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://multi-wallet-notepad.vercel.app/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Multi Wallet Notepad"
                                        />
                                        <h3>Multi Wallet Notepad</h3>
                                        <p>Project: Multi Wallet Notepad</p>
                                        <p>Role: Full stack developer</p>
                                        <p>Tech used: React.js, Node.js, MongoDB</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Link to="https://bidex-admin-harsh.vercel.app/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://bidex-admin-harsh.vercel.app/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Bidex Admin"
                                        />
                                        <h3>Bidex Admin</h3>
                                        <p>Project: Bidex Admin</p>
                                        <p>Role: Full stack developer</p>
                                        <p>Tech used: React.js, Node.js, MongoDB</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://uniswap-sumobot-dapp.vercel.app/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://uniswap-sumobot-dapp.vercel.app/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Uniswap Sumobot Dapp"
                                        />
                                        <h3>Uniswap Sumobot Dapp</h3>
                                        <p>Project: Uniswap Sumobot Dapp</p>
                                        <p>Role: Blockchain developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://bet-bitcoin.ai/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://bet-bitcoin.ai/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Bet Bitcoin"
                                        />
                                        <h3>Bet Bitcoin</h3>
                                        <p>Project: Bet Bitcoin</p>
                                        <p>Role: Blockchain developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Link to="https://www.stakeharvest.com/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://www.stakeharvest.com/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Stake Harvest"
                                        />
                                        <h3>Stake Harvest</h3>
                                        <p>Project: Stake Harvest</p>
                                        <p>Role: Blockchain developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://vne.network/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://vne.network/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="VNE Network"
                                        />
                                        <h3>VNE Network</h3>
                                        <p>Project: VNE Network</p>
                                        <p>Role: Blockchain developer</p>
                                        <p>Tech used: Solidity, Web3.js, React.js, Node.js, MySQL database</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="https://bharat-network.vercel.app/" target="_blank">
                                <div className="projects">
                                    <div className="box">
                                        <iframe
                                            src="https://bharat-network.vercel.app/"
                                            width="100%"
                                            height="200"
                                            style={{ border: 'none' }}
                                            title="Bharat Network"
                                        />
                                        <h3>Bharat Network</h3>
                                        <p>Project: Bharat Network</p>
                                        <p>Role: Full stack developer</p>
                                        <p>Tech used: React.js, Node.js, MongoDB</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div className="additional-projects">
                    <h3>
                        I've also worked on numerous admin panels and other unlisted projects, demonstrating my versatility and adaptability across various blockchain applications.
                    </h3>
                </div>
            </Col>
        </Row>
    </Container>
</section>

            <section className="light-bg">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="my-work">
                                <h2 className="main-heading">About Me</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={6}>
                            <div className="my-skills">
                                <div className="box">
                                    <div className="box-inner">
                                        <h3>My Skills</h3>
                                        <p>Blockchain, Web3, React.js, Node.js, Solidity,
                                            Next.js, MongoDB, SQL
                                        </p>
                                        <h3>My Goals</h3>
                                        <p>I aim to deepen my knowledge in blockchain and related technologies, focusing on innovation and growth.  <br />
                                            I am passionate about exploring new horizons and contributing to groundbreaking projects.</p>
                                        <h3>My Strengths</h3>
                                        <p>My strengths lie in a solid foundation in Solidity and Web3.js, a proven track record of successful blockchain projects, and a passion for innovation. I thrive on solving complex challenges and continuously enhancing my skills.
                                        </p>
                                        <h3>YouTube Channel</h3>
                                        <p>
                                            As a blockchain enthusiast, I share my knowledge and insights on my <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" target="_blank" rel="noopener noreferrer">YouTube channel</a>. Follow me for tutorials, discussions, and the latest updates in the blockchain space.
                                        </p>
                                        <iframe
                                            width="100%"
                                            height="250"
                                            src="https://www.youtube.com/watch?v=efvJWM0RXcY"
                                            title="YouTube Channel"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </Col>


                        <Col md={6}>
                            <div className="my-skills">
                                <div className="box">
                                    <div className="box-inner">
                                        <h3>Summary</h3>
                                        <p>As a highly skilled blockchain developer with over 2 years of experience at a rapidly growing startup, I have honed my expertise in full-stack development using cutting-edge technologies like Solidity, React, Node.js, and Web3.js. My passion for blockchain technology has led me to attend several industry events and connect with leading experts in the field, and I have even had the opportunity to speak at local events such as CoinDcx and Mr Mint Blockchain Educational Event in Indore.

                                            I am a broad-minded individual who is always thinking about growth and development, both for myself and for the community. I have a natural talent for teaching and enjoy sharing my knowledge with others, often with a touch of humor that keeps things interesting. My goal is to become a renowned blockchain developer and community builder, known for my expertise, skills, and engaging personality.

                                            In my current role, I have contributed to the development of decentralized applications and NFT marketplaces, and I am always looking for new challenges and opportunities to expand my knowledge and skills. I am excited about the future of blockchain technology and am committed to making a positive impact in this rapidly evolving industry.

                                            Thank you for taking the time to learn more about me. I look forward to connecting with you and exploring potential opportunities for collaboration and growth.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Home;
