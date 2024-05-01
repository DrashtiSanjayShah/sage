// Works.jsx
import React from "react";
import "./Works.css";

const Works = () => {
  return (
    <div className="dos-and-donts" id="works">
      <div className="dos">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>What's</span>
          <span>Included</span>
        </div>
        <div className="dos-list">
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="donts">
        <div className="donts-list">
          <div className="i-name">
            <span>What's</span>
            <span>not</span>
          </div>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Works;
