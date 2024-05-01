import React, { useState } from "react";
import "./Portfolio.css";
import { questions } from './data.js';

function Portfolio() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <main>
      <div className="container">
      <div className="services" id="portfolio">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>Frequently Asked</span>
        <span>Questions</span>
        {/* <span>
          in the report
          <br />
        </span> */}
        </div>
        </div>
        <section className="sec-faq">
          {questions.map((question) => (
            <div className="faq-item" key={question.id}>
              <h3 onClick={() => toggleExpand(question.id)}>
                {question.title} {expandedId === question.id }
              </h3>
              <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
              {expandedId === question.id && <p>{question.info}</p>}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Portfolio;
