import React, { useState, useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
function form() {
  navigate("/form")
}
  const [showForm, setShowForm] = useState(false);

  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Horoscope Match in 2024?</span>
          <span>Seriously?!</span>
          <span>
            Discover ancient wisdom and modern insights in our blended matchmaking report, rooted in the Vedas and tailored to today's priorities. Consult our experienced astrologers for guidance on love, life, and prosperity.
          </span>
        </div>
        <button className="button i-button" onClick={form} >Get your Report</button>
        {/* social icons here*/}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        {/* animation */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      
      {/* Render the form if showForm is true */}
      
    </div>
  );
};

export default Intro;
