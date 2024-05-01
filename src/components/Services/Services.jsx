import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Why</span>
        <span>SAGEBHRIU?</span>
        
        <a href='#' download>
          <button className="button i-button">Download Sample report</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "24rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Feature1"}
            detail={"description"}
          />
        </motion.div>
        {/* second card */}
        {/* <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div> */}
        {/* 3rd */}
        <motion.div
          initial={{ top: "16rem", left: "20rem" }}
          whileInView={{ left: "12rem", top: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Feature2"}
            detail={
              "description"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4th */}
        <motion.div
          initial={{ left: "35rem", top: "16rem" }}
          whileInView={{ top:"12rem",left: "36rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Feature3"}
            detail={"Details of the card"}
          />
        </motion.div>
        {/* 5th */}
        <motion.div
          initial={{ top: "26rem", left: "25rem" }}
          whileInView={{ left: "24rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Feature4"}
            detail={"Details of the card"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
