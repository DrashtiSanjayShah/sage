import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">SageBhrigu</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Why us?
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                What's included
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                FAQs
              </Link>
            </li>
            {/* <li>
              <Link to="testimonals" spy={true} smooth={true}>
                Why Us?
              </Link>
            </li> */}
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
