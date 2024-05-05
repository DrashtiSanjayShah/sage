import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      SageBhrigu
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
              <Link to="features" spy={true} smooth={true}>
                Why us?
              </Link>
            </li>
            <li>
              <Link to="includednotincluded" spy={true} smooth={true}>
                What's included
              </Link>
            </li>
            <li>
              <Link to="faq" spy={true} smooth={true}>
                FAQs
              </Link>
            </li>
            {/* <li>
              <Link to="testimonals" spy={true} smooth={true}>
                Why Us?
              </Link>
            </li> */}
            <li>
              <Link to="form" spy={true} smooth={true}>
                Contact Us
              </Link>
            </li>
      </ul>
    </nav>
  );
};
export default Navbar;