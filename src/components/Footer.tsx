import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__quote">
          "Peace in code. Power in creation."
          <br />
          <span className="footer__quote-author">– Harry Up There</span>
        </p>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Harry Up There | Built with love and calmness
        </p>
      </div>
    </footer>
  );
};

export default Footer;
