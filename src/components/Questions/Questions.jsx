import React, { useState } from "react";
import "./Questions.css";
import { questions } from './data.js';

function FAQ() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <main>
      <div className="container">
      <div className="services" id="faq">
      {/* left side */}
      <div className="awesomep">
        {/* dark mode */}
        <span>Frequently Asked </span>
        <span>Questions</span>
        </div>
        </div>
        <section className="sec-faq">
          {questions.map((question) => (
            <div className="faq-item" key={question.id}>
              <h3 onClick={() => toggleExpand(question.id)}>
                {question.title} {expandedId === question.id }
              </h3>
              {expandedId === question.id && <p>{question.info}</p>}
            </div>
          ))}
        </section>
        
      </div>
    </main>
  );
};

export default FAQ;
