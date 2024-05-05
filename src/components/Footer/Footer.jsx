import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Wave} alt="Wave" className="footer-wave" />
      <div className="footer-content">
        <div className="footer-links">
          <Link to="features" spy={true} smooth={true}>
            Why Us?
          </Link>
          <Link to="includednotincluded" spy={true} smooth={true}>
            What's included
          </Link>
          <Link to="faq" spy={true} smooth={true}>
            FAQs
          </Link>
          <Link to="testimonals" spy={true} smooth={true}>
          Reviews
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </div>
        <span className="footer-email">sagebhrigu@gmail.com</span>
        <div className="footer-policy-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
